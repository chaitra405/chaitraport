
const header=document.querySelector('.navbar');
window.onscroll=function(){
    var top=window.srollY;
    if(top>=100){
        header.classList.add('nabbarDark');
    }
    else{
        header.classList.remove('nabbarDark');
    }
}
