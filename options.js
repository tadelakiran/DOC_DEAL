 


var toggle = true;

function fun1() {
    let x = document.getElementsByClassName('options_container')[0];
    if (toggle) {
        x.style.width = "300px";
        x.style.display = "block";
    } else {
        x.style.width = "0";
         setTimeout(() => {
            if (x.style.width === "0px") {
                x.style.display = "none";
            }
        }, 500);  
    }
    toggle = !toggle;
}
