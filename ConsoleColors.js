var log = console.log;
console = {};

console.log = function (text,color,background,border,borderColor) {
	text = '%c ' + text +' ';
	style = 'color:'+ color +';';
    if(background) style += 'background:'+background+';';
    if(border) style += 'border: 2px solid black;';
    if(borderColor) style += 'border: 2px solid '+ borderColor+';';
	return log(text,style);
}


console.ok = function (text) {
    text = '%c ' + text+' ';
    style = 'color:white;';
    style += 'background:green;';
    return log(text,style);
}

console.warn = function (text) {
    text = '%c ' + text +' ';
    style = 'color:white;';
    style += 'background:orange;';
    return log(text,style);
}

console.error = function (text) {
    text = '%c ' + text +' ';
    style = 'color:white;';
    style += 'background:red;';
    return log(text,style);
}



log("ConsoleColors Examples:")
console.log("console with text colors","darkred");
console.log("console with background colors","black","orange");
console.log("console with border","cyan","green",true);
console.log("and border colors","cyan","green",true,"purple");
log("\n\n\n\n");


log("ConsoleColors builtIn Components");
log("----------->")
console.ok("console.ok");
console.warn("console.warn");
console.error("console.error");
log("<-----------");
