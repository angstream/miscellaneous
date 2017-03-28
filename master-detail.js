

class DetailItem extends React.Component{
	render(){
		if(this.props.itemKey){		
			return <tr>
					 <th>{this.props.itemKey} </th>
					 <td>{this.props.item} </td>
				 </tr>	 
		}			
		return <tr><td></td></tr>;
	}
}
class Detail extends React.Component{
	
	render (){			
	    var listItems = [];
		if(this.props.product){
			var prod =this.props.product;
			var keys = Object.keys(prod);	
			
			Object.keys(prod).forEach(function (key) {
				let obj = prod[key];		
				//console.log(obj);	
				listItems.push (<DetailItem itemKey= {key} key={key} item={obj}/>);
			});
		
			return (	<div className="card">
				<h3> Detail </h3>				
				   <table className="table">
						<thead>
				          <tr>
				            <th width="50%">Column</th>
				            <th width="50%">Value</th>
				          </tr>
				        </thead>
						<tbody>{listItems}</tbody>
				    </table>
				</div>
			);
		}
		return (<div>Empty </div>);
	}
}

class UserRow extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);   
	}
    
   handleClick(e, id) {
     this.setState({id: id});	
	 this.props.onHandleClickInput(id);
  }

  render() {
	var prod = this.props.product;
    var keys = Object.keys(prod);	
    var name = prod[keys[0]] ;	
    return (
      <tr onClick={(e)=> this.handleClick(e, name)}>       
		<td>{name}</td>
        <td>{prod[keys[1]]}</td>
		<td>{prod[keys[2]]}</td>
      </tr>
    );
  }
}

class UsersTable extends React.Component {
	constructor(props){
		super(props);
	    this.handleClickInput = this.handleClickInput.bind(this);
	}
    handleFilterTextInputChange(e) {
		this.props.onFilterTextInput(e.target.value);
    }
	
	handleClickInput(id) {	
		this.props.onHandleClickInput(id);
	    this.setState({
	      id: id
	    })
    }
	
  render() {
    var rows = [];
    var lastCategory = null;

	var keys = [];
	
	this.props.users.forEach((product) => {      
      keys = Object.keys(product);	  
	  rows.push(<UserRow 
					product={product} 					
					key= {product[keys[0]]}
					onHandleClickInput = {this.handleClickInput}				
				/>);  
    });
	
    return (
      <table className="table">
        <thead>
          <tr>
            <th>{keys[0]}</th>
            <th>{keys[1]} </th>
			 <th>{keys[2]}</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class Setup extends React.Component {
   constructor (props){
		super(props);
		this.state  ={
			id:0,
			product: this.props.users[0]
		}
		this.handleClickInput = this.handleClickInput.bind(this);
   }   
   handleClickInput(id) {	
		var keys = Object.keys(this.props.users[0]) ;			
		var prod = this.props.users.filter (sub => sub[keys[0]] ==id)[0];		
	    this.setState({
	        product:prod		
	    });
  }
	render () {						
	
	    if (this.props.users && this.props.users.length >0) {   			
			 
			  var keys = Object.keys(this.props.users);
			  return (
					<div class="container">	
					    <div className="row">
							<div className="col-sm-3 col-md-4">		
								<h3> Master - Length:{this.props.users.length}	</h3>
								<UsersTable 
									users={this.props.users}
									onHandleClickInput={this.handleClickInput}
								/>					
						    </div>							
							<div className="col-sm-3 col-md-8">														
								
								<Detail product={this.state.product}/>
							</div>     
						</div> 					 
					</div>
			  );
		}
    return <div>Select from the list</div>
   }
}
ReactDOM.render(<Setup users={data} />,document.getElementById('app'));

