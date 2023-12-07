const BASE_URL = '/api';

async function makeRequest(endpoint, method = 'GET', data = null) {
    const url = `${BASE_URL}/${endpoint}`;
    const headers = {
        'Content-Type': 'application/json',
    };
    const options = {
        method,
        headers,
    };
    if (data) {
        options.body = JSON.stringify(data);
    };

    try {
        const response = await fetch(url, options);
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message || 'An error occurred');
        }
        return responseData;
    } catch (error) {
        console.error('API Request Error:', error);
        throw error;
    }
}

export async function calculateEmission(start, end, transportMedium) {
    try {
        const data = {
            'startLocation': start,
            'endLocation': end,
            'transportMediumDTO': transportMedium
        }
        const result = await makeRequest(`emission`, 'POST', data);
        return result;
    } catch (error) {
        throw error;
    }
}

export async function saveEmission(start, end, transportMedium, group) {
    try {
        const data = {
            'startLocation': start,
            'endLocation': end,
            'transportMediumDTO': transportMedium,
            'groupEmissionDTO': group
        }
        const result = await makeRequest(`groupEmission`, 'POST', data);
        return result;
    } catch (error) {
        throw error;
    }
}

export default {
    calculateEmission,
    saveEmission
}