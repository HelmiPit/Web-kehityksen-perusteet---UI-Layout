const dialog = document.getElementById("dialogi");
const openBtn = document.querySelector("button#open_dialog");
const closeBtn = document.querySelector("#close_dialog");
const loginForm = document.querySelector("#login-form");

const openDialog = () => {
    dialog.showModal();
};

const closeDialog = () => {
    dialog.close();
};

openBtn.addEventListener("click", openDialog);
closeBtn.addEventListener("click", closeDialog);

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#user-name").value;
    const email = document.querySelector("#user-email").value;
    const password = document.querySelector("#user-password").value;

    if (name.length < 4) {
        alert("Nimen täytyy olla yli 3 merkkiä pitkä.");
        return;
    }

    if (!email.endsWith("@metropolia.fi")) {
        alert("Sähköpostiosoitteen täytyy päättyä @metropolia.fi");
        return;
    }

    if (!/[A-Z]/.test(password)) {
        alert("Salasanassa täytyy olla vähintään yksi iso kirjain.");
        return;
    }

    if (!/[0-9]/.test(password)) {
        alert("Salasanassa täytyy olla vähintään yksi numero.");
        return;
    }

    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData);

    console.log(data);

    alert("Kirjautuminen onnistui!");
});