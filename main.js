let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmPass = document.getElementById("confirmPass")
let btn_login = document.querySelector(".btn_login")
btn_login.addEventListener("click", showError)

function showError () {

        // ---- verify username ----

        let form_control_username = username.parentElement
        let small_error = form_control_username.querySelector("small")
        let str_username = username.value

        if (username.value == "") {
            small_error.innerText = "Username is requirement"
            form_control_username.classList.add("error")
            
        } else {
            for( i in str_username) {
                
                if (str_username[i] >= 0 && str_username[i] <= 9
                    || str_username == "@" 
                    || str_username[0] == " ") {
                    small_error.innerText = "Username not contain any special charactors"
                    form_control_username.classList.add("error")

                } else {
                    small_error.innerText = null
                    form_control_username.classList.remove("error")
                    form_control_username.classList.add("success")
                }
            }    
        } 

        // ----- verify email -----

        let form_control_email = email.parentElement
        let small_error_email = form_control_email.querySelector("small")
        let str_email = email.value
        
        if (email.value == "") {
            small_error_email.innerText = "Email is requirement"
            form_control_email.classList.add("error")
        } else {    
            for ( i in str_email ) {

                if (str_email.indexOf("@gmail.com") == -1) {
                    small_error_email.innerText = "Email address must contain @gmail.com charactor"
                    form_control_email.classList.add("error")      

                } else {
                    small_error_email.innerText = null
                    form_control_email.classList.remove("error")
                    form_control_email.classList.add("success")
                }
            }
        }
        // ---- verify password ----

        let form_control_password = password.parentElement
        let small_error_password = form_control_password.querySelector("small")
        if (password.value == "") {
            small_error_password.innerText = "Password is requirement"
            form_control_password.classList.add("error")
        } else {
            small_error_password.innerText = null
            form_control_password.classList.remove("error")
            form_control_password.classList.add("success")
        }
        
        // verify matching pass and confirm pass

        let form_control_confirmPass = confirmPass.parentElement
        let small_error_confirmPass = form_control_confirmPass.querySelector("small")

        if (confirmPass.value == "") {
            small_error_confirmPass.innerText = "Confirm password is requirement"
            form_control_confirmPass.classList.add("error")

        } else if (confirmPass.value != password.value) {
            small_error_confirmPass.innerText = "Two password are not matching"
            form_control_confirmPass.classList.add("error")
            form_control_confirmPass.classList.remove("success")

        } else {
            small_error_confirmPass.innerText = null
            form_control_confirmPass.classList.remove("error")
            form_control_confirmPass.classList.add("success")
        }

}
