import React, { Component } from 'react';
import { } from 'antd';
import Axios from 'axios';

class index extends Component {


    constructor(props){
        super(props);
        this.state={
            stuinfo:[]
        }
    }
   change=()=>{
       Axios.get('http://127.0.0.1:3005/animal/listall').then((data)=>{
           this.setState({
               stuinfo:data.data
           });
          // console.log(stuinfo);
       });
   }
    render() {
        return (
            <div><table >
                <tbody>
                    <tr>
                    <td>stunum</td>
                    <td>classnum</td>
                    <td>grade</td>
                    </tr>
                </tbody>
                  {this.state.stuinfo.map((user,i)=>{
                        return(
                            <tbody key={'cdfcdcdcd'+i} >
                            <tr key={user.stunum}>
                                <td>{user.stunum}</td>
                                <td>{user.classnum}</td>
                                <td>{user.grade}</td>
                            </tr>

                            </tbody>
                        );
                  })}
                </table>
                <button onClick={this.change} >点击</button>
                </div>
        )
    }
}

export default index;