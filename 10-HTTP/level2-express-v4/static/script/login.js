const btn = {
    login: document.querySelector(".login"),
    sign: document.querySelector(".sign"),
};
const text = {
    user: document.querySelector(".user"),
    password: document.querySelector(".psw"),
};

btn.sign.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1/sign";
});

btn.login.addEventListener("click", () => {
    // POST
    let headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });
    const payload = JSON.stringify({
        user: text.user.value,
        password: text.password.value,
    });
    if (localStorage.getItem("token")) {
        headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        });
    }
    fetch("/login", {
        method: "POST",
        body: payload,
        headers: headers,
    })
        .then((response) => {
            response.json();
        })
        .then((data) => {
            console.log(data);
        });
});
