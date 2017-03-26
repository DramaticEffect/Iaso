import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class SubmitRecord extends React.Component {
    state = {};

    render = () => {
        const flexStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80%',
        };

        return (
            <div style={flexStyle}>
                <TextField hintText="Enter Patient Code" />
                <RaisedButton label="Find Records" primary="true" />
            </div>
        );
    }
}