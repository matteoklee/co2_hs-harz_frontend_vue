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

export async function sendStatistic(){
    try{
        const data = {
            'visitorStats': []
        };
        data.visitorStats.push({
            'statisticEntityType': 'totalDuration',
            'totalDurationEntity': 'totalDuration',
            'totalDurationEntityAmount': sessionStorage.getItem('visitorTotalTime')
        });
        let subpages = JSON.parse(sessionStorage.getItem('visitorSubpages'));
        for(let i = 0; i < subpages.length; i++){
            data.visitorStats.push({
                'statisticEntityType': 'subPageVisit',
                'subPageVisitEntityName': '/' + subpages[i].url,
                'subPageVisitEntityTotalVisits': subpages[i].visits
            });
        };
        let buttons = JSON.parse(sessionStorage.getItem('visitorButtons'));
        for(let i = 0; i < buttons.length; i++){
            if(buttons[i].clicks > 0) {
                data.visitorStats.push({
                    'statisticEntityType': 'buttonClick',
                    'buttonClickEntityName': buttons[i].button,
                    'buttonClickEntityAmount': buttons[i].clicks,
                });
            }

        }
        console.log(data);
        const result = await makeRequest('statistics','POST', data);
        return result;
    } catch (error){
        throw error;
    }
}

export default {
    calculateEmission,
    saveEmission,
    sendStatistic,
}