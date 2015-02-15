# SimplePrez
SimplePrez lets you easily create presentations that can be hosted as a website. Slides are simply declared in HTML, which means they can be anything from images to fully interactive web pages. Scroll between the slides using the buttons or left/right arrow keys. 

### How to use it
Download the files `simplePrez.css`, `simplePrez.js`, and `template.html`.
`simplePrez.css` and `simplePrez.js` contain the core presentation framework code - modify them at your own peril! 

Create your presentation in template.html. You can add your own CSS and Javascript for styling slides in the header. Add slides by adding a `<section>` elements under `<div id="next">`. Each `<section>` element represents a single slide. All children of a `<section>` element will be rendered as part of that slide.

###Example presentation HTML file:
```html
<html>
	<head>
		<link rel="stylesheet" href="slides/simplePrez.css"></link>
		<script type="text/javascript" src="slides/simplePrez.js"></script>
		<!-- CSS and JS go here! -->
		<link rel="stylesheet" href="slides/myStyles.css"></link>
	</head>
	<body onkeydown="keyEvent(event)">
		<div id="slides">
			<div id="current"></div>
			<div id="previous"></div>
			<div id="next">
			  <!-- Slides go here! -->
				<section><img src="slides/img/slide1.jpg"></section>
				<section><img src="slides/img/slide2.jpg"></section>
				<section><img src="slides/img/slide3.jpg"></section>
				<section><iframe src="https://www.google.com/" allowTransparency="true" frameborder="0"></iframe></section>
				<section><img src="slides/img/slide4.jpg"></section>
				<section><img src="slides/img/slide5.jpg"></section>
			</div>
			<button id="prevButton" type=button>&#60;</button>
			<button id="nextButton" type=button>&#62;</button>
		</div>
	</body>
</html>
```

A complete sample presentation can be found here: https://github.com/eric-zeng/auctora/tree/master/slides
