function openNav() {
	var tamanhoNav;
	if (self.innerWidth <= 1000) 
		tamanhoNav = "40%";
	else
		tamanhoNav = "270px";
	document.getElementById("menuLateral").style.width = tamanhoNav;
	document.getElementById("menuLateral").style.boxShadow = "4px 4px 100px 4px rgba(149, 214, 0, 0.71)";
	document.getElementById("menuLateral").style.webkitBoxShadow = "4px 4px 100px 4px rgba(149, 214, 0, 0.71)";
	document.getElementById("nav").style.boxShadow = "4px 4px 100px 4px rgba(0, 0, 0, 0.71)";
	document.getElementById("nav").style.webkitBoxShadow = "4px 4px 100px 4px rgba(0, 0, 0, 0.71)";
  }

function closeNav() {
	document.getElementById("menuLateral").style.width = "0";
	document.getElementById("nav").style.boxShadow = "4px 4px 100px 4px rgba(149, 214, 0, 0.71)";
	document.getElementById("nav").style.webkitBoxShadow = "4px 4px 100px 4px rgba(149, 214, 0, 0.71)";
}