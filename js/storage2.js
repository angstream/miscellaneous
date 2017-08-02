var storage = function(){
			
			var addToArray = function(arr, value){
			
				let indx = arr.indexOf(value);

				//value is the first entry
				//don't do anything
				if(indx == 0)		
					return;
					
				if(indx < arr.length && indx > -1){		
					arr.splice(indx,1);
				}
				//insert at position 0
				arr.unshift(value);					
			}		
			
		return {
			getFromStorage (key) {		
				var storedValues= JSON.parse(localStorage.getItem(key));	
				return (storedValues)?storedValues:[];		
			},
			
			addToLocalStorage(str, key, limit){	
      
				var storedArr = this.getFromStorage(key);							
				
				addToArray(storedArr, str);		
				
				if(limit){
					//console.log("limit = "+ limit);
					storedArr.splice(limit);
				}
				
				localStorage.setItem(key, JSON.stringify(storedArr));										
			}
		}
	}();
