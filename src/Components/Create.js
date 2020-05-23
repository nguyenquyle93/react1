import React, { Component } from 'react';



class Create extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     trangThaiChinhSua : this.props.trangThaiChinhSua
  //   }
  // }
  constructor(props) {
    super(props);
    this.state = {
      id : "",
      name : "",
      phone : "",
      permission : "",
    }
  }
  


  isChange = (event) => {
    const ten = event.target.name;
    const giatri = event.target.value;
    this.setState({
      [ten] : giatri
    });  
  //pakage item
//   var item = {};
//   item = this.state
//   console.log(this.state);
}

  hienThiNut = () => {
    if(this.props.trangThaiChinhSua === true){
      return <div className="btn btn-block btn-info" onClick = {() => this.props.thayDoi()}>Đóng</div>;
    }
    else {
      return <div className="btn btn-block btn-info " onClick = {() => this.props.thayDoi()} >Thêm mới User</div>;
    }
  }

  hienThiForm = () => {
    if(this.props.trangThaiChinhSua === true){
      return                  <div className="card mt-2">
        
      <div className="card-body">
      
        <h4 className="card-title text-center ">Thêm mới</h4>
        <form>
        <div className="form-group">
          <input type="text" className="form-control" name="name" id aria-describedby="helpId" placeholder="Nhập tên" onChange={(event) => this.isChange(event)}/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="phone" id aria-describedby="helpId" placeholder="Điện thoại"  onChange={(event) => this.isChange(event)}/>
        </div>
        <div className="form-group">
          <select className="form-control" name="permission" id  onChange={(event) => this.isChange(event)}>
            <option value = {1}>Moderator</option>
            <option value = {2}>Admin</option>
            <option value = {3}>Normal</option>
          </select>
        </div>
        <div className="form-group">
        <input type="reset" class="btn btn btn-block btn-primary" onClick={(item) => this.props.add(this.state)} value="Thêm mới"/>
        </div></form>
      </div>
      
    </div>
    
    }
    else {
      ;
    }
  }

  thayDoiTrangThai = () => {
    this.setState({
      trangThaiChinhSua : !this.state.trangThaiChinhSua
    });
  }


    render() {  
        return (

                <div className="col-3">
                  {this.hienThiNut()}
                  {this.hienThiForm()}
                </div>



        );
    }
}

export default Create;