import axios from "axios";

axios.defaults.withCredentials = false;
let backendUrl = "http://" + window.location.hostname.toString() + ":8081/api";
axios.defaults.baseURL = backendUrl;
