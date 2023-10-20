window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

//const functionApiUrl = 'https://getresumecounterazei.azurewebsites.net/api/GetResumeCounter?code=eogUHGktL390N0TtZSUp5Ktwh--iYqQQ3tyhbWqOyCDsAzFuwYtkPw==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';
const getVisitCount = () =>{
    let count = 30;
    fetch(
        //functionApiUrl
        localFunctionApi
        ).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}