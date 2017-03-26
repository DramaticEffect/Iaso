import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

const customContentStyle = {
  width: '90%',
  maxWidth: 'none',
};

export default class SubmitRecord extends React.Component {
    state = {
        open: false,
    };
    
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render () {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <RaisedButton label="Create New Record" onClick={this.handleOpen} />
                <Dialog
                title="Vaccination Record"
                actions={actions}
                modal={false}
                open={this.state.open}
                contentStyle={customContentStyle}
                >
                    <TextField hintText='First Name' />
                    <TextField hintText='Last Name' />
                    <DatePicker hintText='Birth Date' />
                    <br/>
                    <TextField hintText='Vaccine' />
                    <TextField hintText='Type' />
                    <TextField hintText='Doctor' />
                    <DatePicker hintText='Date Recieved'/>
                </Dialog>
            </div>
        );
    };
}