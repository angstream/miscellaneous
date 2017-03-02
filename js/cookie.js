
function setCookie (cname, cvalue, exdays, maxLimit) {
	maxLimit = maxLimit || 20;
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	 
	var parts = getCookie(cname);
	if (!parts || parts == 'undefined') {
	    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	    return;
	}
	//console.log("parts1:" + parts);	
	parts = parts.split(",");	
	//console.log("parts2:" + parts);	
	if (parts.length > 0) {	    
	    for (var i=0; i<parts.length; i++) {
	        if (cvalue == parts[i]) {
	            parts.splice(i, 1);
	        }
	    }
	   parts.push(cvalue);	 
	}	
	//first one out
	if (parts.length> maxLimit){
		parts.splice(0,1);
	}
	
    document.cookie = cname + "=" + parts.join(",") + ";" + expires + ";path=/";
}
