var database = [
    {
        username: "Alex",
        password: "Pa$$word1"
    },
    {
        username: "David",
        password: "suspect6",
    },
    {
        username: "John",
        password: "gangsterbo1"
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

function isUserValid(user,pass){
    for(var i = 0; i < database.length; i++){
        if (database[i].username === user &&
            database[i].password === pass){
           return true;

        } 
    }
    return false;
}

function signIn(user,pass){

    if(isUserValid(user, pass)){
        console.log(newsFeed);
    }else{
        alert("Sorry, wrong username and password combination!");
    }
}


var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

signIn(userNamePrompt, passwordPrompt);

