    const profileIcon = document.getElementById('profileIcon');
    const popup = document.getElementById('profilePopup');
    const saveBtn = document.getElementById('saveProfile');
    const nameInput = document.getElementById('profileName');
    const picInput = document.getElementById('profilePic');

    // Open popup when clicking the icon
    profileIcon.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    // Save and close popup
    saveBtn.addEventListener('click', () => {
        const newName = nameInput.value;
        const file = picInput.files[0];

        if (newName) {
            document.querySelector('h3').innerText = `Hello, ${newName}!`;
        }

        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                profileIcon.style.setProperty('--profile-image', `url(${e.target.result})`);
                profileIcon.style.backgroundImage = `url(${e.target.result})`;
                profileIcon.style.backgroundSize = 'cover';
                profileIcon.style.backgroundColor = 'none';
            };
            reader.readAsDataURL(file);
        }

        popup.style.display = 'none';
    });
