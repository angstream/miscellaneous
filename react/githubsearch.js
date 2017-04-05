function getUsersFromApiAsync(val) {
    return fetch('https://api.github.com/search/users?q=' + val)
      .then((response) => response.json())
      .then((responseJson) => {
		//console.log ("items length:" +responseJson.items.length);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }  
  
class Detail extends React.Component{
	
	render (){			
	if(this.props.product){
		return (	<div className="card">
			<h3> Detail </h3>
			<ul className="list-group">
				<li className="list-group-item"> {this.props.product.id} </li>
				<li className="list-group-item"> {this.props.product.login} </li>
				<li className="list-group-item"> {this.props.product.score} </li>
				<li className="list-group-item"> {this.props.product.url} </li>
				<li className="list-group-item"> {this.props.product.avatar_url} </li>				
			</ul>
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
	 //console.log(e.target.innerHTML + " " + id);
	 this.props.onHandleClickInput(id);
  }
    // <td onClick={this.handleClick}>{name}</td>
  render() {
    var name = this.props.product.id ;
	//console.log(name);
    return (
      <tr onClick={(e)=> this.handleClick(e, name)}>       
		<td>{name}</td>
        <td>{this.props.product.login}</td>
      </tr>
    );
  }
}

class UsersTable extends React.Component {
	constructor(props){
		super(props);
	    this.handleClickInput = this.handleClickInput.bind(this);
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
	//console.log("UsersTable");
	//console.log(this.props.users);
    if(this.props.users && this.props.users.length>0){
		this.props.users.forEach((product) => {      
	      rows.push(<UserRow 
						product={product} 
						key={product.id} 
						onHandleClickInput = {this.handleClickInput}				
					/>);  
	    });
	}
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Policy_No</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }
  
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }
  
  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
       
      </form>
    );
  }
}

class Setup extends React.Component {
   constructor (props){
		super(props);
		this.state  ={
			id:0,
			users:null,
			product:null,
			filterText:""
		}
		 this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
		this.handleClickInput = this.handleClickInput.bind(this);
   }   
   componentDidMount() {
		 if(this.state.filterText)
		   getUsersFromApiAsync(this.state.filterText).then(response =>{	
			 //console.log("response");	
			// console.log(response.items);
			 this.setState ({
				 users: response.items			
			 });
		 });			
	}
	handleFilterTextInput(filterText) {
		console.log(filterText);
		if(filterText && filterText.length>2)
		 getUsersFromApiAsync(filterText).then(response =>{				
			 this.setState ({
				 users: response.items			
			 });
		 });		
	    this.setState({
	      filterText: filterText
	    });
	
  }
   handleClickInput(id) {
		//console.log("setup Submission_ID:" + id);
		var prod = this.state.users.filter (sub => sub.id ==id)[0];
		//console.log(prod);
	    this.setState({
	        product:prod
		
	    });
  }
	render () {						
		//console.log(this.props.users); 
	    if (this.state.users && this.state.users.length >0) {   			
			  //console.log(this.state.users); 		
			  return (
			  <div className="container"> 
					<div className="row">
						<div className="col-sm-3 col-md-6">				
							
							    <SearchBar
							          filterText={this.state.filterText}
							          inStockOnly={this.state.inStockOnly}
							          onFilterTextInput={this.handleFilterTextInput}
							          onInStockInput={this.handleInStockInput}
								/>
								Results:{this.state.users.length}	
							 <UsersTable 
									users={this.state.users}
									onHandleClickInput={this.handleClickInput}
							 />		
						</div>							
						<div className="col-sm-3 col-md-6">		 
							<Detail product={this.state.product}/>
						</div>	
					</div> 					 
				</div>		
			  );
		}
    return <div className="container">   <SearchBar
							          filterText={this.state.filterText}
							          inStockOnly={this.state.inStockOnly}
							          onFilterTextInput={this.handleFilterTextInput}
							          onInStockInput={this.handleInStockInput}
								/></div>
   }
}
   //console.log(json.items);
	ReactDOM.render(<Setup />,document.getElementById('root'));
