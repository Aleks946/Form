const form = document.getElementById("form")
const successmesage = document.getElementById("successmesage")

form.addEventListener('submit',function(e){
    e.preventDefault();
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('email', email)
    localStorage.setItem('password', password)

    successmesage.textContent =`Your informacion is saved on our database. email: ${email} password: ${password}`

    form.reset();

});