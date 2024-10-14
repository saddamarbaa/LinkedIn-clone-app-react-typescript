// Get the profile icon and settings menu
const profileIcon = document.getElementById('nav-user-icon')
const settingMenu = document.getElementById('setting-menu')

// Toggle the visibility of the settings menu when profile icon is clicked
profileIcon.addEventListener('click', function () {
	settingMenu.classList.toggle('show')
})

