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









/***** HBB TV *****/
chrome.windows.getCurrent(function(currentWindow) {
//      document.body.style.height = '300px';
//      document.body.style.border = "1px dotted #0000FF";
    document.getElementById('info').innerHTML += '<p>Main Window height: '+currentWindow.height+'<p><p>Main Window width: '+currentWindow.width+'<p>';
});



function modifyDOM() {
    //You can play with your DOM here or check URL against your regex
    console.log('Tab script:');
    console.log(document.body);
    return document.body.innerHTML;
}

function hbbTV(){
    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '('+modifyDOM+');' //argument here is a string but function.toString() returns function's code
    }, function(results) {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:');
        console.log(results[0]);
    });
}

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    console.log(tabs[0]);
});


document.getElementById("hbbTV").onclick = hbbTV;

