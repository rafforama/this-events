//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var pElem = document.getElementsByClassName("navi");

for (var i = 0; i < pElem.length; i++){
	pElem[i].addEventListener("mouseover", showMenu);
	pElem[i].addEventListener("mouseout", removeMenu);
}

function showMenu(){
	var menuInfo = this.querySelectorAll(".inner")[0];
	menuInfo.style.display = "block";
// 	if (menuInfo.style.display === "none"){
// 		menuInfo.style.display = "block";
// 	}else{
// 		menuInfo.style.display = "none";
// 	}
// }
}
function removeMenu(){
	var menuInfo = this.querySelectorAll(".inner")[0];
	menuInfo.style.display = "none";
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


var menuElem = document.getElementsByClassName("name");

for(var i = 0; i < menuElem.length; i++){
	menuElem[i].addEventListener("click", results);
}

function results(){
	var menu = this.querySelectorAll(".menu")[0];
	if (menu.style.display === "none"){
		menu.style.display = "block";
	}else{
		menu.style.display = "none";
	}
}