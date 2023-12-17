import axios from "axios";
import { getPath } from "@/js/database/utils.js";

const fetchData = async (endpoint) => {
    try {
        await axios.get(endpoint)
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getDatabase = async () => {
    
    const [cards, profile, highline, message, request] = await Promise.all([
        (async () => (await fetchData(getPath('cards'))).data)(),
        (async () => (await fetchData(getPath('profile'))).data)(),
        (async () => (await fetchData(getPath('highline'))).data)(),
        (async () => (await fetchData(getPath('message'))).data)(),
        (async () => (await fetchData(getPath('request'))).data)(),
    ]);

    console.log('here is the data we get', cards, profile, highline, message, request);
}