$(document).ready(function() {
	changeQuote = function(quotes) {
		var newQuote = chooseNewQuote(quotes)
		$('#quotetext').html(newQuote)
	}

	chooseNewQuote = function(quotes) {
		index = Math.floor(Math.random() * quotes.length);
		return (quotes[index]);
	}
	
	tweetQuote = function() {
		console.log("entered 'tweet quote' function")
		var textToTweet = $("#quotetext").text() + " -Mark Twain";
		var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
		window.open(twtLink, '_blank');
	}
	
	buttonClicks = function(quotes) {
		console.log("buttonClicks started")
		$('#newquote').click(function() {
			console.log("'new quote' clicked")
			changeQuote(quotes);
		});
		$('#tweet').click(function() {
			console.log("'tweet' clicked")
			tweetQuote();
		});
	}
	
	/* Read the text with the list of quotes */
	var http = new XMLHttpRequest();
	http.open('get', 'quotes.txt');
	http.onreadystatechange = function () {
		 if (http.readyState == 4 && http.status == 200) {
            /* Create an array of the quotes */
			var result = http.responseText.replace(/\n/g, '<br>');
			var quote_array = result.split('<br>');	
		
			/* Activate the functions that use these quotes */
			changeQuote(quote_array);
			buttonClicks(quote_array);
        }

	};
	http.send();
		
});
