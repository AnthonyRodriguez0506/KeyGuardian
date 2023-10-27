const generatePassword = (base, length) => {
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};

const generate = () => {
    let length = parseInt(inputLength.value);

    let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";

    if (checkbox1.checked) base += numbers;

    if (checkbox2.checked) base += symbols;

    generatedPassword.innerText = generatePassword(base, length);
};

window.addEventListener("DOMContentLoaded", () => {
    btnGenerate.addEventListener("click", () => {
        generate();
    });
});

// Copiado de Clave

document.getElementById("copyIcon").addEventListener("click", function() {
    const generatedPassword = document.getElementById("generatedPassword");
    const passwordText = generatedPassword.innerText.trim();

    if (passwordText === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe generar una clave antes de copiar.',
          })
    } else {
        const tempInput = document.createElement("input");
        tempInput.value = passwordText;

        document.body.appendChild(tempInput);

        tempInput.select();

        document.execCommand("copy");

        document.body.removeChild(tempInput);

        Swal.fire(
            'Clave Copiada',
            'Su clave ha sido copiada a su portapapeles.',
            'success'
          )
    }
});
