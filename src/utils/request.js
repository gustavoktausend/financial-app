import { stores } from "@sapper/app";

import axios from 'axios';

axios.defaults.baseURL = process.env.SAPPER_APP_API_URL;

export const login = async (email, password) => {
    const res = await fetch(`${process.env.SAPPER_APP_API_URL}/v1/signin`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const { token, error } = await res.json();
    console.log(token);
    if(!res.ok) {
        throw new Error(error);
    }
    console.log(token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return token;
};

export const signup = async data => {
    const res = await fetch(`${process.env.SAPPER_APP_API_URL}/v1/signup`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await res.json();
    if(!res.ok) {
        throw new Error(json.error);
    }
    return json;
}

export const wallet = async (id, token) => {
    return axios.get(`/v1/user/${id}/wallet`);
}

export const journeys = async () => {
    return axios.get('/v1/journey');
}

export const journey = async (id, token) => {
    const res = await fetch(`${process.env.SAPPER_APP_API_URL}/v1/journey/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const json = await res.json();
    if(!res.ok) {
        throw new Error(json.error);
    }
    return json;
}