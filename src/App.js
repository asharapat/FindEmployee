import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import ResponsiveContainer from "react-responsive-widget";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import changeTheme from './ChangeTheme';
import Heading from 'arui-feather/heading';
import axios from 'axios';



// const colors = [
//   'Red',
//   'Orange',
//   'Yellow',
//   'Green',
//   'Blue',
//   'Purple',
//   'Black',
//   'White',
// ];

var AppStyle={
  marginTop: -20,
};

var FindButtonStyle={
  marginTop: 30,
  marginLeft:40,
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
                    open: false,
                    employees: [{
                      name: '',
                      tabelNumber: 0,
                      position: '',
                      department: '',
                      status: '',
                      cityTelephone: '',
                      innerTelephone: '',
                      address: ''
                    }],
                    name: 'Имя'
                  };
  }

  checkName(name,arr,prop){
      for(var i = 0; i < arr.length; i++){
        if(arr[i][prop] === name){
          return i;
        }
      }
      return -1;
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false});

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleToggle()
    }
  }

  handleName(value) {
    this.setState({name:'Name'});
    console.log(this.state.name);
  }



  componentDidMount(){
    axios.get('https://jsonblob.com/api/jsonBlob/87a00a92-161f-11e8-9e49-d54bfc9d2c68')
      .then(res => {
        const employees = res.data;
        this.setState({employees:employees});
        console.log(this.state.employees);
      })
    }
  //     fetch('https://jsonblob.com/api/jsonBlob/87a00a92-161f-11e8-9e49-d54bfc9d2c68',{
  //       method: 'GET'
  //     })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       this.setState({employees:result.employees});
  //     })
  // }  

  render(){
    this.state.employees.name =  this.state.employees.map((employee) => employee.name);
    this.state.employees.position =  this.state.employees.map((employee) => employee.position);
    this.state.employees.department =  this.state.employees.map((employee) => employee.department);
    this.state.employees.status =  this.state.employees.map((employee) => employee.status);
    this.state.employees.cityTelephone =  this.state.employees.map((employee) => employee.cityTelephone);
    this.state.employees.innerTelephone =  this.state.employees.map((employee) => employee.innerTelephone);
    this.state.employees.address =  this.state.employees.map((employee) => employee.address);
    this.state.employees.tabelNumber = this.state.employees.map((employee) => employee.tabelNumber);
    return (
     <MuiThemeProvider muiTheme={getMuiTheme(changeTheme)}> 
      <div className="App">
        <ResponsiveContainer>
          <div className="app-row">
              <div className="app-col-xs-12 app-col-md-12">
                  <AutoComplete
                    hintText="Введите ФИО сотрудника"
                    dataSource={this.state.employees.name}
                    onKeyPress={this.handleKeyPress}
                    floatingLabelText="Поиск сотрудника"
                    fullWidth={true}
                    // value={this.state.name}
                    onNewRequest={(value) => {this.handleName(value)}}

                  />
              </div>
          </div>
          <Drawer 
          docked={false} 
          width={500} 
          openSecondary={true} 
          open={this.state.open} 
          onRequestChange={(open) => this.setState({open})}
          >
              <div className="employeeProps">
                <Heading size='m'>
                  Реквизиты сотрудника
                </Heading>
                <Heading size='s'>
                  ФИО:  <span>{this.checkName(this.state.name,this.state.employees,'name')}</span>                  
                </Heading>
                <Heading size='s'>
                  Табельный номер:  <span>{this.state.employees.tabelNumber[0]}</span>                  
                </Heading>
                <Heading size='s'>
                  Должность:  <span>{this.state.employees.position[2]}</span>                  
                </Heading>
                <Heading size='s'>
                  Подразделение:  <span>{this.state.employees.department[2]}</span>                  
                </Heading>
                <Heading size='s'>
                  Статус:  <span>{this.state.employees.status[2]}</span>                  
                </Heading>
                <Heading size='s'>
                  Городской телефон:  <span>{this.state.employees.cityTelephone[2]}</span>                  
                </Heading>
                <Heading size='s'>
                  Внутренний телефон:  <span>{this.state.employees.innerTelephone[2]}</span>                  
                </Heading>
                <Heading size='s'>
                  Рабочее место:  <span>{this.state.employees.address[2]}</span>                  
                </Heading>
              </div>
          </Drawer>
        </ResponsiveContainer>
      </div>
     </MuiThemeProvider> 
    );
  }
}

export default App;
