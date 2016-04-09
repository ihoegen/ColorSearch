function initializeColors() {
	if(document.getElementById('colorSearch') != null){
		var mainColorApp = document.getElementById("colorSearch");
		mainColorApp.parentNode.removeChild(mainColorApp);
		var smallText = document.getElementById("colorSearchTag");
		smallText.parentNode.removeChild(smallText);		
	}
	var searchBoxValue = document.getElementById('lst-ib').value;
	var formattedString;
	if(searchBoxValue.indexOf('#') === 0){
		searchBoxValue = searchBoxValue.toUpperCase();
	} else {
		searchBoxValue = searchBoxValue.toLowerCase();
		searchBoxValue = searchBoxValue.charAt(0).toUpperCase() + searchBoxValue.slice(1);
	}
	
	var htmlText = '<div id="colorSearch" style="padding-bottom:10px; width:555px; margin-left:-10px;"><div style=" margin-bottom:25px; box-shadow: rgba(0,0,0,0.2) 0px 1px 4px 0px"><div> <div> <ol><div style="padding-left:20px; padding-right:20px; padding-top:20px; clear:none"><!--m--><div id="colorPanel" style="height:250px; background-color:' + searchBoxValue+ ';"></div><!--n--></div><div style="padding-bottom:20px; padding-left:20px; padding-right:20px; padding-top:10px;"><!--m--><div><h3>' + searchBoxValue +'</h3></div></div><!--n--></div></ol></div><div style="clear:both"></div></div></div><div><div style="color:rgb(119, 119, 119); display:block; float: right; font-family: arial, sans-serif; font-size:11px; font-style: italic; font-weight: normal; margin-left:22px; margin-top:-20px; line-height: normal;"><div data-async-context="async_id:duf3-1-0;authority:0;card_id:;entry_point:0;feature_id:;open:0;type:1"><div style="display:none" jsl="$t t-aTz9-_sUcEc;$x 0;"></div><div id="duf3-1-0"></div><span id="colorSearchTag">Brought to you by Color Search</span></div></div></div></div>';

	var el = document.getElementById('rso');
	el.insertAdjacentHTML('beforebegin', htmlText);
	var f = document.getElementById('colorPanel').style.backgroundColor;
	if(f==''){
		document.getElementById('colorSearch').style.display="none";
		document.getElementById('colorSearchTag').style.display="none";
	} else {
	initializeColors();
	}
}


initializeColors();
