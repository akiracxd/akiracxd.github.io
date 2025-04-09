document.addEventListener("DOMContentLoaded", function() {
    // Проверка авторизации
    if (!localStorage.getItem('currentUser')) {
        window.location.href = 'auth.html';
        return;
    }

    // Отображение информации о пользователе
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    document.getElementById('displayUsername').textContent = currentUser.username;
    document.getElementById('displayGroup').textContent = currentUser.group;

    // Кнопка выхода
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        window.location.href = 'auth.html';
    });

    // Отображение результатов
    const resultsList = document.getElementById('resultsList');
    const results = JSON.parse(localStorage.getItem('testResults') || [])
        .filter(r => r.username === currentUser.username);

    if (results.length === 0) {
        resultsList.innerHTML = '<p>У вас пока нет сохраненных результатов.</p>';
        return;
    }

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.className = 'result-item';
        
        let resultHTML = `
            <h3>${result.topic}</h3>
            <p>Дата: ${result.date}</p>
        `;

        // Для последовательностей
        if (result.isSequence) {
            resultHTML += `
                <p>Результат: ${result.fullyCorrectTasks || 0} из ${result.totalAttempted || result.totalTasks || 60}</p>
                <div class="result-details" id="details-${result.date}"></div>
            `;
        } 
        // Для обычных тестов
        else {
            resultHTML += `
                <p>Результат: ${result.correctCount || 0} из ${result.totalQuestions || 60}</p>
                <div class="result-details" id="details-${result.date}"></div>
            `;
        }

        resultElement.innerHTML = resultHTML;
        resultsList.appendChild(resultElement);
    });
});