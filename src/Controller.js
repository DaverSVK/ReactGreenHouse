import axios from "axios";

const URL = "https://fathomless-dusk-03713.herokuapp.com/servitka"

class Controller{
  
  getZaznamy = () =>{
    return axios.get(URL);
  }

  getZaznamById = (id) => {
    return axios.get(URL+id);
  }

  createZaznam = (jsonObject) => {
    axios.post(URL, jsonObject);
  }
}

export default new Controller();
