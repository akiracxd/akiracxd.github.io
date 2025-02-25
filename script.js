document.addEventListener("DOMContentLoaded", function() {
    const topics = {
        "network-setup": [
            { question: "Что такое IP-адрес?", options: ["Сетевой кабель", "Протокол", "Уникальный адрес устройства", "Маршрутизатор"], correct: 2 },
            { question: "Какой порт использует HTTP?", options: ["21", "53", "80", "443"], correct: 2 },
            { question: "Какой диапазон у частных IP-адресов?", options: ["192.168.x.x", "256.256.x.x", "10.0.0.x", "127.0.0.x"], correct: 0 }
        ],
        "routing": [
            { question: "Какой протокол динамической маршрутизации используется чаще всего?", options: ["OSPF", "SMTP", "TCP", "HTTP"], correct: 0 },
            { question: "Что такое статическая маршрутизация?", options: ["Автоматическая настройка маршрутов", "Ручная настройка маршрутов", "Удалённое управление сетью", "Фильтрация пакетов"], correct: 1 },
            { question: "Какой протокол работает по принципу кратчайшего пути?", options: ["BGP", "RIP", "OSPF", "FTP"], correct: 2 }
        ],
        "topologies": [
            { question: "Какая топология используется в Wi-Fi сетях?", options: ["Звезда", "Кольцо", "Ячеистая", "Шина"], correct: 2 },
            { question: "Какая топология считается самой отказоустойчивой?", options: ["Шина", "Кольцо", "Полносвязная", "Звезда"], correct: 2 },
            { question: "Какой тип топологии имеет центральное соединяющее устройство?", options: ["Звезда", "Ячеистая", "Дерево", "Шина"], correct: 0 }
        ]
    };

    const sidebarLinks = document.querySelectorAll(".sidebar a");
    const testContent = document.getElementById("test-content");

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const topic = e.target.getAttribute("data-topic");

            if (topics[topic]) {
                loadTest(topics[topic]);
            }
        });
    });

    function loadTest(questions) {
        testContent.innerHTML = "";
        const form = document.createElement("form");
        form.setAttribute("id", "test-form");

        questions.forEach((q, index) => {
            const questionElement = document.createElement("div");
            questionElement.classList.add("test-question");

            questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

            q.options.forEach((option, i) => {
                const label = document.createElement("label");
                label.innerHTML = `<input type="radio" name="question${index}" value="${i}"> ${option}`;
                questionElement.appendChild(label);
            });

            form.appendChild(questionElement);
        });

        const submitButton = document.createElement("button");
        submitButton.textContent = "Проверить ответы";
        submitButton.classList.add("btn");
        submitButton.addEventListener("click", function(e) {
            e.preventDefault();
            checkAnswers(questions);
        });

        form.appendChild(submitButton);
        testContent.appendChild(form);
    }

    function checkAnswers(questions) {
        let correctAnswers = 0;
        const form = document.getElementById("test-form");

        questions.forEach((q, index) => {
            const selectedAnswer = form.querySelector(`input[name="question${index}"]:checked`);
            if (selectedAnswer && parseInt(selectedAnswer.value) === q.correct) {
                correctAnswers++;
            }
        });

        alert(`Вы правильно ответили на ${correctAnswers} из ${questions.length} вопросов.`);
    }
});
function toggleMenu() {
    const nav = document.querySelector(".nav");
    const burger = document.querySelector(".burger-menu");
    nav.classList.toggle("active");
    burger.classList.toggle("open");
}

