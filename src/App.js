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




const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

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
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false});

  render() {
    return (
     <MuiThemeProvider muiTheme={getMuiTheme(changeTheme)}> 
      <div className="App">
        <ResponsiveContainer>
          <div className="app-row">
              <div className="app-col-xs-12 app-col-md-2">
                  <p className="findLabel"><b>Поиск сотрудника: </b></p>
              </div>
              <div className="app-col-xs-12 app-col-md-7">
                <div className="searchBlock">
                  <AutoComplete
                    style={AppStyle}

                    floatingLabelText="Выберите сотрудника"
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={colors}
                  />
                 </div> 
              </div>
              <div className="app-col-xs-12 app-col-md-3">
                  <RaisedButton
                    style={FindButtonStyle}
                    label="искать"
                    onClick={this.handleToggle}
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
              <Heading size='m'>
                Реквизиты сотрудника
              </Heading>
              <table >
                <tr>
                  <th>ФИО</th>
                  <td>вьадлваьдлв</td>
                </tr>
                <tr>
                  <th>ФИО</th>
                  <td>вьадлваьдлв</td>
                </tr>
                <tr>
                  <th>ФИО</th>
                  <td>вьадлваьдлв</td>
                </tr>
                <tr>
                  <th>ФИО</th>
                  <td>вьадлваьдлв</td>
                </tr>
                <tr>
                  <th>ФИО</th>
                  <td>вьадлваьдлв</td>
                </tr>
                <tr>
                  <th>ФИО</th>
                  <td>вьадлваьдлв</td>
                </tr>
                <tr>
                  <th>ФИО</th>
                  <td>вьадлваьдлв</td>
                </tr>
                <tr>
                  <th>ФИО</th>
                  <td>вьадлваьдлв</td>
                </tr>
              </table>
          </Drawer>
        </ResponsiveContainer>
      </div>
     </MuiThemeProvider> 
    );
  }
}

export default App;
