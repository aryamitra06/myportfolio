import axios from 'axios';

const url= 'https://aryamitra06.github.io/projectsjson/projects.json';

export const getAllProjects = async () => {
    const res = await axios.get(`${url}`);
    return res.data;
}