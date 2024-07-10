window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl ='https://getresumecounterfunction.azurewebsites.net/api/GetResumeCounter?code=asOcJKlYbhRSzoL8CCl4_kmxZK_OLG3GSKXy1XIQ3JpKAzFuoowFEA%3D%3D';
const localFunctionAPI = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json();
    }).then(response => {
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
    });
    return count;
}
