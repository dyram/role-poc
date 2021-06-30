import axios from 'axios';
import { BACKEND } from './datasource';
import { getUserPermissions } from './Roles';

export class UserModel {

    name; 
    role;
    permissions;

    static getUser() {
        const user = localStorage.getItem('user');
        return Object.assign(new UserModel(), JSON.parse(user));
    }

    static authenticate = async (username, password) => {
        const response = await axios.post(BACKEND.baseURL + "/login", {
            username, password
        });
        if(response.status === 200) {
            const user = new UserModel()
            user.name = response.data.name; 
            user.role = response.data.role;
            user.permissions = await getUserPermissions(user.role);
            localStorage.setItem('user', JSON.stringify(user));
            return true; 
        }
        console.error({response});
        return false;
    };
}