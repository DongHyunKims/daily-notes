var ns = {};

//utility
ns.util = {
  sendAjax: function(url, fn) {
    const oReq = new XMLHttpRequest();

    oReq.addEventListener("load", function() {
      var jsonObj = JSON.parse(oReq.responseText);
      fn(jsonObj);
    });
    oReq.open("GET", url);
    oReq.send();
  },
  getChildOrder: function(elChild) {
    const elParent = elChild.parentNode;
    let nIndex = Array.prototype.indexOf.call(elParent.children, elChild);
    return nIndex;
  },
  $: function(selector) {
    return document.querySelector(selector);
  }
}


ns.dispatcher = {
  register: function(fnlist) {
    this.fnlist = fnlist;
  },
  emit: function(o, data) {
    this.fnlist[o.type].apply(null, data);
  }
}

//model
ns.model = {
  newsList: [],  // 뉴스 리스트. json을 받은 값 그대로
  currentNewsOrder: 0, // 현재 뉴스의 순서.

  getAllNewsList: function() {
    return this.newsList;
  },
  getCurrentNewsOrder: function() {
    return this.currentNewsOrder;
  },
  changeCurrentNews: function(order) {
    this.currentNewsOrder = order;
    ns.dispatcher.emit({
      "type": "changeCurrentPanel"
    }, [order, this.newsList[order]]);
  },
  saveAllNewsList: function(newsList) {
    this.newsList = newsList;
    ns.dispatcher.emit({
      "type": "changeNewsList"
    }, [newsList]);
  },
  removeCurrentNewsData: function() {
    this.newsList.splice(this.currentNewsOrder, 1);
    ns.dispatcher.emit({
      "type": "changeNewsList"
    }, [this.newsList]);
  }
}

ns.view = {};
//HEADERVIEW

ns.view.header = {
  init: function() {
    this.registerEvents();
  },
  registerEvents: function() {

    function _btnClickHandler(direction) {
      ns.dispatcher.emit({
        'type': "afterMoveButton"
      }, [direction]);
    }

    ns.util.$(".left").addEventListener('click', () => {
      _btnClickHandler.call(this, "left")
    });
    ns.util.$(".right").addEventListener('click', () => {
      _btnClickHandler.call(this, "right")
    });
  }
}


//LIST VIEW 왼쪽 뷰
ns.view.list = {
  init: function() {
    this.selectList();
  },
  renderView: function(result) {
    const sHTML = result.reduce(function(prev, next) {
      return prev + "<li>" + next.title + "</li>"
    }, "");
    this.listParent.innerHTML = sHTML;
    this.setHighLightTitle(0);
  },
  setHighLightTitle: function(order) {
    const elSelectedNode = this.listParent.querySelector(".selectedList");
    if (elSelectedNode) elSelectedNode.className = "";

    const curNode = this.listParent.querySelector("li:nth-child(" + ++order + ")");
    curNode.className = "selectedList";
  },
  selectList: function() {
    ns.util.$(".mainArea ul").addEventListener("click", function(evt) {
      const currentOrder = ns.util.getChildOrder(evt.target);
      // 변화를 알려주는 부분
      ns.dispatcher.emit({
        "type": "changeCurrentNews"
      }, [currentOrder]);
    }.bind(this));
  }
}

//CONTENT VIEW
// 계속 렌더링 한다.
ns.view.content = {
  renderView: function(newsObj) {
    const sTemplate = ns.util.$("#newsTemplate").innerHTML;
    const sList = newsObj.newslist.reduce(function(prev, next) {
      return prev + "<li>" + next + "</li>"
    }, "");
    let result = sTemplate.replace(/{title}/, newsObj.title).replace(/{imgurl}/, newsObj.imgurl);

    result = result.replace(/{newsList}/, sList);

    this.insertNewsContent(result);
  },
  insertNewsContent: function(result) {
    this.base.innerHTML = result;
  },
  init: function(name) {
    this.registEvents();
  },

  // 삭제 해주는 것
  registEvents: function() {
    //remove news
    const parent = ns.util.$(".content");
    parent.addEventListener("click", function(evt) {
      const el = evt.target;
      if (el !== "BUTTON" && el.parentNode.nodeName !== "BUTTON") return;
      // 내가 삭제 했다는 것!!
      ns.dispatcher.emit({
        type: "removeCurrentNewsData"
      }, []);
    }.bind(this))
  }
}

//CONTROLLER
//이미 관계를 등록 해 놓는 것이다. 이벤트 등록 부분
ns.controller = {
  join: function() {
    ns.dispatcher.register({
      //View Event
      "initView": function(result) {
        this.model.saveAllNewsList(result);
      }.bind(this),

      "afterMoveButton": function(direction) {
        const nextOrder = this._getNextOrder(direction);
        this.model.changeCurrentNews(nextOrder);
      }.bind(this),

      "changeCurrentNews": function(order) {
        this.model.changeCurrentNews(order);
      }.bind(this),

      "removeCurrentNewsData": function() {
        this.model.removeCurrentNewsData();
      }.bind(this),

      //Model Event
      "changeNewsList": function(result) {
        this.listView.renderView(result);
        this.contentView.renderView(result[0]);
      }.bind(this),

      "changeCurrentPanel": function(nextOrder, newsObj) {
        this.listView.setHighLightTitle(nextOrder);
        this.contentView.renderView(newsObj);
      }.bind(this)

    });
  },
  _getNextOrder: function(direction) {
    const curOrder = this.model.getCurrentNewsOrder();
    const totalCount = this.model.getAllNewsList().length;
    let nextOrder = curOrder;

    if (direction === "left") {
      if (curOrder === 0) nextOrder = totalCount - 1;
      else nextOrder--;
    } else {
      if (curOrder === totalCount - 1) nextOrder = 0;
      else nextOrder++;
    }
    return nextOrder;
  }
}

//sevice runner
document.addEventListener("DOMContentLoaded", function() {
  //initialize all Object
  // 모델, 뷰 인스턴스를 만든다.

  const model = Object.assign(Object.create(ns.model), {});
  const headerView = Object.assign(Object.create(ns.view.header), {});
  const listView = Object.assign(Object.create(ns.view.list), {
    listParent: ns.util.$(".mainArea nav ul"),
  });
  const contentView = Object.assign(Object.create(ns.view.content), {
    base: ns.util.$('.content')
  });

  const controller = Object.assign(Object.create(ns.controller), {
    model: model,
    headerView: headerView,
    listView: listView,
    contentView: contentView
  });

  //start logics 준비가 끝난것.
  headerView.init()
  listView.init();
  contentView.init();

  // 조인은 레지스터를 통해 디스패처에 관계 시켜 준다.
  controller.join();
});

document.addEventListener("DOMContentLoaded", function() {
  ns.util.sendAjax("./data/newslist.json", function(result) {
    ns.dispatcher.emit({
      "type": "initView"
    }, [result]);
  })
});
