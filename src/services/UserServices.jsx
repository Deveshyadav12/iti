import axios from "axios";

const API_URL = 'http://localhost:8080/api/users';

class UserServices {
    getUsers() {
        return axios.get(API_URL);

    }
    createUser(user) {
        return axios.post(API_URL, user);
    }
    deleteUser(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new UserServices();