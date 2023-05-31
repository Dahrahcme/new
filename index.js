let url = "https://randomuser.me/api/"

let title = document.querySelector("title")
let email = document.querySelector("email")

let userProfile = () =>{
    fetch(url).then(response=>{
        return response.json()
    }).then(data =>{
        console.log(data);
        // console.log(data.results);
        console.log(data.results[0]);
        console.log(data.results[0].phone);
        console.log(data.results[0].email);
        console.log(data.results[0].name);
        console.log(data.results[0].name.title);
        console.log(data.results[0].name.first);
        console.log(data.results[0].name.last);
        console.log(data.results[0].picture.meduim);
        console.log(data.results[0].location.street);    
        
        email.textContent = email.`${data.results[0].email}`
    })
}



userProfile()
















