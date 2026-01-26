let students = [];

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "admin") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").classList.remove("hidden");
    } else {
        document.getElementById("loginMsg").innerText = "Invalid login credentials";
    }
}

function logout() {
    location.reload();
}

function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

function addStudent() {
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const room = document.getElementById("room").value;

    if (!name || !roll || !room) {
        alert("All fields are required");
        return;
    }

    students.push({ name, roll, room });
    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("room").value = "";

    alert("Student Registered Successfully");
}

function displayStudents() {
    const table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach(s => {
        table.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.roll}</td>
                <td>${s.room}</td>
            </tr>
        `;
    });
}
