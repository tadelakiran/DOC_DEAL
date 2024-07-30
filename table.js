 

// table.js
document.addEventListener('DOMContentLoaded', function() {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    // Get table body element
    const tableBody = document.getElementById('appointmentsTableBody');

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
        // tableBody.remove(row);
       
    });
});

