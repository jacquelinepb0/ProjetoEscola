let usuarios = [{
    nome:"Jacqueline",
    email:"jac.pb14@gmail.com"
    senha:"1234"
},
usuarios = {
    nome:"Lais",
    email:"lais@gmail.com"
    senha:"4567"
},
usuarios = {
    nome:"Julia",
    email:"julia@gmail.com"
    senha:"89710"
},
usuarios = {
    nome:"Carol",
    email:"carol@gmail.com"
    senha:"123"
},
]



function login () {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    console.log(email);
    console.log(password);   

if (email ==="jac.pb14@gmail.com" && password === "1234") {
    alert("Login efetuado com sucesso")
    window.location.href = "/pages/dashboard.html"
} else {
    alert("Email ou senha incorretos")
}
}

let usuarioValido = false
for (let i = 0; i < usuarios.length; i++) {
    if (email === usuarios[i].email && password === usuarios[i]) {
        
    } else {
        
    }
    const element = array[i];
    do {
        
    } while (condition);
}