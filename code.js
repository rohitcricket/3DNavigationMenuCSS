var img =$(document.createElement("img"));
$(img).attr({
	"src":this.url,
	"data-index":count,
	"title":this.title,
	"alt": this.description
	});

window.addEventListener("load", function() {
	var containers = document.querySelectorAll(".container");

	for (var i = 0; i < containers.length; i++) {
		containers[i].addEventListener("touchstart", function() {
			this.classList.toggle('hover');
		})
	}
});