let url = "https://randomuser.me/api/";

let image = document.querySelector("#img")
let title = document.getElementById("title");
let fullname = document.getElementById("fullname")
let number = document.getElementById("phone")
let email = document.getElementById("email");
let street = document.getElementById("street")


let userProfile = () =>{
    fetch(url).then(response=>{
        return response.json()
    }).then(data =>{
        
        image.src = data.results[0].picture.large
        title.innerHTML = `Title: ${data.results[0].name.title}`
        fullname.innerHTML = `Fullname: ${data.results[0].name.first + " " + data.results[0].name.last}`
        number.innerHTML = `Phone Number: ${data.results[0].phone}`
        email.innerHTML = `Email: ${data.results[0].email}`
        street.innerHTML = `Street Address: ${data.results[0].location.street}`



        // console.log(image);
        // console.log(data);
        
        // console.log(data.results[0]);
        // console.log(data.results[0].phone);
        // console.log(data.results[0].email);
        // console.log(data.results[0].name);
        // console.log(data.results[0].name.title);
        // console.log(data.results[0].name.first);
        // console.log(data.results[0].name.last);
        // console.log(data.results[0].picture.meduim);
        // console.log(data.results[0].location.street); 
        // console.log(data.results[0].picture);   
        // console.log(data.results[0].picture.thumbnail);
        // console.log(data.results[0].picture.large);
    })
}

userProfile()
















