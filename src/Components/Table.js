import React, { Component } from 'react';
import Create from './Create';
import Tablerow from "./Tablerow"
import Edit from './Edit';

class Table extends Component { 


    isShowEditForm = () => {
      if(this.props.editUserStatus === true){
        return <Edit
        editFuntion = {() => this.props.editFuntion()}
        editData = {this.props.editData}
        getEditData = {(event) => this.props.getEditData(event)}
        />
      }
    }


    render() {

      
        return (
                <div>
                  <div class="container">
                    <div class="row">
                <div className="col">
                  <table className="table table-striped table-inverse table-hover ">
                    <thead className="thead-inverse">
                      <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
      this.props.tableData.map((value,key) => (
        <Tablerow 
        id = {value.id}
        name= {value.name}
        stt = {key+1}
        phone = {value.phone}
        permission = {value.permission}
        editFuntion = {(user) => this.props.editFuntion(value)}
        deleteButtonClick = {(idUser) => this.props.deleteButtonClick(idUser)}
        />
      ))
    }
                    </tbody>
                  </table>              
                </div>
                
                {this.isShowEditForm()}

                <Create trangThaiChinhSua = {this.props.trangThaiChinhSua}
                        thayDoi = {() => this.props.thayDoi()}
                        add = {(item) => this.props.add(item)}
                />
        
                    </div>
                  </div>
                </div>
                
        );
    }
}

export default Table;