color = {};
color.log = function (text,color) {
	text = '%c ' + text;
	color = 'color:'+ color +';';
	return console.log(text,color);
}

color.log("ConsoleColors.JS","gray");
color.log("i.","red");
color.log("n..","orange");
color.log("i...","green");
color.log("t....","blue");
