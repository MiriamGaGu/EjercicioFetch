let url = "https://randomuser.me/api";
let avatar = document.querySelector('#avatar');
let fullname = document.querySelector('#fullname');
let username = document.querySelector('#username');
let emai = document.querySelector('#email');
let city = document.querySelector('#city');
let btn = document.querySelector("#btn");

btn.addEventListener('click', () => {
clicking()    
});//hago el evento, le doy el parametro de evento, necesita la función para el evento e invoco la función llamandola dentro.

const clicking = () => {
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data.result[0].name)

        let fullnameAPI = data.result[0].name.first + ' ' + data.result[0].name.last;
        fullname.innerHTML += fullnameAPI;
        
        let emailAPI = data.result[0].login.username;
        email.innerHTML += emailAPI;

        let cityAPI = data.result[0].location.city;
        city.innerHTML += cityAPI;
    });
}