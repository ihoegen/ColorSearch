/******************************************************************************************************************
 * @author: Ian Hoegen
 * @date: 4/9/2016
 * 
 * This program is intended to be used as an injection script.
 * It is designed for use with the Google search engine.
 * It's purpose is to add a "Search Card" to the top of the results when a valid color is searched. 
 * This makes it easier to find a color. 
 *
 *****************************************************************************************************************/
 
 /******************************************************************************************************************
 * This method, is the main method of the program. After execution of this method, a search card with the color that is 
 * specified in the search bar should be visible. 
 */
function initializeColors() {
	//Clears the card for looping purposes.
	if(document.getElementById('colorSearch') != null){
		removeCard();		
	}
	
	var searchBoxValue = document.getElementById('lst-ib').value.toLowerCase(); //Value of the search box
	var formattedString;
	
	if(searchBoxValue.indexOf('#') === 0 || (searchBoxValue.indexOf('r')===0 && searchBoxValue.indexOf('g')===1 && searchBoxValue.indexOf('b')===2)){
		searchBoxValue = searchBoxValue.toUpperCase(); //Hex Code or RGB to all capital
	} else {
		searchBoxValue = searchBoxValue.charAt(0).toUpperCase() + searchBoxValue.slice(1); //Capitalize just the first letter of color names.
	}
	//The HTML to be injected
	var htmlText = '<div id="colorSearch" style="padding-bottom:10px; width:555px; margin-left:-10px;"><div style=" margin-bottom:25px; box-shadow: rgba(0,0,0,0.2) 0px 1px 4px 0px"><div> <div> <ol><div style="padding-left:20px; padding-right:20px; padding-top:20px; clear:none"><div id="colorPanel" style="height:250px; background-color:' + searchBoxValue+ ';"></div></div><div style="padding-bottom:20px; padding-left:20px; padding-right:20px; padding-top:10px;"><div><h3>' + searchBoxValue +'</h3></div></div></div></ol></div><div style="clear:both"></div></div></div><div><div style="color:rgb(119, 119, 119); display:block; float: right; font-family: arial, sans-serif; font-size:11px; font-style: italic; font-weight: normal; margin-left:22px; margin-top:-20px; line-height: normal;"><div data-async-context="async_id:duf3-1-0;authority:0;card_id:;entry_point:0;feature_id:;open:0;type:1"><div style="display:none" jsl="$t t-aTz9-_sUcEc;$x 0;"></div><div id="duf3-1-0"></div><span id="colorSearchTag">Brought to you by <a href="https://paypal.me/ihoegen/5" onclick="window." onmouseout="this.style.color=\'rgb(119,119,199)\'" style="color:rgb(119,119,119)" onmouseover="this.style.color=\'#212121\'">Color Search</a></span></div></div></div></div>';

	var topResult = document.getElementById('rso'); //Top search result
	
	if(topResult!=null){
		topResult.insertAdjacentHTML('beforebegin', htmlText); //Injects the HTML to the code
		var f = document.getElementById('colorPanel').style.backgroundColor; //Makes the card show the color
		//In case it is an invalid color, the card his hidden.
		if(f==''){
			removeCard();
		} 	
	}
}

/******************************************************************************************************************
 *@author:  Ayman Farhat
 *
 * This method handles the intervals for running the color card. 
 * It acts as a loop, that runs a specified amount of times, and at a set interval.
 *
 * @param func: The function to be performed on looping
 * @param wait: The interval to wait before executing the function
 * @param times: The number of times to execute the function
 *
 */
function interval(func, wait, times){
    var interv = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(interv, w);
                try{
                    func.call(null);
                }
                catch(e){
                    t = 0;
                    throw e.toString();
                }
            }
        };
    }(wait, times);

    setTimeout(interv, wait);
};

/******************************************************************************************************************
 *
 * This method removes the card when needed, such as when refreshing. 
 *
 */
function removeCard(){
		var mainColorApp = document.getElementById("colorSearch");
		mainColorApp.parentNode.removeChild(mainColorApp);
		var smallText = document.getElementById("colorSearchTag");
		smallText.parentNode.removeChild(smallText);	
}

//Initialize the program

 interval(function(){
        initializeColors()
    }, 2000, 10000);