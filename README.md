# ConsoleColors.JS
A Sexy Console.log

     Inspired by firebugs style prefix effects - %c
     Examples - https://coderwall.com/p/fskzdw/colorful-console-log
     
<Console.Colors.JS Page - https://console.acolab.it>
   
Include ConsoleColors.JS in your project 
```html 
<script type="text/javascript" src="js/ConsoleColors.js"></script>
```


#Parameters
>text, text-color, background-color, border, border-color

###     [1]  Text 
     String
     
###     [2]  Text Color 
     String or RGB code
      
###     [3]  Background Color 
     String or RGB code
     
###     [4]  Border
     Boolean - if set to TRUE (2px solid black)
     
###     [5]  Border Color  
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





