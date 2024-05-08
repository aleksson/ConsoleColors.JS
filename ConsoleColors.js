let log = console.log;
console = {};


console.log = (text, textColor, backgroundColor, border, borderColor) => {
	text = `%c${text}`;
	style = `color:${textColor};`;
    if(backgroundColor) style += `background:${backgroundColor};`;
    if(border) style += `border: 2px solid black;`;
    if(borderColor) style += `border: 2px solid ${borderColor};`;

	return log(text,style);
}

console.ok = (text) => {
    text = `%c ${text} `;
    style = 'color: white;';
    style += 'background: green;';

    return log(text,style);
}

console.warn = (text) => {
    text = `%c ${text} `;
    style = 'color: white;';
    style += 'background: darkorange;';

    return log(text,style);
}

console.error = (text) => {
    text = `%c ${text} `;
    style = 'color :white;';
    style += 'background: red;';

    log(text,style);
}

const showDemo = () => {
    console.log("ConsoleColors Examples:");
    console.log("Text color", "orange");
    console.log("Background color", "black", "orange");
    console.log("Text with border", "white", "green", true);
    console.log("Text Color with border Color", "white", "green", true, "orange");
    console.log("\n\n\n\n");
    
    log("Usefull Color Methods");
    console.ok("console.ok");
    console.warn("console.warn");
    console.error("console.error");
}
//showDemo();