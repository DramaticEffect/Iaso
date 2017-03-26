import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import helpers from '../Services/api.js';
import {hashHistory} from 'react-router';
//import patientHack from '../patienthack.js';

export default class SubmitRecord extends React.Component {
    state = {
        code: '',
    };

    lookup = () => {
        helpers.getPatient(this.state.code)
            .then((response)=>{
                console.log(response);
                this.props.updatePatient(response);
                hashHistory.push('/records');
            });
    };

    handleChange = (event) => {
        this.setState({code: event.target.value})
    };

    render = () => {
        const flexStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80%',
        };

        return (
            <div style={flexStyle}>
                <TextField  hintText="Enter Patient Code"
                            value={this.state.code}
                            onChange={this.handleChange} />
                <RaisedButton label="Find Records" primary={true} onClick={this.lookup}/>
            </div>
        );
    }
}