document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra tài khoản và mật khẩu
    if (username === 'admin' && password === 'admin') {
        // Chuyển hướng sang trang quản trị nếu đúng
        window.location.href = 'admin.html';
    } else {
        // Hiển thị thông báo lỗi nếu sai
        document.getElementById('error-message').textContent = 'Tài khoản hoặc mật khẩu không chính xác';
    }
});
