import React, { Component } from 'react';
import Edit from './Edit';

class Tablerow extends Component {

    permissionShow = () => {
        if(this.props.permission === 1) {return "Moderator"}
        else if (this.props.permission === 2){return "Admin"}
        else {return "Normal"}
  
      }

    render() {
        return (
                                      <tr>
                        <td >{this.props.stt}</td>
                        <td>{this.props.name} </td>
                        <td>{this.props.phone}</td>
                        <td>{this.permissionShow()}</td>
                        <td>
                          <div className="btn btn-group btn-sm">
                            <button className="btn btn-warning btn-sm Edit" onClick ={() => this.props.editFuntion()}>Edit</button>
                            <button className="btn btn-danger btn-sm Xoa" onClick = {(idUser) => this.props.deleteButtonClick(this.props.id)}>Xoa</button>
                          </div>
                        </td>
                      </tr>

                      
            
        );
    }
}

export default Tablerow;