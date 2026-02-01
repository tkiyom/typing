document.addEventListener("keydown",
    event => {
        let key=event.key;
        document.getElementById("aa").innerHTML += key;
    }
);