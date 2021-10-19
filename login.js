// var a=document.getElementById("username").value;
// var password=document.getElementById("password").value;
function Show(id)
{
  if (document.getElementById(id).style.display == 'none') {
       document.getElementById(id).style.display = 'block';
  }
  else {
       document.getElementById(id).style.display = 'none';
  }
};
function validate()
{
var userRef = "Khushi";
var passRef = "Codelover@12";
var a=document.getElementById("username").value;
var password=document.getElementById("password").value;
    if(a==userRef||password==passRef){
        alert("login successful");
        return false;
    }
    else{
        alert("login failed");
        //return true;
    }
}