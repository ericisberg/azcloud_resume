window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getrezcounter.azurewebsites.net/api/GetResumeCounter?code=NYHnjJ47dhBhcieVmvslyv_2aCnS7jtOamJnjXcsaa6_AzFuFwD0mA==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';
const getVisitCount = () =>{
    let count = 30;
    fetch(
        functionApiUrl
        //localFunctionApi
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