import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import ResponsiveContainer from "react-responsive-widget";


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

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResponsiveContainer>
          <div className="app-row">
            <div className="app-col-xs-12 app-col-md-3">
                <AutoComplete
                  floatingLabelText="Choose color for belt"
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={colors}
                />
            </div>
            <div className="app-col-xs-12 app-col-md-7">
                <AutoComplete
                  floatingLabelText="Choose color for belt"
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={colors}
                />
            </div>
            <div className="app-col-xs-12 app-col-md-2">
                <AutoComplete
                  floatingLabelText="Choose color for belt"
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={colors}
                />
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default App;
