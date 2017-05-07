1. ajax를 통한 json 데이터 전송.

javascript
~~~javascript
let deleteData = {deleteList: deleteVideoCheckList};
let jsonData = JSON.stringify(deleteData); 

utility.runAjaxData(this.deleteReqListener,"POST","/playList/deletePlayList", jsonData, "application/json");


function runAjaxData(reqListener, method, url, data, contentType){

   let xhr = new XMLHttpRequest();
   //reqListener 제일 마지막에 실행된다.

   xhr.open(method, url);
   //xhr.setRequestHeader("Content-Type","application/json");
   if(contentType !== undefined){
        xhr.setRequestHeader("Content-Type",contentType);
   }

   xhr.send(data);
   xhr.addEventListener("load", reqListener);
}
~~~

배열을 ajax로 보내기 위해서는 우선 `{}`을 통해 객체를 만든 후, `JSON.stringify(deleteData);`을 통해 문자열로 만들어 전송한다.

2. Removing an embedded document
~~~javascript
BlogPost.findById(myId, function (err, post) {
  if (!err) {
    post.comments[0].remove();
    post.save(function (err) {
      // do something
    });
  }
});

Album.update({ _id: albumId }, { $pull: { playList:{videoId:{ $in: deleteList }}}}, (err,doc)=>{
        if(err) return res.status(500).send(err);
        res.status(200).send();
});
~~~
`$pull`

The `$pull` operator removes from an existing array all instances of a value or values that match a specified condition.



