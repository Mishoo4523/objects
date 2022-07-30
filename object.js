

let user = { 
firstName: "Ahmad",
lastName : "Murad",
email:"test@gmail.com",
age: 41,
skills: ["html", "css", "JS","python","php"],
active: true,
phoneNumber: {
    firs:"0542161616",
    seconde: "052446546546"
},
address : {
    first: "there",
    seconde:"theralso"
},

//method 

isActive: function(){
    if (user.active===true){
        return "Hello user";
    }
    else {
        return "Sory you are not active";
    }
},

getAge: function(){
    if (user.age >=18) {
        return "avialable";
    }
    else {
        return "unavailable";
    }
},

};
console.log(user.getAge());

console.log(user['getAge']());