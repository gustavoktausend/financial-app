import { stores } from "@sapper/app";

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
    const data = await res.json();
    if(!res.ok) {
        throw new Error(data.error);
    }
    return data.token;
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
    const res = await fetch(`${process.env.SAPPER_APP_API_URL}/v1/journey`, {
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