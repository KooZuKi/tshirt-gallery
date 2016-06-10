function shirt (name, color, stock, size, image) {
	this.name = name;
	this.color = color;
	this.stock = stock;
	this.size = size;
	this.image = image;
}

var shirtArray = []

var Carle = new shirt('Carle Tee', "green-space", 100, "large", "images/shirt1.jpg");
var Kenny = new shirt('Kenny Tee', "ocean-grass", 49, "small", "images/shirt2.jpg");
var Wendy = new shirt('Wendy Tee', "super-gray", 32, "medium", "images/shirt3.jpg");
var Jammy = new shirt('Jammy Tee', "blue-wave", 112, "medium", "images/shirt5.jpg");
var Danny = new shirt('Danny Tee', "white-cloud", 30, "large", "images/shirt4.jpg");
var Oscar = new shirt('Oscar Tee', "paper-wrap", 98, "small", "images/shirt6.jpg");

shirtArray.push(Carle)
shirtArray.push(Kenny)
shirtArray.push(Wendy)
shirtArray.push(Jammy)
shirtArray.push(Danny)
shirtArray.push(Oscar)

for(i=0; i < shirtArray.length; i++) {
	var tName = document.createTextNode(shirtArray[i].name);
	var tColor = document.createTextNode("Color: " + shirtArray[i].color)
	var tStock = document.createTextNode("In stock: " + shirtArray[i].stock)
	var tSize = document.createTextNode("Available size: " + shirtArray[i].size);
	var tButton = document.createTextNode("Buy Now!");
	var infoButton = document.createTextNode("More Info");
	var infoNote = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non, sunt in culpa qui officia deserunt mollit anim id est laborum.");
	var tImage = shirtArray[i].image

	var newCol = document.createElement("DIV");
	var newDiv = document.createElement("DIV");
	var nameH1 = document.createElement("H1");
	var sizeH4 = document.createElement("H4");
	var colorH4 = document.createElement("H4");
	var stockH4 = document.createElement("H4");
	var buyNow = document.createElement("Button");
	var activeButton = document.createElement('a');
	var descriptionInfo = document.createElement("DIV");
	var infoH4 = document.createElement("H4");
	var moreInfo = document.createElement("Button");
	var image = document.createElement("IMG");


	nameH1.appendChild(tName);
	sizeH4.appendChild(tSize);
	stockH4.appendChild(tStock);
	colorH4.appendChild(tColor);
	buyNow.appendChild(tButton);
	activeButton.appendChild(moreInfo);
	infoH4.appendChild(infoNote);
	descriptionInfo.appendChild(infoH4);
	activeButton.appendChild(descriptionInfo);
	moreInfo.appendChild(infoButton);


	buyNow.className = "btn btn-primary btn-lg";
	activeButton.href = "#";
	activeButton.className = "activeBox";
	descriptionInfo.href = "#";
	descriptionInfo.className = "description";
	moreInfo.className = "btn btn-default btn-lg";
	image.src = tImage;
	image.className = "img-responsive";

	newCol.className = "col-sm-4";
	newDiv.className = "tshirt shirtName" + i + " thumbnail";
	newDiv.appendChild(nameH1);
	newDiv.appendChild(image);
	newDiv.appendChild(sizeH4);
	newDiv.appendChild(stockH4);
	newDiv.appendChild(colorH4);
	newDiv.appendChild(buyNow);
	newDiv.appendChild(activeButton);
	newCol.appendChild(newDiv);

	document.getElementById('shirt').appendChild(newCol)
}

$(".activeBox").mouseover(function() {
	$(this).children(".description").show();
}).mouseout(function() {
	$(this).children(".description").hide();
});