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
    if(!res.ok) {
        throw new Error(error);
    }
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
    const res = await fetch(`${process.env.SAPPER_APP_API_URL}/v1/user/${id}/wallet`, {
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

export const journeys = async (token) => {
    // if (process.browser){
        console.log(token);
        try {
            const a = await axios.get('/v1/journey');
            // console.log(a);
            return a;
        } catch (error) {
            console.log(error);

            throw new Error(error)
        }
    // }
    // const res = await fetch(`${process.env.SAPPER_APP_API_URL}/v1/journey`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //     }
    // });
    // const json = await res.json();
    // if(!res.ok) {
    //     throw new Error(json.error);
    // }
    // return json;
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