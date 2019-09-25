import React from 'react';
import '../components/home.css';
//import ReactDOM from 'react-dom';


//function type component
const Home= ()=>{
  
        return (<div className="home_body">
        <h1>hello</h1>
        <p>Welcome to Home Page</p>
        </div>
        )
    
}

//this is class finction
/*class Home extends Component {
    render() {
        return <div className="home_body">
        <h1>hello {this.props.name}</h1>
        <p>Welcome to react app</p>
        </div>
    }
} */
export default Home;
