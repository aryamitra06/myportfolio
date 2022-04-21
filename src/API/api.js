import axios from 'axios';

const url= 'https://aryamitra06.github.io/portfoliojsonapi/data.json';

export const getAllProjects = async () => {
    const res = await axios.get(`${url}`);
    return res.data;
}