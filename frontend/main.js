window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl ='';
const localFunctionAPI = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(localFunctionAPI).then(response => {
        return response.json();
    }).then(response => {
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
    });
    return count;
}
