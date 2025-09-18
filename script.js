const photos = [
  "images/foto39.jpg","images/foto2.jpg","images/foto3.jpg","images/foto4.jpg","images/foto5.jpg","images/foto6.jpg",
  "images/foto7.jpg","images/foto8.jpg","images/foto9.jpg","images/foto10.jpg","images/foto11.jpg",
  "images/foto12.jpg","images/foto13.jpg","images/foto14.jpg","images/foto15.jpg","images/foto16.jpg","images/foto17.jpg",
  "images/foto18.jpg","images/foto19.jpg","images/foto20.jpg","images/foto21.jpg","images/foto22.jpg","images/foto23.jpg",
  "images/foto24.jpg","images/foto25.jpg","images/foto26.jpg","images/foto27.jpg","images/foto28.jpg","images/foto29.jpg",
  "images/foto30.jpg","images/foto31.jpg","images/foto32.jpg","images/foto33.jpg","images/foto34.jpg","images/foto35.jpg",
  "images/foto36.jpg","images/foto37.jpg","images/foto38.jpg","images/foto1.jpg","images/foto40.jpg","images/foto41.jpg",
  "images/foto42.jpg","images/foto43.jpg","images/foto44.jpg","images/foto45.jpg","images/foto46.jpg","images/foto47.jpg",
  "images/foto48.jpg","images/foto49.jpg","images/foto50.jpg","images/foto51.jpg","images/foto52.jpg","images/foto53.jpg",
  "images/foto54.jpg","images/foto55.jpg","images/foto56.jpg","images/foto57.jpg","images/foto58.jpg","images/foto59.jpg",
  "images/foto60.jpg","images/foto61.jpg","images/foto62.jpg","images/foto63.jpg","images/foto64.jpg","images/foto65.jpg",
  "images/foto66.jpg","images/foto67.jpg","images/foto68.jpg","images/foto69.jpg","images/foto70.jpg","images/foto71.jpg",
  "images/foto72.jpg","images/foto73.jpg","images/foto74.jpg","images/foto75.jpg","images/foto76.jpg","images/foto77.jpg",
  "images/foto78.jpg","images/foto79.jpg","images/foto80.jpg","images/foto81.jpg"
];

var cur_photo = 0;

function image_next() {
    cur_photo++;
    if (cur_photo>=photos.length) {
        cur_photo = 0;
    }
    image_display();
}

function image_prev() {
    cur_photo--;
    if (cur_photo<0) {
        cur_photo = photos.length-1;
    }
    image_display();
}

function image_large() {
    document.getElementById("display").style.height=window.innerHeight+"px";
    document.getElementById("displayimg").src=photos[cur_photo];
    document.getElementById("displayimg").style.height=window.innerHeight+"px"
    document.getElementById("display").style.display="block";
}

function image_close() {
    document.getElementById("display").style.display="none";
}

function image_display() {
    document.getElementById("photo_num").textContent = (cur_photo + 1) + "/" + photos.length
    document.getElementById("photo").style.backgroundImage="url('"+ photos[cur_photo] + "')";
}

window.onload = function(){
    image_display();
}