import React,{ Component } from 'react';
import '../components/home.css';
import ReactDOM from 'react-dom';


//function type component
const Home= ({name})=>{
  
        return <div className="home_body">
        <h1>hello {name}</h1>
        <p>Welcome to react app</p>
        </div>
    
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
