/*

var modal = document.getElementById('myModal');

var img = document.getElementById('img1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";}
 */
var modal = document.getElementById('myModal');

var img = document.getElementsByClassName('img');
var modalImg = document.getElementById("img01");
for (var i = 0; i < img.length; i++) {
	img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
	}
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";}