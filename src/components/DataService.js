import axios from 'axios'

const rootURL = 'http://127.0.0.1:8080/api/'

class dataService {
    getAll(date, duree) {

        return axios.get(rootURL + '' + date + '&duree=' + duree)
    }
}
export default new dataService();
