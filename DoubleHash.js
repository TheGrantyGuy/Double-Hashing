var sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var hashArray = new Array (16);

var startingColors = ["#fff", "#eee", "#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888",
"#777", "#888", "#999", "#aaa", "#bbb", "#ccc", "#ddd", "#eee"];

var collisionColors = ["#f00", "#f10", "#f20", "#f30", "#f40", "#f50", "#f60", "#f70", "#f80", "#f90", 
"#fa0", "#fb0", "#fc0", "#fd0", "#fe0", "#ff0"];

var selectedColor = "#00f";
var currentColor = "#0f0";
var collision = "#f00";

var white = "#fff";
var n = sortedArray.length;
var i = 0;
var entered = 0;
    
function setArrayBackground(){
    for (i = 0; i < n; i++){
        document.getElementById("a"+i).style.background = startingColors[i];
    }
}

function reset(){
    for (i = 0; i < n; i++){
        getTextVal("s"+i, "");
        document.getElementById("a"+i).style.background = startingColors[i];
    }
    i = 0;
    entered = 0;
}

function colorSuccess(val){
    document.getElementById(val).style.background = currentColor;
}

function colorCollision(val, pos){
    document.getElementById(val).style.background = collisionColors[pos];
}

function getTextVal(val, set){
    document.getElementById(val).innerText = set;
}

function hashing(){
   setArrayBackground();
    entered++;
    var arrayVal = document.getElementById("inputValue").value;
    var hashVal = ((arrayVal % 16) + (i * ((2 * (arrayVal % 4)) + 1))) % 16;

    if (entered > 16){
        return false;
    }

    if (document.getElementById("s"+hashVal).innerText == ""){
        colorSuccess("a"+hashVal);
        getTextVal("s"+hashVal, arrayVal);
    }

    else{
        
        i = 0;
        colorCollision("a"+hashVal, i);
        while (document.getElementById("s"+hashVal).innerText != ""){
            i++;
            hashVal = ((arrayVal % 16) + (i * ((2 * (arrayVal % 4)) + 1))) % 16;
            colorCollision("a"+hashVal, i);
        }

        i = 0;
        colorSuccess("a"+hashVal);
        getTextVal("s"+hashVal, arrayVal);
    }  
}

