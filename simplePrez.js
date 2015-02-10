var slides = ["slide3-01.png",
			  "slide3-02.png",
			  "slide3-03.png",
			  "slide3-06.png",
			  "slide3-07.png",
			  "slide3-08.png"]
var index = 0

window.onload = function() {
	changeSlides()
}

function keyEvent(event) {
	if (event.keyCode == 37) {
		if (index > 0) {
			index--;
			changeSlides()
		}
	} else if (event.keyCode == 39) {
		if (index < slides.length - 1) {
			index++;
			changeSlides()
		}
	}
}

function changeSlides() {
	var slideDiv = document.getElementById("slides")
	if (slideDiv.children[0] != null) {
		slideDiv.removeChild(slideDiv.children[0])
	}

	var img = document.createElement("img")
	img.setAttribute("src", slides[index])

	slideDiv.appendChild(img)
}
