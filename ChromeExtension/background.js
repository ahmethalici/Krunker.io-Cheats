chrome.webRequest.onBeforeRequest.addListener(function(details) {
	return {
		redirectUrl: chrome.extension.getURL("game.js")
	};
}, {
	urls: ["http://krunker.io/js/game.js"]
}, ["blocking"]);