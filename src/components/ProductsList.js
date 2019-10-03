import React, { Component } from 'react'
//import 'tachons';
//import { Table } from 'react-bootstrap';
class ProductsList extends React{
    constructor(props){
        super(props);
        this.state= {
            error: null,
            products:[]
        }
    }
componentDidMount(){
    const apiURL = 'http://localhost/market/api/get_products';
    fetch(apiURL)
    .then(res=>res.json())
    .then((result)=>{this.setState({products:result});},
    (error)=>{this.setState({error});}
    )
}
render() {
    const { error, products} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>
          <h2>Product List</h2>
      <p>
      {products.map(product => (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.product_name}</td>
         
          <td>{product.price}</td>
        </tr>
      ))}
      </p>
        </div>
      )
    }
  }
}




export default ProductsList;