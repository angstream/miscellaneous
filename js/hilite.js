var hiliter ={		
		rowHighlightStyle :"background-color:yellow",				
		columnHighlightStyle:"background-color:A9D0F5",
		
		cellClick: function(e){
			//is click on the header row?
			if(e.target.parentNode.rowIndex==0)
				this.lightColumn(e);			
			else
				this.lightRow(e);
		},
		
		checkHeaderRow: function (cell){
			var style =this.columnHighlightStyle;
			var clicked = true;		
			
			if(cell.clicked){
				style = "";			
				clicked = false;
			}
			
			return  [style, clicked];
		},
		
		lightColumn : function(e){		
			
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
		
		lightRow:function(e){
			var row = e.target.parentNode;
			var style = this.rowHighlightStyle;
			var clicked = true;
			
			if(row.clicked){
				style = "";			
				clicked = false;
			}						
			row.style = style
			row.clicked = clicked;			
		}		
	};
