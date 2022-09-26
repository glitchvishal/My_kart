import React from 'react'

class Additem extends React.Component {
    render() { 
        return <form className="row">
        <div className="mb-3 col-5">
          <label htmlFor="InputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="InputName" aria-describedby="name"/>
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="inputPrice" className="form-label">Price</label>
          <input type="number" className="form-control" id="price"/>
        </div>
        <button type="submit" className="btn btn-primary mt-4 mb-3 col-2">Add To myKart</button>
      </form>;
    }
}
 
export default Additem;