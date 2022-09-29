import React from 'react'

class Additem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            productName:"",
            productPrice:"",
        };
        
    }
    render() { 
        return(
        <form className="row"  onSubmit={(e) =>{e.preventDefault();
            this.props.addItem(this.state.productName, this.state.productPrice)}}>
            <div className="mb-3 col-5">
              <label htmlFor="InputName" className="form-label">Name</label>
              <input type="text" className="form-control" id="InputName" aria-describedby="name" name="productName"
              onChange={(e) => {
                this.setState({productName: e.currentTarget.value})
              }}
              value={this.state.productName}/>
            </div>
            <div className="mb-3 col-5">
              <label htmlFor="inputPrice" className="form-label">Price</label>
              <input type="number" className="form-control" id="price" name="productPrice"
                    onChange={(e) => {
                    this.setState({productPrice: e.currentTarget.value})
              }}value={this.state.productPrice}/>
            </div>
            <button type="submit" className="btn btn-primary mt-4 mb-3 col-2">Add To myKart</button>
          </form>
        ) 
    }
}
 
export default Additem;