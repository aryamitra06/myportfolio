import axios from 'axios';

const url= 'https://api.npoint.io/93244e43ca50c8fbdf2e';

export const getAllProjects = async () => {
    const res = await axios.get(`${url}`);
    return res.data;
}