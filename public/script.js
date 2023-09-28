// To activate sign-up / login modal
// $('#login-signup').modal();

function loggedIn() {
    return false;
}

const myModal = new bootstrap.Modal(document.getElementById('signup-login'));

// Add click event listener to main login button
document.getElementById("login").addEventListener("click", function() {
    if (!loggedIn()) myModal.show();
});

// Add click event to modal login button

document.getElementById("modal-login").addEventListener("click", function() {
  if (!loggedIn()) location.href="/login";
});


// Add click event to modal signup button

document.getElementById("modal-signup").addEventListener("click", function() {
  if (!loggedIn()) location.href="/signup";
});

