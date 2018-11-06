var database = [
    {
        username: "Alex",
        password: "Pa$$word1"
    }
];

var newsFeed = [
    {
        username: "Danny",
        timeline: "Just hit a new PR in my Squat!"
    },
    {
        username:"Gladys",
        timeline: "OMG! Penelops looks so cute in her new Christmas sweater!"
    },
    {
        username: "Gus",
        timeline: "When you trying to diet but your coworkers always bring croquetas and doughnuts to the office."
    }
]

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

var signIn = function(user,pass){
    if(user === database[0].username && pass === database[0].password){
        console.log(newsFeed);
    }else{
        alert("Sorru, wrong username and password combination!");
    }
}

signIn(userNamePrompt, passwordPrompt);

var login = signIn(userNamePrompt, passwordPrompt);