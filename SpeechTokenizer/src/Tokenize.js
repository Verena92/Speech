/**
 * Autor: Benjamin Mateja
 */

var filterWords = 'be, have, do, say, get, make, get, know, take, see, come, think, look, want, give, use, find, tell, ask, work, seem, feel, try, leave, call, good, new, first, last, long, great, little, own, other, old, right, big, high, different, small, large, next, early, young, important, few, public, bad, same, able, to, of, in, for, on, with, at, by, from, up, about, into, over, after, beneath, under, above, the, and, a, that, I, it, not, he, as, you, this, but, his, they, her, she, or, and, will, my, one, all, would, there, their, is, now, hi, hello, hey, up';
var uncommonArr = [];

function Tokenize(){
	
	/**
	 * This variable "common" contains words which should be filtered. 
	 * Words in this variable can't be a token, so be careful.
	 * The list of most common english words can be found here: 
	 * https://en.wikipedia.org/wiki/Most_common_words_in_English
	 * Used are verbs, prepositions, adjectives, others, ...
	 * This list can be updated here.
	 * PLS update the list in GoogleDrive also!
	 */
		
	var sttResult = "Hello Thomas! What's up at the Ninja Project? Talking about some figures here.";
	var sttResult1 = sttResult.split('!').join("");
	var sttResult2 = sttResult1.split(':').join("");
	var sttResult3 = sttResult2.split('.').join("");
	var sttResult4 = sttResult3.split('?').join("");
	var sttResultFin = sttResult4.split(';').join("");
	
	
	/**var sttResultLength = sttResult.length;
	var sttResultLower = sttResult.toLowerCase();
	var sttResultUpper = sttResult.toUpperCase();
	var sttResultSplit = sttResult.split(/\b\s+(?!$)/);
	var sttResultRemove = sttResult.split('.').join("");
	var sttResultRemove1 = sttResultRemove.split('!').join("");
	var sttResultRemove2 = sttResultRemove1.split(',').join("");
	var sttResultRemove3 = sttResultRemove2.split(';').join("");
	var sttResultMatch = sttResultRemove3.match(/\S+/g);*/
		
		/**return sttResult;
		return sttResultLength;
		return sttResultLower;
		return sttResultUpper;
		return sttResultSplit;
		return sttResultRemove1;
		return sttResultMatch;
		/**return [sttResult, sttResultMatch];*/
		
	/**
	 * uncommonArr is the global array with desired words.
	 */
	
		/**
		 * Function to filter common words.
		 */
	function getUncommon(){
		var wordArr = sttResultFin.match(/\S+/g),
			commonObj = {},
			word, 
			i;
		
		/**
		 * filterWords: create an object with words which should be filtered (filterWords)
		 */
		filterWords = filterWords.split(',');
		for ( i = 0; i < filterWords.length; i++) {
				commonObj[ filterWords[i].trim() ] = true;
			}
		
		/**
		 * Get the words of the represented string. Then, check them with the filtered Words. 
		 * After that, push them in an array.
		 */
		for ( i = 0; i < wordArr.length; i++){
			word = wordArr[i].trim().toLowerCase();
			if ( !commonObj[word] ) {
				uncommonArr.push(word);
			}
		}
		
		return uncommonArr;
				
		}
	
	return getUncommon();
	
	
	
};