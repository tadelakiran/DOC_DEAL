let reg_user, reg_pass;
let logins = document.getElementsByClassName("jparent")[0];
let signup = document.getElementsByClassName("jpars")[0];

function toggleForms() {
    if (logins.style.display === "none" || logins.style.display === "") {
        logins.style.display = "flex";
        signup.style.display = "none";
    } else {
        logins.style.display = "none";
        signup.style.display = "flex";
    }
}

var users = []

function checkData(action) {
    if (action === 'register') {
        const reg_x = document.getElementById("name").value;
        const reg_y = document.getElementById("pass").value;
        const reg_conf_y = document.getElementById("conf_pass").value;
        const moblieno = document.getElementById("mobileno").value;
        const email = document.getElementById("mailid").value;

        if (!reg_x || !reg_y || !reg_conf_y || !moblieno || !email) {
            alert('Please fill in all fields.');
            return;
        }

        else if (reg_y !== reg_conf_y) {
            alert('Passwords do not match.');
            return;
        }else{
            let newuser = {
                name:reg_x,
                pass:reg_y,
                moblieno:moblieno,
                email:email
            }

            var database = JSON.parse(localStorage.getItem('users'))
            if(database){
                {database.map((ele)=>{
                    users.push(ele)
                })}
            }

            users.push(newuser)

            localStorage.setItem('users',JSON.stringify(users))
        }

        alert("Registration Success");
        window.location.reload()

    } else if (action === 'login') {
        const x = document.getElementById("username");
        const y = document.getElementById("password");
        const login_user = x.value;
        const login_pass = y.value;

        if (!login_user || !login_pass) {
            alert('Please fill in both username and password.');
            return;
        }

        var logincheck = JSON.parse(localStorage.getItem('users'))
        var c = 0
        for(let i=0; i<logincheck.length;i++){
            if(logincheck[i].name===login_user && logincheck[i].pass===login_pass){
                alert(`welcome ${login_user}`)
                localStorage.setItem('loginuser',JSON.stringify(logincheck[i]))
                window.location.href="home.html"
                c+=1
                break
            }
        }
        if(c===0){
            alert('Login Failed')
            window.location.reload()
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    logins.style.display = "none";
    signup.style.display = "flex";
});



