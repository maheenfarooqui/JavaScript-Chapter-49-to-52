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
var rollNum = document.getElementById("num");
var index = 0;
var editInput = "";

function addStuden(){
  if(editInput === ""){
        index++;
tBody.innerHTML +=`<tr>
 <td>${index}</td>
        <td>${sName.value}</td>
        <td>${sClass.value}</td>
        <td>${sAge.value}</td>
        <td>${rollNum.value}</td>
        <td>
          <button class="edit-btn" onclick="editRow(this)">Edit</button>
          <button class="del-btn" onclick="deleteRow(this)">Delete</button>
        </td>
      </tr>
     `
  }
      else{
        editInput.children[0].innerText =sName.value;
        editInput.children[1].innerText =sClass.value;
        editInput.children[2].innerText =sAge.value;
        editInput.children[3].innerText =rollNum.value;
      }
      editInput = "";
      sName.value="";
      sClass.value="";
      sAge.value="";
      rollNum.value="";
  }





function editRow(e){
  var myTr =e.parentElement.parentElement;
  var uN = myTr.children[0].innerText;
  var uC = myTr.children[1].innerText;
  var uA = myTr.children[2].innerText;
  var uR = myTr.children[3].innerText;
  sName.value = uN;
  sClass.value =uC;
  sAge.value=uA;
  rollNum.value=uR;

  editInput = myTr;
  
    
}