var myGlobal;

(function() {
//	console.log('Hello World from extension');
//	chrome.browserAction.setTitle({
//		title: 'Aldos first Add-On'
//	});
    
    chrome.browserAction.setPopup({
        popup:"popup.html"
    });
}())