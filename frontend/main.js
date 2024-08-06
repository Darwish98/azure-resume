window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl ='https://mogetresumecounter.azurewebsites.net/api/GetResumeCounter?code=D68BWpxf4wHeUASI2UOgho5qIYiaE4rVDBkXJ7J0WzR2AzFureDnkg%3D%3D';
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
