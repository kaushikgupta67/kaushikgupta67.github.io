var i=0;
var slides=[];

slides[0]="../slides/tf.jpg";
slides[1]="../slides/tf1.jpg";
slides[2]="../slides/tf2.jpg";
slides[3]="../slides/tf3.jpg";

function slideImg(){

    document.slideimg.src=slides[i];
    if(i<slides.length-1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout("slideImg()",4000);
}
window.onload=slideImg;