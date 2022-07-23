import axios from "axios";

export const BASE_URL = "http://localhost:5000/api/"

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzI2NjhkNmExY2VkNDk1ZjdmN2IzMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzM1NjUxNSwiZXhwIjoxNjU3NjE1NzE1fQ.H0vkfwn4Isx7ESyihO5chGAlwRVB-Nq7cvQddmIGVrw";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token: `Bearer ${TOKEN}`},
});

 