function togglePassword() {
    var passwordInput = document.getElementById("new-password");
    var showPasswordCheckbox = document.getElementById("hidden__eye");
    var eyeIcon = document.getElementById("eye__icon");
  
    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-solid", "fa-eye-slash");
        eyeIcon.classList.add("fa-solid", "fa-eye");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-solid", "fa-eye");
        eyeIcon.classList.add("fa-solid", "fa-eye-slash");
    }
  }
