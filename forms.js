const firebaseConfig = {
    apiKey: "AIzaSyCzjQ3V3NmAkHRWsCN4lR3EaSfL-fFpoJ8",
    authDomain: "projectsbkv-fabfe.firebaseapp.com",
    databaseURL: "https://projectsbkv-fabfe-default-rtdb.firebaseio.com",
    projectId: "projectsbkv-fabfe",
    storageBucket: "projectsbkv-fabfe.appspot.com",
    messagingSenderId: "523632836066",
    appId: "1:523632836066:web:6994914a7de50e5f9a8dbb"
  };


firebase.initializeApp(firebaseConfig);  

var contactFormDB = firebase.database().ref("Form");

document.getElementById("contactForm").addEventListener("submit", submitForm);


function submitForm(e){
    e.preventDefault();

  var fname = getElementVal("fname");
  var lname = getElementVal("lname");
  var country = getElementVal("country");
  var email = getElementVal("email");
  var subject = getElementVal("subject");

  saveMessages(fname, lname, country, email, subject);

  document.getElementById("contactForm").reset();

}


const saveMessages = (fname, lname, country, email, subject) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
       
        firstname : fname,
        lastname : lname,
        standard : country,
        email : email,
        subject : subject,


    })
};



const getElementVal = (id) => {
    return document.getElementById(id).value;
};













function validateemail()  
{  
var x=document.myform.email.value; 
var e=document.myform.firstname.value; 
var r=document.myform.lastname.value;
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  

if(e==null || e=="") 
{
alert("enter fname");
return false;
}

else if(e.length<2)
{
  alert("Your name must be more than 3 characters");
  return false;
}

else if(r==null || r=="")
{
alert("Enter lastname");
return false;
}

else if(x==null || x=="")
{
alert("Enter emailid");
return false;
}


else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
else {
alert("Your form has been submitted succesfully");
}
}  



