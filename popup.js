/***** COUNT *****/
function count(x){
    //Chech for a empty input
    if (x == '')
        var wordSplit = '';
    else 
        var wordSplit = x.split(" ");

    var letterSplit = x.split("");
    var wordsCount = (wordSplit.length>=1?wordSplit.length:0);
    var spaceCount = (wordSplit.length>1?wordSplit.length-1:0);
    var lettersCount = letterSplit.length;
    
    return "Number of Letters: "+lettersCount+"<br>"+"Number of Words: "+wordsCount+"<br>Spaces: "+spaceCount;
}

/***** Get Input text *****/
function words(){
    var textInput = document.getElementById("textInput").value;
    
    document.getElementById("textOutput").innerHTML=  count(textInput);
}


/***** GET SELECTED TEXT *****/
function getSelectedText(){
    var x;
    
    var x = chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
    },function(selected) {
        
        document.getElementById("textOutput").innerHTML = count(selected[0]);
    });
}

document.getElementById("countButton").onclick = words;
document.getElementById("selectedText").onclick = getSelectedText;