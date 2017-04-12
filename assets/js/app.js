//PRODUCTOS
var projects = ["","TAYMAN GROUP", "NALIA ORGANICS", "BRASS COQ","SUNGENRE","LIVING BOTANICS",
"FOAM KING","VOLITION","INK","GILKON","OUTS APPLES","SHERWOOD","PLATINUM"];

var num=projects.length;
var productos=document.getElementById('salida');

function imprimir(event){
  var productos=document.getElementById('salida');

  for(var i=0; i<num;i++){
	  var div=document.createElement("div");
	  div.setAttribute("class","work-products");
	  
	  var figure=document.createElement("figure");
	  var img=document.createElement("img");
	  img.src="assets/img/catalogo/img-" + (i+1) +".jpg";
	  img.setAttribute("class","img");
	  img.alt=projects[i];
	  var figcaption=document.createElement("figcaption");
	  var span=document.createElement("span");
	  span.setAttribute("class","nombre");
	  span.innerHTML= projects[i];

	  figcaption.appendChild(span);
	  figure.appendChild(figcaption);
	  figure.appendChild(img);
	  div.appendChild(figure);
  }
}
window.addEventListener('load', imprimir);


//MODAL

var modal = document.getElementById('pop');

var img = document.getElementsByClassName('img');
var modalImg = document.getElementById("salida");
for (var i = 0; i < img.length; i++) {
	img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
	}
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";}