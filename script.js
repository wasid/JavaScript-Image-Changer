var arrayImg = document.getElementById('src');

var imgSrc = document.getElementById("contents");


function img_changes(){
    
    var value = this.value;
    
    imgSrc.src = value;
    
}

arrayImg.addEventListener( 'change', img_changes );