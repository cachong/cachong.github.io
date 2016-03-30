//Catify
function catify() {
	if(document.getElementById('cat').src.indexOf("catbubble") > -1) {
		document.getElementById('title').innerHTML="Catleigh Chong";
		document.getElementById('name').innerHTML="Catleigh Chong";
		document.getElementById('me').src="./catme.jpg";
		document.getElementById('umich').src="./cat3.png";
		document.getElementById('cat').src="./elephant.jpg";
		document.getElementById('pepp').src="./cat5.png";
		document.getElementById('452').src="./cat8.png";
		document.getElementById('373').src="./cat7.png";
		document.getElementById('beagle').src="./cat4.png";
		document.getElementById('inverter').src="./cat2.png";
		document.getElementById('shanghai').src="./cat6.png";
		document.getElementById('mail').src="./cat1.png";
	}
	else if (document.getElementById('cat').src.indexOf("elephant") > -1) {
		document.getElementById('title').innerHTML="Caleigh Chong";
		document.getElementById('name').innerHTML="Caleigh Chong";
		document.getElementById('me').src="./me.jpg";
		document.getElementById('umich').src="./michigan.png";
		document.getElementById('cat').src="./catbubble.png";
		document.getElementById('pepp').src="./pepp.jpg";
		document.getElementById('452').src="./intersectmat.jpg";
		document.getElementById('373').src="./tankgame.jpg";
		document.getElementById('beagle').src="./beaglebone.jpg";
		document.getElementById('inverter').src="./inverter.png";
		document.getElementById('shanghai').src="./shanghai.jpg";
		document.getElementById('mail').src="./email_icon.png";
	}
}
