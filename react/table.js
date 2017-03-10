var Table = React.createClass({
    render: function() {
        var headerComponents = this.generateHeaders(),
            rowComponents = this.generateRows();

        return (
            <table>
              <thead><tr>{headerComponents}</tr></thead>
                <tbody>{rowComponents}</tbody>
            </table>
        );
    },
	
	generateHeaders: function() {
        var cols = Object.keys(this.props.data[0]);       
        // generate our header (th) cell components
        return cols.map(function(col) {
            return <th key={col}>{col}</th>;
        });
    },
	
    generateRows: function() {  
        data = this.props.data;					      	
       return data.map(function(item) {       
          var keys = Object.keys(item);		
          var cells = keys.map(function(el) {				
            return <td key={el}>{item[el]}</td>;
         });           
        return <tr key={item.id}>{cells}</tr>;
       });
    }
});
