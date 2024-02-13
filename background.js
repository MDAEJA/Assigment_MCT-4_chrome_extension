// Adds a listener for when a tab is updated
chrome.tabs.onUpdated.addListener((tabId, tab) => {

	//https://www.youtube.com/watch?v=vLQBeE6b0uE

	// If the tab is a youtube video, send a message to the chrome runtime
	if (tab.url && tab.url.includes('youtube.com/watch')) {
		// after the if condition true
		let videoId = tab.url.split('?v=')[1];

		// split based on "?v" and it will see like an array [https://www.youtube.com/watch , =vLQBeE6b0uE]
		//videoId = [=vLQBeE6b0uE];

		/**
		 * in some url it will also cotain =vLQBeE6b0uE&t=
		 */

		if (videoId.includes('&t=')) {
			videoId = videoId.split('&t=')[0]
		}

		chrome.tabs.sendMessage(tabId, {
			type: 'newVideo',
			videoId,
		})
	}
})