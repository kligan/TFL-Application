import axios from 'axios'

export default axios.create({
    baseURL: `https://api.tfl.gov.uk/`
});