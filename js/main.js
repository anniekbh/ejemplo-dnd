var derecha = document.getElementById("derecha");
var izquierda = document.getElementById("izquierda");
var contador = 1;

window.addEventListener("load", function(){
	crearSpan();	
	
	/*izquierda.addEventListener("dragenter", dragEntraDiv , false);

	*/
});

derecha.addEventListener("dragover", dragSobreDiv, false);
derecha.addEventListener("dragleave", dragSalioDiv, false);
izquierda.addEventListener("dragover", dragSobreDiv, false);
izquierda.addEventListener("dragleave", dragSalioDiv, false);
izquierda.addEventListener("drop", manejarDrop);
derecha.addEventListener("drop", manejarDrop);

function dragSobreDiv(e){
	e.preventDefault();
	this.classList.add("over");
	return false;
};

function dragSalioDiv(e){
	e.preventDefault();
	this.classList.remove("over");
};

function manejarDrop(e) {
	e.preventDefault();
	var dato = e.dataTransfer.getData("text");
	e.target.appendChild(document.getElementById(dato));
		
};
			
function crearSpan() {
	var spanIn = document.createElement("div");

	spanIn.setAttribute("class","spanUno");
	spanIn.setAttribute("draggable", "true");
	spanIn.setAttribute("id", contador++);
	
	derecha.appendChild(spanIn);
	

	spanIn.addEventListener("dragstart", dragIniciado, false);
	function dragIniciado(e) {
		//spanIn.style.backgroundColor = "blue";
		e.dataTransfer.setData("text", e.target.id);
	};
	
};
