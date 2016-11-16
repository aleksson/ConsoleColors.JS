# ConsoleColors.JS
A Sexy Console.log

     Inspired by firebugs style prefix effects - %c
     Examples - https://coderwall.com/p/fskzdw/colorful-console-log
     
```javascript 
console.log('%c This is Soo Nice!', 'color: orange; font-weight: bold;');

```


## Go nuts with CSS3
```javascript 
var consoleColors = [
    'background: linear-gradient(#000, #f3f3f3)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
].join(';');
console.log('%c Ohh yeah!', consoleColors);

```
