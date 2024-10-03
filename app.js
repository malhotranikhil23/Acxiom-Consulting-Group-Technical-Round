// Simulate a user role
let userRole = 'user'; // Change to 'admin' to simulate admin user

function showSection(section) {
    hideAllSections();
    document.getElementById(section).classList.remove('hidden');
    document.getElementById(section).classList.add('visible');
}

function hideAllSections() {
    const sections = document.querySelectorAll('div');
    sections.forEach((section) => {
        section.classList.add('hidden');
        section.classList.remove('visible');
    });
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin") {
        userRole = 'admin';
        window.location.href = "admin.html"; // Redirect to admin page
    } else if (username === "user" && password === "user") {
        userRole = 'user';
        window.location.href = "user.html"; // Redirect to user page
    } else {
        document.getElementById('loginMessage').innerText = "Invalid credentials. Please try again.";
    }
}

function checkAvailability() {
    const bookName = document.getElementById('bookAvailability').value;
    if (bookName) {
        alert(`Book "${bookName}" is available!`);
        document.getElementById('issueBookSection').classList.remove('hidden');
        document.getElementById('issueBookSection').classList.add('visible');
    } else {
        alert('Please enter a book name.');
    }
}

function issueBook() {
    const bookName = document.getElementById('issueBookName').value;
    const serialNumber = document.getElementById('issueBookSerial').value;

    if (!bookName || !serialNumber) {
        alert('Please fill in all fields to issue the book.');
        return;
    }

    alert(`Book "${bookName}" with serial number "${serialNumber}" issued successfully!`);
    document.getElementById('issueBookName').value = '';
    document.getElementById('issueBookSerial').value = '';
}

function returnBook() {
    const bookName = document.getElementById('returnBookName').value;
    const serialNumber = document.getElementById('returnBookSerial').value;

    if (!bookName || !serialNumber) {
        alert('Please fill in all fields to return the book.');
        return;
    }

    alert(`Book "${bookName}" with serial number "${serialNumber}" returned successfully!`);
    document.getElementById('returnBookName').value = '';
    document.getElementById('returnBookSerial').value = '';
}

function payFine() {
    const serialNumber = document.getElementById('fineSerial').value;
    const finePaid = document.getElementById('finePaid').checked;

    if (!serialNumber) {
        alert('Please enter a serial number to pay the fine.');
        return;
    }

    if (finePaid) {
        alert(`Fine for serial number "${serialNumber}" has been paid!`);
    } else {
        alert('Please check the box to confirm payment of the fine.');
    }
}

function logOut() {
    alert('Logged out successfully!');
    window.location.href = "index.html"; // Redirect to home page
}
