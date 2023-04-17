var hour=document.querySelector('.h')
var minute=document.querySelector('.m')
var secnd=document.querySelector('.s')
var inputime=+new Date('2022-8-30 16:30:00')
countDown();
setInterval(countDown,1000);
function countDown(){
    var nowTime=+new Date();
    var times=parseInt(inputime-nowTime)/1000;
    var h=parseInt(times/60/60%24);
    h=h<10?'0'+h:h;
    hour.innerHTML=h;
    var m=parseInt(times/60%60);
    m=m<10?'0'+m:m;
    minute.innerHTML=m;
    var s=parseInt(times%60);
    s=s<10?'0'+s:s;
    secnd.innerHTML=s;
}