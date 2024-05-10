# ConsoleColors.JS
A Colorful Console.log

     Inspired by firebugs style prefix effects - %c
     Examples - https://coderwall.com/p/fskzdw/colorful-console-log
     Documentation : https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output
     
   
Add/Include the JS file in your page/project
```html 
<script type="text/javascript" src="ConsoleColors.js"></script>
```


#Parameters
>text, text-color, background-color, border, border-color

###     [1]  Text (required)
     String
     
###     [2]  Text Color (optional)
     String or RGB code
      
###     [3]  Background Color (optional)
     String or RGB code
     
###     [4]  Border (optional)
     Boolean - if set to TRUE (2px solid black)
     
###     [5]  Border Color  (optional)
     String or RGB code


## Front-end Example  
   
```javascript 
console.log("console with text colors","darkred");
console.log("console with background colors","black","orange");
console.log("console with border","cyan","green",true);
console.log("and border colors","cyan","green",true,"purple");

```

## Load into another js file  
With jQuery
   
```javascript 
$.getScript("ConsoleColors.js", function(){
   console.log("Color file loaded...");
});
```





