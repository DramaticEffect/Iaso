import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';

export default class SubmitRecord extends React.Component {
    state = {
        code: '',
    };

    lookup = () => {
        console.log(this.state.code);
    };

    handleChange = (event) => {
        this.setState({code: event.target.value});
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
                <Link to={`/records`}>skip</Link>
            </div>
        );
    }
}