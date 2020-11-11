function emailValidation () {
    const input = document.querySelector("form input")
    const button = document.querySelector("footer .hero-btn")
    const message =document.querySelector(".error-msg")
    button.addEventListener('click',(e)=> {
        const emailInput = input.value;
        if(validateEmail(emailInput)) {
            console.log("true");
            message.style.display="none";
        }
        else {
            e.preventDefault();
            console.log("false");
            message.style.display="block";

        }
    });

    function validateEmail(email) {
        const re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

export {emailValidation};
