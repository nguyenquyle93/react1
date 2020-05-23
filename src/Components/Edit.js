import React, { Component } from 'react';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : this.props.editData.id,
      name : this.props.editData.name,
      phone : this.props.editData.phone,
      permission : this.props.editData.permission,
    }
  }
  

  isChange = (event) => {
    const ten = event.target.name;
    const giatri = event.target.value;
    this.setState({
      [ten] : giatri
    });
  }

  saveButton = () => {
    this.props.getEditData(this.state);
    this.props.editFuntion();

  }




    render() {
        console.log(" Dữ liệu cần chỉnh sữa là" + this.props.dataEdit);
        return (
<div className="card mt-2">     
        <div className="card-body ">
          <h4 className="card-title text-center ">Chỉnh sữa thông tin User</h4>
          <form>
          <div className="form-group">
            <input type="text" className="form-control" name="name" defaultValue={this.props.editData.name} id aria-describedby="helpId" placeholder="Nhập tên" onChange={(event) => this.isChange(event)}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="phone" defaultValue={this.props.editData.phone} id aria-describedby="helpId" placeholder="Điện thoại"  onChange={(event) => this.isChange(event)}/>
          </div>
          <div className="form-group">
            <select className="form-control" name="permission" defaultValue={this.props.editData.permission} id  onChange={(event) => this.isChange(event)}>
              <option value = {1}>Moderator</option>
              <option value = {2}>Admin</option>
              <option value = {3}>Normal</option>
            </select>
          </div>
          <div className="form-group">
          <input type="reset" class="btn btn btn-block btn-danger" onClick={() => this.saveButton()} value="Lưu thông tin"/>
          </div></form>
        </div>
        </div>
        );
    }
}

export default Edit;