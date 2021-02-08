var interval = setInterval(choosePic, 3000);

var myPix = new Array("https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg", "https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg", "https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg");


function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("mypic").src = myPix[randomNum];

}