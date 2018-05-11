function $(id){
	return typeof id == "string"?document.getElementById(id):id;
}

window.onload = function(){
	var titleName = $("tab-title").getElementsByTagName("li");
	var tabCount = $("tab-body").getElementsByTagName("ul");
	if (titleName.length != tabCount.length) {
		return;
	}
	for (var i=0;i <titleName.length;i++) {
		titleName[i].id = i;
		titleName[i].onmouseover = function(){
			for (var j=0;j <titleName.length;j++) {
				titleName[j].className = "";
				tabCount[j].style.display = "none";
			}
			this.className = "selected";
			tabCount[this.id].style.display = "block";
		}
	}
}
