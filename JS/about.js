/**
 * Created by Boody on 2016/7/21.
 */
window.onload=function(){
    var oImage1=document.getElementById('ar1');
    var oLeft1=document.getElementById('ar11');
    var timer=null;

    oImage1.onmouseover=oLeft1.onmouseover=function(){
        clearTimeout(timer);
        oImage1.src="images/float_bar_qq-over.png";
        oLeft1.className=' ';
        oLeft1.className='show';
    };
    oImage1.onmouseout=oLeft1.onmouseout=function(){
        oImage1.src="images/float_bar_qq.png";
        timer=setTimeout(function(){
            oLeft1.className=' ';
            oLeft1.className='invisible';
        },1000);
    };
    var oImage2=document.getElementById('ar2');
    var oLeft2=document.getElementById('ar22');
    var timer1=null;

    oImage2.onmouseover=oLeft2.onmouseover=function(){
        clearTimeout(timer1);
        oImage2.src="images/float_bar_phone-over.png";
        oLeft2.className=' ';
        oLeft2.className='show';
    };
    oImage2.onmouseout=oLeft2.onmouseout=function(){
        oImage2.src="images/float_bar_phone.png";

        timer1=setTimeout(function(){
            oLeft2.className=' ';
            oLeft2.className='invisible';
        },1000);
    };
};