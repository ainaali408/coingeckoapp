import axiosInstance from '../helpers/axiosInstance';

export async function fetchCoinHistoricData(coinId, interval, days = 7, currency = 'usd') {
    console.log(coinId, currency, days, interval); 
    console.log(interval)// Debugging logs

    try {
        const response = await axiosInstance.get(
            `coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`
        );
        console.log('API Response:', response.data); // Log API response to debug
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Error: ${error.response.status} - ${error.response.statusText}`);
            console.error('Response data:', error.response.data); // Log response data for debugging
        } else if (error.request) {
            console.error('Error: No response received from the server', error.request);
        } else {
            console.error('Error setting up request:', error.message);
        }
        return null;
    }
}




// import  axiosInstance from '../helpers/axiosInstance';
// import axios from 'axios'




// export async function fetchCoinHistoricData(coinId, interval, days = 7, currency = 'usd') {
//     console.log(coinId, currency, days, interval);

//     const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`
  
//     // `coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`;
//     console.log(`Request URL: ${url}`);

//     try {
//         const response = await axios.get(url);
//         console.log('API Response:', response.data); // Log the API response to check its structure
//         return response.data;
//     } catch (error) {
//         if (error.response) {
//             console.error(`Error: ${error.response.status} - ${error.response.statusText}`);
//             console.error('Response data:', error.response.data);
//         } else if (error.request) {
//             console.error('Error: No response received from the server', error.request);
//         } else {
//             console.error('Error setting up request:', error.message);
//         }
//         return null;
//     }
// }

