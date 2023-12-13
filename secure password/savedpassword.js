document.addEventListener('DOMContentLoaded', function () {
    const passwordList = document.getElementById('passwordList');
  
    function displaySavedPasswords(savedPasswords) {
      passwordList.innerHTML = '';
  
      savedPasswords.forEach(passwordData => {
        const passwordItem = document.createElement('p');
        passwordItem.textContent = `Website: ${passwordData.website} - Username: ${passwordData.username} - Password: ${passwordData.password}`;
        passwordList.appendChild(passwordItem);
      });
    }
  
    const savedPasswords = JSON.parse(localStorage.getItem('passwordList')) || [];
  
    displaySavedPasswords(savedPasswords);

    
  });
  