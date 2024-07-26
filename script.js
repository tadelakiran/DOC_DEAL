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

function checkData(action) {
    if (action === 'register') {
        const reg_x = document.getElementById("name");
        const reg_y = document.getElementById("pass");
        const reg_conf_y = document.getElementById("conf_pass");
        reg_user = reg_x.value;
        reg_pass = reg_y.value;
        const reg_conf_pass = reg_conf_y.value;

        if (!reg_user || !reg_pass || !reg_conf_pass) {
            alert('Please fill in all fields.');
            return;
        }

        if (reg_pass !== reg_conf_pass) {
            alert('Passwords do not match.');
            return;
        }

        alert("Registration Success");
        reg_x.value = "";
        reg_y.value = "";
        reg_conf_y.value = "";

    } else if (action === 'login') {
        const x = document.getElementById("username");
        const y = document.getElementById("password");
        const login_user = x.value;
        const login_pass = y.value;

        if (!login_user || !login_pass) {
            alert('Please fill in both username and password.');
            return;
        }

        const adminAccounts = [
            { admin: "sai", adminpass: "123" },
            { admin: "dinesh", adminpass: "3515" }
        ];

        if (login_user === reg_user) {
            if (login_pass === reg_pass) {
                alert("Login Success");
                window.location.href = "home.html";
            } else {
                alert("Incorrect Password");
            }
        } else {
            let adminLoggedIn = false;
            for (const adminAccount of adminAccounts) {
                if (login_user === adminAccount.admin && login_pass === adminAccount.adminpass) {
                    alert("Admin Logged In");
                    window.location.href = "home.html";
                    adminLoggedIn = true;
                    break;
                }
            }
            if (!adminLoggedIn) {
                alert("Login Failed");
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    logins.style.display = "none";
    signup.style.display = "flex";
});



