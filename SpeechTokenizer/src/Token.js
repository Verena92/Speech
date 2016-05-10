/**
 * 
 * Autor: Benjamin Mateja
 * 
 */

/**
 * This function handles Tokens.
 * Input Keywords / User Data -> Token 
 */

var TokenNew = {};

function Token(){
	
	/**
	 * Call Tokenize JS
	 */
	console.log(Tokenize());
		
	/**
	 * Create Tokens with the keywords
	 */
	for (i = 0; i < uncommonArr.length; i++){
		TokenNew = {
				id: i+1,
				keyword: uncommonArr[i],
				createdByFirstName:"Benjamin",
				createdByLastName:"Mateja",
				profession:"Student",
				TokenInformation: function() {
					return this.createdByFirstName + " " + this.createdByLastName + " is a " +
					this.profession + ". Keyword: " +this.keyword + " with ID: " +this.id;
				}
		};
		
		console.log(TokenNew);
		
	}

};