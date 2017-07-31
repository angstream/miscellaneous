var Storage ={
		getFromStorage: function (key) {		
			var storedValues= JSON.parse(localStorage.getItem(key));	
			return (storedValues)?storedValues:[];		
		},
		
		addToArray:function(arr, value){
			//console.log(value);
			let indx = arr.indexOf(value);
			if(indx <0){
				arr.push(value);
				return;
			}
			if(indx < arr.length-1){		
				arr.splice(indx,1);
				arr.push(value);	
				return;
			}
			//value is the last entry
			//don't do anything
		},
		addToLocalStorage:function(str, ARR_KEY){	
			var storedArr = Storage.getFromStorage(ARR_KEY);						
			Storage.addToArray(storedArr, str);		
			localStorage.setItem(ARR_KEY, JSON.stringify(storedArr));										
		}
	}
