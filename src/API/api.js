import axios from 'axios';

const url= 'https://www.aryamitrachaudhuri.live/portfoliojsonapi/data.json';

export const getAllProjects = async () => {
    const res = await axios.get(`${url}`);
    return res.data;
}