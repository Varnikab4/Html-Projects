document.addEventListener('DOMContentLoaded', function () {
  const websiteInput = document.getElementById('website');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const savePasswordButton = document.getElementById('savePassword');

  function showNotification(message) {
    alert(message);
  }

  savePasswordButton.addEventListener('click', () => {
    const website = websiteInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (website === '' || username === '' || password === '') {
      showNotification('Please fill in all details before saving.');
    } else {
      const message = "Password saved Successfully";
      showNotification(message);

      const passwordData = {
        website,
        username,
        password,
      };

      // Get existing saved passwords or initialize an empty array
      const existingPasswords = JSON.parse(localStorage.getItem('passwordList')) || [];

      // Add the new password data to the array
      existingPasswords.push(passwordData);

      // Store the updated password list in local storage
      localStorage.setItem('passwordList', JSON.stringify(existingPasswords));

      // Clear the input fields
      websiteInput.value = '';
      usernameInput.value = '';
      passwordInput.value = '';
    }
   
    


  });
});
