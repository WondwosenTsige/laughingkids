/*var userName = prompt('Please Enter your Name');

alert('Welcome ' + userName + 'Click ok to continue');*/

function getUserName (){
    var userName = prompt('Please Enter your Name');
    return userName;
}

function greetUser (userName){
    alert('Welcome ' + userName + 'Click ok to continue');
}

var userName=getUserName();
greetUser(userName);