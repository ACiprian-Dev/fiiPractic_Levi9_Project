import React from 'react';
import axios from 'axios';
import CustomerInput from '../components/CustomerInput';

class UploadComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            category: '',
            sizes: [],
            stock: 0
        };
    }

    checkButtonState = () => {
        const stateObj = Object.values(this.state);
        return stateObj.some((item) =>item.length===0||item===0)
    }

    handleInputChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        const name = e.target.name;
        const value = e.target.value;
        if(name ==="sizes") {
            const sizeList = value.replace(/\s+/g, '').split(",");
            this.setState({[e.target.name]: sizeList}, ()=> console.log(this.state))
        }
        if(name==="stock"|| name==="price"){
            this.setState({[e.target.name]: parseInt(value)}, () => console.log(this.state))
        }
        if(name==="name"||name==="category")
        this.setState({[e.target.name]: value}, ()=> console.log(this.state)) 
        
    }

    uploadProduct = async(product) => {
        axios.post("https://60682ee30add49001733fc44.mockapi.io/products", {...product})
    }

    renderInput = () => {
        return Object.keys(this.state).map((item) => {
          return (
            <CustomerInput
              className={`${item}Container`}
              onChangeFunc={this.handleInputChange}
              value={this.state[item]}
              name={item}
            />
          );
        });
      };

    render() {
        const buttonState = this.checkButtonState();
        return(
            <div className="uploadContainer">
                {/* <div className="nameContainer">
                    <input onChange={this.handleInputChange} value={this.state.name} name ="name"></input>
                </div>
                <div className="priceContainer"><input onChange={this.handleInputChange} value={this.state.price ? this.state.price: 0} type="number"name ="price"></input></div>
                <div className="categoryContainer"><input onChange={this.handleInputChange} value={this.state.category} name ="category"></input></div>
                <div className="sizeContainer"><input onChange={this.handleInputChange} value={this.state.size} name ="sizes"></input></div>
                <div className="stockContainer"><input onChange={this.handleInputChange} value={this.state.stock ? this.state.stock: 0} type="number" name ="stock"></input></div> */}
                {this.renderInput()}
                
                <div><button onClick={() =>{this.uploadProduct({...this.state})}} disabled={buttonState}>
                    Upload
                    </button>
                    </div>
            </div>
        );
    }
}




export default UploadComponent;