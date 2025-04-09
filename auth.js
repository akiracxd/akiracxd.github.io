document.addEventListener("DOMContentLoaded", function() {
    // Проверка авторизации
    if (localStorage.getItem('currentUser') && 
        (window.location.pathname.includes('auth.html') || 
         window.location.pathname.includes('register.html'))) {
        window.location.href = 'results.html';
    }

    // Форма входа
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                window.location.href = 'results.html';
            } else {
                alert('Неверное имя пользователя или пароль');
            }
        });
    }

    // Форма регистрации
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('regUsername').value;
            const password = document.getElementById('regPassword').value;
            const group = document.getElementById('regGroup').value;

            // Валидация
            const usernameError = document.getElementById('usernameError');
            const passwordError = document.getElementById('passwordError');
            let isValid = true;

            // Проверка имени пользователя
            if (username.length < 4) {
                usernameError.textContent = 'Имя пользователя должно содержать минимум 4 символа';
                isValid = false;
            } else if (/[^a-zA-Z0-9]/.test(username)) {
                usernameError.textContent = 'Имя пользователя может содержать только буквы и цифры';
                isValid = false;
            } else {
                usernameError.textContent = '';
            }

            // Проверка пароля
            if (password.length < 6) {
                passwordError.textContent = 'Пароль должен содержать минимум 6 символов';
                isValid = false;
            } else if (/[^a-zA-Z0-9]/.test(password)) {
                passwordError.textContent = 'Пароль может содержать только буквы и цифры';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }

            if (!isValid) return;

            // Проверка существующего пользователя
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            if (users.some(u => u.username === username)) {
                alert('Пользователь с таким именем уже существует');
                return;
            }

            // Сохранение пользователя
            const newUser = { username, password, group };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(newUser));

            // Создание файла с данными пользователей
            let usersText = 'Данные пользователей:\n\n';
            users.forEach(user => {
                usersText += `Имя: ${user.username}\n`;
                usersText += `Группа: ${user.group}\n`;
                usersText += `------------------------\n`;
            });

            const blob = new Blob([usersText], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'users_data.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            window.location.href = 'results.html';
        });
    }

    // Выход из системы
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            window.location.href = 'auth.html';
        });
    }
});