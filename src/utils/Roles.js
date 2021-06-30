import axios from "axios"
import { BACKEND } from "./datasource"

export const getRolesFromAPI = async () => {
    const response = await axios.get(BACKEND.baseURL + "/roles");
    if(response.status === 200) {
        return response.data;
    }
    return null;
}

export const getUserPermissions = async (role) => {
    const allRoles = await getRolesFromAPI();
    if(allRoles) {
        return allRoles[role];
    }
    return null;
}