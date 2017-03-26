import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from 'material-ui/styles/colors';

import api from '../Services/api.js';
import axios from 'axios';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: colors.deepOrange500,
    primary1Color: colors.pink400,
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    api.getPatients().then((data) => console.log(JSON.stringify(data)));
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar 
            title='Iaso'
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;