import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const remove = (idToRemove) => {
    const request = axios.delete(`${baseUrl}/${idToRemove}`);
    return request.then(response => response.data);
}

const changeValue = name => {
    return axios.put(`${baseUrl}/${name.id}`, name)
        .then(response => response.data)

}


export default { getAll, create, remove, changeValue }
