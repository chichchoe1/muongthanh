document.addEventListener('DOMContentLoaded', function() {
    const userName = document.querySelector('.user-name');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const logoutLink = document.getElementById('logout');

    userName.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    logoutLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Thực hiện hành động đăng xuất ở đây
        alert('Đăng xuất thành công!');
        // Ví dụ: chuyển hướng đến trang đăng nhập
        window.location.href = 'login.html';
    });

    document.addEventListener('click', function(event) {
        if (!userName.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});

document.getElementById('userButton').addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.toggle('show');
});

window.onclick = function(event) {
    if (!event.target.matches('#userButton')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
