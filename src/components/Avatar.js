import React,{Component} from 'react';
import '../components/avatar.css';
import 'tachyons';
import Avatarlist from '../components/Avatarlist'

class Avatar extends Component{
   constructor(){
       super();
       this.state = { 
            name: "Welcome to Avatar world .."
       }
   }
   titlechange(){
       this.setState({
           name: "Thanks for Subscribing"
       })
   }
    render() {
   
        const avatarArray=[{
            id :1,
            name:'vinod',
            work:'PHP Developer'
        },
        {
            id :2,
            name:'Ram',
            work:'JAVA Developer'
        },
        {
            id :3,
            name:'Arun',
            work:'JS Developer'
        },
        {
            id :4,
            name:'Ankit',
            work:'React Developer'
        }
    
    ]
    
    const AllAvatarData = avatarArray.map( (avatarcard,i) =>
    {
    return   <Avatarlist key={i} id={avatarArray[i].id} 
    name={avatarArray[i].name} 
    work={avatarArray[i].work} />
    } )

        return (
            <div className="mainPage">
            <h1 className="tc">{this.state.name}</h1>
            {AllAvatarData} 
            <br/>
           <button onClick={()=>this.titlechange()} className="f6 link dim br-pill  ph3 pv2 mb2 dib dark-blue tc">Subscribe</button>
       </div>
        );
    }
}
   
export default Avatar;