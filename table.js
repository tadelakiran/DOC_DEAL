// // table.js
// document.addEventListener('DOMContentLoaded', function() {
//     const tableBody = document.querySelector('#appointmentTable tbody');
//     let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

//     appointments.forEach(appointment => {
//         let row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${appointment.name}</td>
//             <td>${appointment.phone}</td>
//             <td>${appointment.email}</td>
//             <td>${appointment.gender}</td>
//             <td>${appointment.specialist}</td>
//             <td>${appointment.date}</td>
//             <td>${appointment.appointment}</td>
//             <td>${appointment.status}</td>
//         `;
//         tableBody.appendChild(row);
//     });
// });


const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

// Get table body element
const tableBody = document.getElementById('appointmentsTableBody');

// Populate the table with stored data
appointments.forEach(app => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${app.name}</td>
        <td>${app.phone}</td>
        <td>${app.email}</td>
        <td>${app.gender}</td>
        <td>${app.specialist}</td>
        <td>${app.date}</td>
        <td>${app.appointment}</td>
        <td>${app.status}</td>
    `;
    tableBody.appendChild(row);
});
localStorage.removeItem('appointments');
