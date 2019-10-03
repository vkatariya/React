import React, {Component} from 'react';
import '../css/form.css';
class Form extends Component{
render(){
    return(
        <div className="ContactFormStyle">
        <form>
        <label>Fullname</label><br/>
        <input type="text" /><br/>
        <label>Email</label><br/>
        <input type="email" /><br/>
        
        <label>Mobile</label><br/>
        <input type="number" /><br/>
        
        <label>Message</label><br/>
        <textarea></textarea><br/>

        <label></label><br/>
        <input type="Submit" value="Send" /><br/>
        
        </form>
        </div>
    );
}
}
export default Form;