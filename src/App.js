import React, { Component } from 'react';
import './App.css';
import ResponsiveContainer from "react-responsive-widget";
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import changeTheme from './ChangeTheme';
import Heading from 'arui-feather/heading';
import axios from 'axios';
import InputAutocomplete from 'arui-feather/input-autocomplete';



// var employeesName = [];
var employeesNameAuto = [];
// var mname = '';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
                    open: false,
                    employee:{
                      fio: '',
                      userNumber: 0,
                      position: '',
                      department: '',
                      status: '',
                      cityTel: '',
                      innerTel: '',
                      address: ''
                    },
                    name: 'Имя',
                    value: '',
                    valueCapitalCase: ''
                  };
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
  
  getFilteredOptions(list, typedValue) {
    if (!typedValue) {
        return list;
    }
    return list.filter(({ value }) => value !== typedValue && value.indexOf(typedValue) !== -1 );
  }

  // capitalizeFirstLetter(string) {
  //   var indx = 0;
  //   if(string.indexOf(' ') !== null){
  //     indx = string.indexOf(' ');
  //   }
  //   return string.charAt(0).toUpperCase()+string.slice(1);
  // }

  // capitalizeEachWord(str) {
  //   return str.replace(/\w\S*/g, function(txt) {
  //       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  //   });
  // }

  // toTitlesCase(str)
  // {
  //   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  // }


  titleCase(str){
    str = str.toLowerCase().split(' ');
    for(var i = 0; i<str.length; i++){
      // str[i][0] = str[i][0].toUpperCase()
      // str[i] = str[i].join('')
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      console.log(str[i]);
    }
    return str.join(' ');
  }

  handleItemSelect(item) {
    this.setState({value: item })
  }

  handleChange(value) {
    this.setState({value});
    this.setState({valueCapitalCase: this.titleCase(value)})

    // var str = this.capitalizeFirstLetter(this.state.valueCapitalCase)
    // this.setState({valueCapitalCase: str})
    if(this.state.value.length >= 1){
      axios.get(''+this.state.value)
        .then(res => {
          if(res.data.length === 1){
            this.setState({employee.name})
          }
          for(var i = 0; i<res.data.length; i++){
            if(this.state.value === ''){
              employeesNameAuto = [];
            }
            if(i === 0){
              if(employeesNameAuto.length > 0){
                employeesNameAuto = [];
              }
            }
            var midName = '';
            if(res.data[i] !== undefined){
              if(res.data[i].EMPLOYEE_MNAME !== null){
                midName = res.data[i].EMPLOYEE_MNAME;
              }
              employeesNameAuto[i] = {
                  value: res.data[i].EMPLOYEE_LNAME+" "+res.data[i].EMPLOYEE_FNAME+" "+midName
              }
            }
          }
          // console.log(res.data);
      })
    }
  }

  render(){
    return (
     <MuiThemeProvider muiTheme={getMuiTheme(changeTheme)}> 
      <div className="App">
        <ResponsiveContainer>
          <div className="app-row">
              <div className="app-col-xs-12 app-col-md-12">
                  <InputAutocomplete
                    key={1}
                    size='l'
                    value={ this.state.value } 
                    width='available'
                    onChange={e => this.handleChange(e) }
                    onItemSelect={(e => this.handleItemSelect(e)), this.handleToggle }
                    // onKeyDown={this.handleKeyPress}
                    placeholder='Поиск сотрудника'
                    options={ this.getFilteredOptions(employeesNameAuto, this.state.valueCapitalCase) }
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
                  ФИО:  <span>{this.state.employees.length}</span>                  
                </Heading>
                <Heading size='s'>
                  Табельный номер:  <span></span>                  
                </Heading>
                <Heading size='s'>
                  Должность:  <span></span>                  
                </Heading>
                <Heading size='s'>
                  Подразделение:  <span></span>                  
                </Heading>
                <Heading size='s'>
                  Статус:  <span></span>                  
                </Heading>
                <Heading size='s'>
                  Городской телефон:  <span></span>                  
                </Heading>
                <Heading size='s'>
                  Внутренний телефон:  <span></span>                  
                </Heading>
                <Heading size='s'>
                  Рабочее место:  <span></span>                  
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