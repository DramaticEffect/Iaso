import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};

const recordFields = {
    //keys and inital values
    firstName: '',
    lastName: '',
    birthDate: null,
    vaccine: '',
    vaccineType: '',
    doctor: '',
    dateReceived: null,
}

export default class SubmitRecord extends React.Component {
    state = {
        open: false,
        ...recordFields //es6 destructured assignment to extend state
    };
    
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleChange = (event, date) => {
        let key = event.target.getAttribute('data-key');
        let update = {}
        update[key] = event.target.value;
        this.setState(update);
    }

    handleBirthDate = (event, date) => {
        this.setState({birthDate: date});
    }

    handleDateReceived = (event, date) =>{
        this.setState({dateReceived: date});
    }

    handleSubmit = () =>{
        let {firstName, lastName, birthDate} = this.state; //TODO: pass in from props instead

        let {vaccine, vaccineType, doctor, dateReceived} = this.state;

        let records = []; //TODO: get this from app
        records.push({vaccine, vaccineType, doctor, dateReceived});
        let data = {
            firstName,
            lastName,
            birthDate,
            records,
        }
        console.log(data);

        this.handleClose();
    }

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
                onClick={this.handleSubmit}
            />,
        ];
        //TODO: fix first, last, and birthdate so it is stored based on current accessed patient
        // no need to retype every time
        return (
            <div>
                <RaisedButton label="Create New Record" onClick={this.handleOpen} />
                <Dialog
                title="Vaccination Record"
                actions={actions}
                modal={false}
                open={this.state.open}
                contentStyle={customContentStyle}>   
                    <div onChange={this.handleChange}>
                        <TextField  data-key='firstName'
                                    floatingLabelText='First Name'
                                    value={this.state.firstName} />
                        <TextField  data-key='lastName'
                                    floatingLabelText='Last Name' 
                                    value={this.state.lastName} />
                        <DatePicker data-key='birthDate'
                                    floatingLabelText='Birth Date'
                                    value={this.state.birthDate}
                                    onChange={this.handleBirthDate} />
                        <br/>
                        <TextField  data-key='vaccine'
                                    floatingLabelText='Vaccine' 
                                    value={this.state.vaccine} />
                        <TextField  data-key='vaccineType'
                                    floatingLabelText='Vaccine Type'
                                    value={this.state.vaccineType} />
                        <TextField  data-key='doctor'
                                    floatingLabelText='Doctor'
                                    value={this.state.doctor} />
                        <DatePicker data-key='dateReceived'
                                    floatingLabelText='Date Received'
                                    value={this.state.dateReceived}
                                    onChange={this.handleDateReceived} />
                    </div>
                </Dialog>
            </div>
        );
    };
}