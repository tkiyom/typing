document.addEventListener("keydown",
    event => {
        let key=event.key;
        //alert(key);
        document.getElementById("aa").textContent=key;
    }
);