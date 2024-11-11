document.getElementById("login-btn").onclick = function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  let isValid = true;

  // Username validation: letters, underscores, dashes only
  const usernameRegex = /^[a-zA-Z_-]+$/;
  if (!usernameRegex.test(username)) {
    usernameError.textContent =
      "Username can only contain letters, underscores, or dashes.";
    usernameError.classList.add("visible");
    isValid = false;
  } else {
    usernameError.classList.remove("visible");
  }

  // Password validation: 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,$<>])[A-Za-z\d@$!%*?&.,$<>]{8,}$/;
  if (!passwordRegex.test(password)) {
    passwordError.textContent =
      "Password must be at least 8 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
    passwordError.classList.add("visible");
    isValid = false;
  } else {
    passwordError.classList.remove("visible");
  }

  return isValid;
};
