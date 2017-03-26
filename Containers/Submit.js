import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {List, ListItem} from 'material-ui';
import helpers from '../Services/api.js';
//import patientHack from '../patientHack';

const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};

const recordFields = {
    //keys and inital values
    vaccine: '',
    vaccineType: '',
    doctor: '',
    dateReceived: null,
}

export default class SubmitRecord extends React.Component {
    state = {
        open: false,
        ...recordFields //es6 spreading to extend state
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

    handleDateReceived = (event, date) =>{
        this.setState({dateReceived: date});
    }

    handleSubmit = () =>{
        let {firstName, lastName, birthdate} = this.props.patient;

        let {vaccine, vaccineType, doctor, dateReceived} = this.state;

        let records = this.props.records;
        records.push({vaccine, vaccineType, doctor, dateReceived});
        let data = {
            firstName,
            lastName,
            birthdate,
            records,
        }
        console.log(data);

        helpers.setRecords(data)
        .then( response => {
            this.props.updatePatient(response.data);
        });

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
        return (
            <div>
                <RaisedButton label="Create New Record" onClick={this.handleOpen} />
                <Dialog
                title="Vaccination Record"
                actions={actions}
                modal={false}
                open={this.state.open}
                contentStyle={customContentStyle}>
                    <div>{this.props.patient.firstName + ' ' + this.props.patient.lastName}</div>  
                    <div onChange={this.handleChange}>
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
};