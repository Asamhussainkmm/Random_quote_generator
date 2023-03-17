import axios from "axios"

const fetchQuotes = () => {
    return axios.get("https://type.fit/api/quotes");
}


export {fetchQuotes};