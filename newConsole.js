/*let log = console.log;
console = {};
*/

console.logg = (text, textColor, backgroundColor, border, borderColor) => {
	text = `%c${text}`;
	style = `color:${textColor};`;
    if(backgroundColor) style += `background:${backgroundColor};`;
    if(border) style += `border: 2px solid black;`;
    if(borderColor) style += `border: 2px solid ${borderColor};`;

	return console.log(text,style);
}
/*
console.ok = (text) => {
    text = `%c ${text} `;
    style = 'color: white;';
    style += 'background: green;';

    return console.log(text,style);
}

console.warn = (text) => {
    text = `%c ${text} `;
    style = 'color: white;';
    style += 'background: darkorange;';

    return console.log(text,style);
}

console.error = (text) => {
    text = `%c ${text} `;
    style = 'color :white;';
    style += 'background: red;';

    console.log(text,style);
}*/