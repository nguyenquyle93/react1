import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state ={
      tempValue: ""
    }
  }
  
  isChange = (event) => {
    console.log(event.target.value);
    this.setState({
      tempValue:event.target.value
    })
    this.props.checkConnect(this.state.tempValue);
  }

    render() {
        return (
          
          
            <div>
                <div className="searchform">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <div className="btn-group">
                          <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập tên cần tìm" style={{width: '500px'}} onChange = {(event) => this.isChange(event)}/>
                          <button onClick={(dl) => this.props.checkConnect(this.state.tempValue)} className="btn btn-primary" style={{width: '100px'}}>
                            Tìm <span className="badge badge-primary" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr />
                    </div>
                  </div>
                  </div>
                  </div>
            </div>
        );
    }
}

export default Search;