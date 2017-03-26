import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/patients/',
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
});

const justData = (res) => res.data;

export default {
  getPatients: () => {
    return api.get('').then(justData);
  },
  getPatient: (id) => {
    return api.get(id).then(justData);

  },
  getRecords: (patientId) => {
    return api.get(`${patientId}/records/`).then(justData);
  },

  addPatient: (data) => {
    return api.post();

  },
  setRecords: (patientId) => {
    return api.patch(`${patientId}/records/`);
  }

};