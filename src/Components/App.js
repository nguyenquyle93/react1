import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import DataUser from "./dulieu/Dulieu.json";
import { v1 as uuidv1 } from 'uuid';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThaiChinhSua : true,
      dataUser : [],
      dataSearch : '',
      editUserStatus : false,
      editData: {},
    }
  };
  

componentWillMount() {
  // kiểm tra xem có local có hay chưa
  if (localStorage.getItem('User') === null) { 
    localStorage.setItem('User',JSON.stringify(DataUser));  
  }
  else {
    var temp = JSON.parse(localStorage.getItem('User'));
    this.setState({
      dataUser : temp
    })
  }
}

  getEditData = (event) => {

    this.state.dataUser.forEach((value,key) =>{
      if (value.id === event.id) {
        value.name = event.name
        value.phone = event.phone
        value.permission = event.permission       
    }}
    )
    localStorage.setItem('User',JSON.stringify(this.state.dataUser))
  }

  editFuntion = (user) => {
    var item = user
    this.setState({
      editUserStatus : !this.state.editUserStatus,
      editData : item
    }
    );
  }

  deleteButtonClick = (idUser) =>{
    var temp =  this.state.dataUser.filter(dataUser => dataUser.id != idUser )
       this.setState({
         dataUser : temp
       })
       localStorage.setItem('User',JSON.stringify(temp))
  }

    thayDoi = () => {
      this.setState({
        trangThaiChinhSua : !this.state.trangThaiChinhSua
      });
    }

    getTextSearch = (dl) => {
      this.setState({
        dataSearch : dl
      })
    }

    getNewUserData = (item) => {
      var data = {};
      data = item;
      data.id = uuidv1();
      var items = this.state.dataUser;
      items.push(data);
      this.setState({
        dataUser : items
      });
      localStorage.setItem('User',JSON.stringify(items))
    }
  render()

   {
    var ketqua = []
    this.state.dataUser.forEach((item) => {
      if(item.name.indexOf(this.state.dataSearch) !== -1){
        ketqua.push(item);
      }
    }
    )   
    return (
      
      <div>
      <Header/>
     <Search
     checkConnect ={(dl) => this.getTextSearch(dl)}
     />
    <Table trangThaiChinhSua = {this.state.trangThaiChinhSua}
           thayDoi = {() => this.thayDoi()}
           tableData = {ketqua}
           add = {(item) => this.getNewUserData(item)}
           editFuntion = {(user) => this.editFuntion(user)}
           editUserStatus = {this.state.editUserStatus}
          changeEditUserStatus = {() => this.changeEditUserStatus()}
          editData = {this.state.editData}
          getEditData = {(event) => this.getEditData(event)}
          deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
    />
      </div>
    );
  }
}

export default App;