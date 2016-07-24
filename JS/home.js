window.onload=function(){
    var abox=document.getElementById("abstract");
    var aimg=abox.getElementsByTagName("img");
    //alert(aimg.length);
    for(var i=0;i<aimg.length;i++)
    {
        aimg[i].index=i;
        aimg[i].onmouseover=function(){
            this.src="images/h-"+(this.index+1)+"-over.png";
        };
        aimg[i].onmouseout=function(){

            this.src="images/h-"+(this.index+1)+".png";;
        };
    }
    //var i=0;
    //var b='ar'+(i+1)+(i+1);
    //alert(typeof b);
    //var imagesrc=[["images/float_bar_qq-over.png",
    //    "images/float_bar_qq.png"],["images/float_bar_phone-over.png","images/float_bar_phone.png"]]
    //for(var i=0;i<2;i++)
    //{
    //
    //    var oImage=document.getElementById('ar'+(i+1));
    //    var oLeft=document.getElementById('ar'+(i+1)+(i+1));
    //    oImage.index=i;
    //    var timer=null;
    //    oImage.onmouseover=oLeft.onmouseover=function(){
    //        clearTimeout(timer);
    //        oImage.src=imagesrc[this.index][0];
    //        alert(this.index);
    //        oLeft.className=' ';
    //        oLeft.className='show';
    //    };
    //    oImage.onmouseout=oLeft.onmouseout=function(){
    //        oImage.src=imagesrc[this.index][1];
    //        timer=setTimeout(function(){
    //            oLeft.className=' ';
    //            oLeft.className='invisible';
    //        },1000);
    //    };
    //}
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