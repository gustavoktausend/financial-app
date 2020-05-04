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
    const { token } = await res.json();
    return token;
};

export const signup = async (data) => {
    const res = await fetch(`${process.env.SAPPER_APP_API_URL}/v1/signup`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return;
}