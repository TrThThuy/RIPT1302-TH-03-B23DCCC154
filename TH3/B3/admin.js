document.addEventListener('DOMContentLoaded', function() {
    fetchStudentData();
});

function fetchStudentData() {
    // Gửi yêu cầu lấy dữ liệu sinh viên từ máy chủ
    fetch('http://your-server-url/api/students')
        .then(response => response.json())
        .then(data => {
            // Hiển thị dữ liệu trong bảng
            displayStudentData(data);
        })
        .catch(error => console.error('Error fetching student data:', error));
}

function displayStudentData(students) {
    const tableBody = document.querySelector('#student-table tbody');
    tableBody.innerHTML = '';

    // Duyệt qua mỗi sinh viên và thêm vào bảng
    students.forEach((student, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.address}</td>
                <td>${student.phone}</td>
                <td>${student.email}</td>
                <td>${student.class}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}
