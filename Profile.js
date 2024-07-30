const Getuser=()=>{
    var userdata = JSON.parse(localStorage.getItem('loginuser'))
    document.getElementById('username').innerText = `User Name : ${userdata.name}`
    document.getElementById('mobileno').innerText = `Phone Number : ${userdata.moblieno}`
    document.getElementById('mailid').innerText = `Email : ${userdata.email}`
};

Getuser();