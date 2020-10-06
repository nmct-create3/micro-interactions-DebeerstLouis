function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});