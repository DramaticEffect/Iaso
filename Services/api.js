import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/patients/',
  timeout: 1000,
});

const log = (data) => console.log(data);

export default {
  getPatients: () => {
    return axios.get().then(log);
  },
  getPatient: (id) => {
    return axios.get(id).then(log);

  },
  getRecords: (patientId) => {
    return axios.get(`${patientId}/records/`).then(log);
  },

  addPatient: (data) => {
    return axios.post().then(log);

  },
  setRecords: (patientId) => {
    return axios.patch(`${patientId}/records/`).then(log);
  }

};