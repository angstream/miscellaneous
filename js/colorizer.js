function Colorizer(def){	
	
		this.def = def || {};			
		this.defaults ={
			rowbg:  this.def.rowbg || "yellow",
			colbg:  this.def.colbg || "#A9D0F5"
		}
		this.lightRow = function (e){					
			
			var style = "background-color: " + this.defaults.rowbg ;	
			var row = e.target.parentNode;						
			
			if(row.nodeName != "TR")
				return;			
			
			var clicked = true;
			
			if(row.clicked){
				style = "";			
				clicked = false;
			}						
			row.style = style;
			row.clicked = clicked;			
		},
		
		this.checkHeaderRow= function (cell){
			var style = "background-color: " + this.defaults.colbg ;				
			var clicked = true;		
			
			if(cell.clicked){
				style = "";			
				clicked = false;
			}			
			return  [style, clicked];
		},		
		this.lightColumn = function(e){		
			
			var cellIndex = e.target.cellIndex;
			var table = e.target.parentNode.parentNode;		
				
			var rowCount = table.rows.length;

			for(var i=0; i<	rowCount; i++){						
				var cell = table.rows[i].cells[cellIndex];						
				//check only the header
				if(i==0){
					//destructure the returned value
					var [style, clicked] = this.checkHeaderRow(cell);					
				}
				cell.style = style;
				cell.clicked = clicked;
			}
		},		
		this.cellClick = function(e){
			//is click on the header row?
			if(e.target.parentNode.rowIndex==0)
				this.lightColumn(e);			
			else
				this.lightRow(e);
		}
	}
	
