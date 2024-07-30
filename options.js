


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


function mybookings() {
    window.location.href = "mybookings.html";
}

function services() {
    window.location.href = "services.html";
}


document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        gender: document.getElementById('gender').value,
        specialist: document.getElementById('specalist').value,  
        date: document.getElementById('date').value,
        appointment: document.getElementById('appointment').value,
        status: 'Booked'
    };

    let appointments = JSON.parse(localStorage.getItem('appointments')) || []; 

    appointments.push(formData);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    window.location.href = 'mybookings.html';
});




let nav = document.getElementById('s_nav');
document.addEventListener('DOMContentLoaded', () => {
    const openFormButton = document.getElementById('openForm');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.querySelector('.close-btn');

    openFormButton.addEventListener('click', () => {
        popupForm.style.display = 'flex';
        nav.style.display = 'none';

    });

    closeBtn.addEventListener('click', () => {
        popupForm.style.display = 'none';
        nav.style.display = 'block';

    });

    window.addEventListener('click', (event) => {
        if (event.target === popupForm) {
            popupForm.style.display = 'none';

        }
    });
});
// document.addEventListener('DOMContentLoaded', () => {
//      const openFormButton = document.querySelectorAll('.l_button');
//     const popupForm = document.getElementById('popupForm');
//     const closeBtn = document.querySelector('.close-btn');

//      openFormButton.addEventListener('click', () => {
//         popupForm.style.display = 'flex';
//         nav.style.display='none';

//     });

//      closeBtn.addEventListener('click', () => {
//         popupForm.style.display = 'none';
//         nav.style.display='block';

//     });

//      window.addEventListener('click', (event) => {
//         if (event.target === popupForm) {
//             popupForm.style.display = 'none';

//         }
//     });
// });


const consultButtons = document.querySelectorAll('.l_button');
const popupForm = document.getElementById('popupForm');
const closeBtn = document.querySelector('.close-btn');

function showForm() 
{
    popupForm.style.display = 'block';
}

function hideForm() 
{
    popupForm.style.display = 'none';
}

consultButtons.forEach(button => {
    button.addEventListener('click', showForm);
});

closeBtn.addEventListener('click', hideForm);

window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        hideForm();
    }
});






document.addEventListener('DOMContentLoaded', () => {
    const openFormButton = document.getElementById('openForm1');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.querySelector('.close-btn');

     openFormButton.addEventListener('click', () => {
        popupForm.style.display = 'flex';
        nav.style.display = 'none';

    });

     closeBtn.addEventListener('click', () => {
        popupForm.style.display = 'none';
        nav.style.display = 'block';

    });

     window.addEventListener('click', (event) => {
        if (event.target === popupForm) {
            popupForm.style.display = 'none';

        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const openFormButton = document.getElementById('openForm2');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.querySelector('.close-btn');

    // Open the popup form
    openFormButton.addEventListener('click', () => {
        popupForm.style.display = 'flex';
        nav.style.display = 'none';

    });

    // Close the popup form
    closeBtn.addEventListener('click', () => {
        popupForm.style.display = 'none';
        nav.style.display = 'block';

    });

    // Optionally close the form when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === popupForm) {
            popupForm.style.display = 'none';

        }
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const openFormButton = document.getElementById('openForm3');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.querySelector('.close-btn');

     openFormButton.addEventListener('click', () => {
        popupForm.style.display = 'flex';
        nav.style.display = 'none';

    });

     closeBtn.addEventListener('click', () => {
        popupForm.style.display = 'none';
        nav.style.display = 'block';

    });

     window.addEventListener('click', (event) => {
        if (event.target === popupForm) {
            popupForm.style.display = 'none';

        }
    });
});

var intialdata = []




