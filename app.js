var fName = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.getElementById("form");
var box = document.getElementById("box");

function submitForm(){
form.style.display = "none";
box.innerHTML = `<div id="container"><h1>User Details</h1>
        <p><b>Name:</b><span class="green"> ${fName.value}</span></p>
        <p><b>Email:</b><span class="green"> ${email.value}</span></p>
        <p><b>Password:</b><span class="green"> ${password.value}</span></p>
        <a href="#" onclick="backToForm()">back to form</a></div>`
}
function backToForm(){
form.style.display = "block";
box.innerHTML = "";
}

function toggleText(){
    var moreText = document.getElementById("moreText1");
    var toggle = document.getElementById("toggle");
    if(toggle.innerText === "See Less"){
         toggle.innerText = "Read More"
         moreText.style.display="none";
    }
   else{
     moreText.style.display="block";
    toggle.innerText = "See Less"
   }
    
}
function deleteRow(e){
    e.parentElement.parentElement.style.display ="none"

}
var sName = document.getElementById("sname");
var sAge = document.getElementById("age");
var sClass = document.getElementById("userClass");
var tBody = document.getElementById("tBody");
var userD = document.getElementById("user");
function addStuden(){
tBody.innerHTML +=`<tr>
        <td>${sName.value}</td>
        <td>${sClass.value}</td>
        <td>${sAge.value}</td>
        <td>
          <button class="edit-btn" onclick="editRow()">Edit</button>
          <button class="del-btn" onclick="deleteRow(this)">Delete</button>
        </td>
      </tr>
     `
      ;



}
function editRow(){
   
  
    
}