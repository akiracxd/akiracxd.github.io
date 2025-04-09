document.addEventListener("DOMContentLoaded", function() {
    // Установка favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = 'images/LOGO.png';
    favicon.type = 'image/png';
    document.head.appendChild(favicon);

    // Проверка авторизации для страницы тестов
    if (window.location.pathname.includes('tests.html') && !localStorage.getItem('currentUser')) {
        alert('Для прохождения тестов необходимо войти в систему');
        window.location.href = 'auth.html';
        return;
    }

    // Русские названия тем
    const topicNames = {
        "network-setup": "Настройка сети",
        "routing": "Маршрутизация",
        "topologies": "Топологии сетей",
        "sequence": "Последовательность действий"
    };

    // Данные вопросов
    const topics = {
"network-setup": Array(60).fill().map((_, i) => {
    const questions = [
        {
            question: "Какой протокол используется для автоматического назначения IP-адресов?",
            options: ["HTTP", "FTP", "DHCP", "DNS"],
            correct: 2
        },
        {
            question: "Какой порт используется по умолчанию для протокола HTTPS?",
            options: ["80", "443", "21", "25"],
            correct: 1
        },
        {
            question: "Какой класс IP-адресов используется для multicast?",
            options: ["Класс A", "Класс B", "Класс C", "Класс D"],
            correct: 3
        },
        {
            question: "Какой IP-адрес является приватным?",
            options: ["192.168.1.1", "8.8.8.8", "172.32.1.1", "203.0.113.5"],
            correct: 0
        },
        {
            question: "Какой протокол работает на транспортном уровне модели OSI?",
            options: ["IP", "TCP", "HTTP", "ARP"],
            correct: 1
        },
        {
            question: "Какой тип кабеля используется в Fast Ethernet?",
            options: ["Коаксиальный", "Витая пара Cat3", "Витая пара Cat5", "Оптоволоконный"],
            correct: 2
        },
        {
            question: "Какой протокол используется для проверки доступности узла в сети?",
            options: ["ICMP", "UDP", "SMTP", "SNMP"],
            correct: 0
        },
        {
            question: "Какой адрес используется для широковещательной рассылки в локальной сети?",
            options: ["127.0.0.1", "192.168.1.255", "224.0.0.1", "169.254.1.1"],
            correct: 1
        },
        {
            question: "Какой протокол преобразует доменные имена в IP-адреса?",
            options: ["DHCP", "FTP", "DNS", "HTTP"],
            correct: 2
        },
        {
            question: "Какой диапазон портов называется 'well-known ports'?",
            options: ["0-1023", "1024-49151", "49152-65535", "256-1024"],
            correct: 0
        },
        {
            question: "Какой протокол используется для безопасного удалённого доступа к серверу?",
            options: ["Telnet", "SSH", "RDP", "FTP"],
            correct: 1
        },
        {
            question: "Какой IP-адрес у локального хоста (loopback)?",
            options: ["0.0.0.0", "127.0.0.1", "255.255.255.255", "192.168.0.1"],
            correct: 1
        },
        {
            question: "Какой протокол используется для передачи электронной почты?",
            options: ["HTTP", "FTP", "SMTP", "SNMP"],
            correct: 2
        },
        {
            question: "Какой протокол обеспечивает безопасную передачу данных в интернете?",
            options: ["HTTP", "FTP", "SSL/TLS", "UDP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для динамической маршрутизации в небольших сетях?",
            options: ["BGP", "OSPF", "RIP", "EIGRP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для синхронизации времени в сети?",
            options: ["NTP", "FTP", "HTTP", "SMTP"],
            correct: 0
        },
        {
            question: "Какой протокол используется для удалённого управления сетевыми устройствами?",
            options: ["HTTP", "SNMP", "SMTP", "ICMP"],
            correct: 1
        },
        {
            question: "Какой протокол используется для передачи файлов?",
            options: ["HTTP", "FTP", "SMTP", "SNMP"],
            correct: 1
        },
        {
            question: "Какой протокол используется для автоматического обнаружения сетевых устройств?",
            options: ["DHCP", "DNS", "LLDP", "ARP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для преобразования MAC-адресов в IP-адреса?",
            options: ["DNS", "DHCP", "ARP", "RARP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для доступа к веб-страницам?",
            options: ["FTP", "HTTP", "SMTP", "SNMP"],
            correct: 1
        },
        {
            question: "Какой протокол используется для безопасного доступа к веб-страницам?",
            options: ["HTTP", "HTTPS", "FTP", "SMTP"],
            correct: 1
        },
        {
            question: "Какой протокол используется для передачи голоса по IP (VoIP)?",
            options: ["HTTP", "FTP", "SIP", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для потоковой передачи мультимедиа?",
            options: ["HTTP", "FTP", "RTSP", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для управления сетевыми устройствами?",
            options: ["HTTP", "SNMP", "SMTP", "ICMP"],
            correct: 1
        },
        {
            question: "Какой протокол используется для автоматической настройки IPv6 адресов?",
            options: ["DHCPv6", "DNSv6", "HTTPv6", "FTPv6"],
            correct: 0
        },
        {
            question: "Какой протокол используется для обнаружения соседних устройств в IPv6?",
            options: ["ARP", "NDP", "DHCP", "DNS"],
            correct: 1
        },
        {
            question: "Какой протокол используется для туннелирования IPv6 через IPv4?",
            options: ["HTTP", "FTP", "6to4", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для защиты беспроводных сетей?",
            options: ["HTTP", "FTP", "WPA2", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для аутентификации в сети?",
            options: ["HTTP", "FTP", "RADIUS", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для виртуальных частных сетей (VPN)?",
            options: ["HTTP", "FTP", "IPsec", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для балансировки нагрузки?",
            options: ["HTTP", "FTP", "HAProxy", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для мониторинга сети?",
            options: ["HTTP", "FTP", "SNMP", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для резервного копирования?",
            options: ["HTTP", "FTP", "Rsync", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для удалённого рабочего стола?",
            options: ["HTTP", "FTP", "RDP", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для передачи файлов между Unix-системами?",
            options: ["HTTP", "FTP", "SCP", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для управления облачными сервисами?",
            options: ["HTTP", "FTP", "API", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для распределённых вычислений?",
            options: ["HTTP", "FTP", "MapReduce", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для блокировки нежелательного трафика?",
            options: ["HTTP", "FTP", "Firewall", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для кэширования веб-страниц?",
            options: ["HTTP", "FTP", "Squid", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для обнаружения сетевых аномалий?",
            options: ["HTTP", "FTP", "IDS", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для защиты от DDoS-атак?",
            options: ["HTTP", "FTP", "Cloudflare", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для управления контейнерами?",
            options: ["HTTP", "FTP", "Docker", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для оркестрации контейнеров?",
            options: ["HTTP", "FTP", "Kubernetes", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для автоматического масштабирования?",
            options: ["HTTP", "FTP", "Autoscaling", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для управления конфигурацией?",
            options: ["HTTP", "FTP", "Ansible", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для мониторинга производительности?",
            options: ["HTTP", "FTP", "Prometheus", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для логирования?",
            options: ["HTTP", "FTP", "Syslog", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для анализа трафика?",
            options: ["HTTP", "FTP", "Wireshark", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для обнаружения вторжений?",
            options: ["HTTP", "FTP", "IDS/IPS", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для защиты веб-приложений?",
            options: ["HTTP", "FTP", "WAF", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для управления серверами?",
            options: ["HTTP", "FTP", "ILO/DRAC", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для автоматического развёртывания?",
            options: ["HTTP", "FTP", "CI/CD", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для управления базами данных?",
            options: ["HTTP", "FTP", "SQL", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для репликации данных?",
            options: ["HTTP", "FTP", "DRBD", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для кластеризации?",
            options: ["HTTP", "FTP", "Corosync", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для высокой доступности?",
            options: ["HTTP", "FTP", "Pacemaker", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для распределённого хранения?",
            options: ["HTTP", "FTP", "Ceph", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для виртуализации?",
            options: ["HTTP", "FTP", "KVM", "SMTP"],
            correct: 2
        },
        {
            question: "Какой протокол используется для управления облаком?",
            options: ["HTTP", "FTP", "OpenStack", "SMTP"],
            correct: 2
        }
    ];
    return questions[i];
}),
        
"routing": Array(60).fill().map((_, i) => {
    const questions = [
        {
            question: "Какой протокол используется для обмена маршрутной информацией между автономными системами?",
            options: ["OSPF", "BGP", "RIP", "EIGRP"],
            correct: 1
        },
        {
            question: "Какой протокол маршрутизации использует алгоритм Дейкстры?",
            options: ["BGP", "OSPF", "RIP", "IS-IS"],
            correct: 1
        },
        {
            question: "Какой тип маршрутизации используется в небольших сетях с ручной настройкой?",
            options: ["Динамическая", "Статическая", "Гибридная", "Автоматическая"],
            correct: 1
        },
        {
            question: "Какой протокол относится к дистанционно-векторным алгоритмам маршрутизации?",
            options: ["OSPF", "BGP", "RIP", "IS-IS"],
            correct: 2
        },
        {
            question: "Какой протокол использует метрику количество хопов?",
            options: ["OSPF", "BGP", "RIP", "EIGRP"],
            correct: 2
        },
        {
            question: "Какой протокол маршрутизации является протоколом состояния каналов?",
            options: ["RIP", "BGP", "OSPF", "EGP"],
            correct: 2
        },
        {
            question: "Какой протокол использует метрику на основе пропускной способности и задержки?",
            options: ["RIP", "OSPF", "EIGRP", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол маршрутизации использует AS-path в качестве атрибута?",
            options: ["OSPF", "EIGRP", "RIP", "BGP"],
            correct: 3
        },
        {
            question: "Какой протокол использует multicast-адрес 224.0.0.5 для обновлений?",
            options: ["RIP", "EIGRP", "OSPF", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол маршрутизации является гибридным?",
            options: ["RIP", "OSPF", "EIGRP", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол использует порт 179 для установки соединения?",
            options: ["OSPF", "BGP", "RIP", "EIGRP"],
            correct: 1
        },
        {
            question: "Какой протокол использует административное расстояние 110 по умолчанию?",
            options: ["RIP", "EIGRP", "OSPF", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол использует алгоритм DUAL для вычисления маршрутов?",
            options: ["OSPF", "BGP", "RIP", "EIGRP"],
            correct: 3
        },
        {
            question: "Какой протокол поддерживает VLSM и CIDR?",
            options: ["RIP v1", "RIP v2", "IGRP", "EIGRP"],
            correct: 1
        },
        {
            question: "Какой протокол использует multicast-адрес 224.0.0.10?",
            options: ["OSPF", "EIGRP", "RIP", "BGP"],
            correct: 1
        },
        {
            question: "Какой протокол маршрутизации является внешним (EGP)?",
            options: ["OSPF", "EIGRP", "RIP", "BGP"],
            correct: 3
        },
        {
            question: "Какой протокол использует три таблицы маршрутизации: соседей, топологии и маршрутов?",
            options: ["RIP", "EIGRP", "OSPF", "BGP"],
            correct: 1
        },
        {
            question: "Какой протокол использует метрику на основе полосы пропускания?",
            options: ["RIP", "OSPF", "BGP", "EIGRP"],
            correct: 1
        },
        {
            question: "Какой протокол поддерживает аутентификацию MD5?",
            options: ["RIP v1", "RIP v2", "IGRP", "EIGRP"],
            correct: 1
        },
        {
            question: "Какой протокол использует триггерные обновления?",
            options: ["OSPF", "BGP", "RIP", "EIGRP"],
            correct: 3
        },
        {
            question: "Какой протокол маршрутизации использует концепцию областей (areas)?",
            options: ["RIP", "EIGRP", "OSPF", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол использует hold-down таймер для предотвращения петель маршрутизации?",
            options: ["OSPF", "BGP", "RIP", "EIGRP"],
            correct: 2
        },
        {
            question: "Какой протокол использует split horizon для предотвращения петель маршрутизации?",
            options: ["OSPF", "BGP", "RIP", "EIGRP"],
            correct: 2
        },
        {
            question: "Какой протокол маршрутизации использует AS номер?",
            options: ["OSPF", "EIGRP", "RIP", "BGP"],
            correct: 3
        },
        {
            question: "Какой протокол использует multicast-адрес 224.0.0.9?",
            options: ["RIP v2", "OSPF", "EIGRP", "BGP"],
            correct: 0
        },
        {
            question: "Какой протокол маршрутизации использует концепцию DR и BDR?",
            options: ["RIP", "EIGRP", "OSPF", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол использует административное расстояние 120 по умолчанию?",
            options: ["RIP", "OSPF", "EIGRP", "BGP"],
            correct: 0
        },
        {
            question: "Какой протокол маршрутизации использует путь с наименьшей стоимостью (cost)?",
            options: ["RIP", "EIGRP", "OSPF", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол использует poison reverse для предотвращения петель маршрутизации?",
            options: ["OSPF", "BGP", "RIP", "EIGRP"],
            correct: 2
        },
        {
            question: "Какой протокол маршрутизации использует LSA-пакеты?",
            options: ["RIP", "EIGRP", "OSPF", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол использует административное расстояние 90 по умолчанию?",
            options: ["RIP", "OSPF", "EIGRP", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол маршрутизации использует UPDATE-сообщения?",
            options: ["OSPF", "BGP", "RIP", "EIGRP"],
            correct: 1
        },
        {
            question: "Какой протокол использует hello-пакеты для обнаружения соседей?",
            options: ["RIP", "OSPF", "BGP", "EIGRP"],
            correct: 1
        },
        {
            question: "Какой протокол маршрутизации использует концепцию бесконечной метрики?",
            options: ["OSPF", "BGP", "RIP", "EIGRP"],
            correct: 2
        },
        {
            question: "Какой протокол использует транспортный протокол TCP?",
            options: ["OSPF", "EIGRP", "RIP", "BGP"],
            correct: 3
        },
        {
            question: "Какой протокол маршрутизации использует транспортный протокол UDP?",
            options: ["OSPF", "BGP", "RIP", "EIGRP"],
            correct: 2
        },
        {
            question: "Какой протокол использует multicast-адрес 224.0.0.6?",
            options: ["RIP", "OSPF", "EIGRP", "BGP"],
            correct: 1
        },
        {
            question: "Какой протокол маршрутизации использует концепцию маршрута по умолчанию?",
            options: ["Только OSPF", "Только BGP", "Только RIP", "Все перечисленные"],
            correct: 3
        },
        {
            question: "Какой протокол использует триггерные обновления только при изменении топологии?",
            options: ["RIP", "OSPF", "EIGRP", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол маршрутизации использует K-значения для расчета метрики?",
            options: ["OSPF", "EIGRP", "RIP", "BGP"],
            correct: 1
        },
        {
            question: "Какой протокол использует концепцию суммаризации маршрутов?",
            options: ["Только RIP", "Только OSPF", "Только EIGRP", "Все перечисленные"],
            correct: 3
        },
        {
            question: "Какой протокол маршрутизации использует тип сервиса (ToS) при расчете метрики?",
            options: ["RIP", "OSPF", "BGP", "EIGRP"],
            correct: 1
        },
        {
            question: "Какой протокол использует административное расстояние 20 по умолчанию для внешних маршрутов?",
            options: ["RIP", "OSPF", "EIGRP", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол маршрутизации использует концепцию маршрутизации на основе политик?",
            options: ["OSPF", "EIGRP", "RIP", "BGP"],
            correct: 3
        },
        {
            question: "Какой протокол использует маршрут по умолчанию с адресом 0.0.0.0?",
            options: ["Только RIP", "Только OSPF", "Только EIGRP", "Все перечисленные"],
            correct: 3
        },
        {
            question: "Какой протокол маршрутизации использует маршрут Null0 для предотвращения петель?",
            options: ["RIP", "OSPF", "EIGRP", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол использует маршрут по умолчанию с меткой Gateway of Last Resort?",
            options: ["OSPF", "EIGRP", "RIP", "BGP"],
            correct: 0
        },
        {
            question: "Какой протокол маршрутизации использует фильтрацию маршрутов на основе ACL?",
            options: ["Только RIP", "Только OSPF", "Только EIGRP", "Все перечисленные"],
            correct: 3
        },
        {
            question: "Какой протокол использует маршрутизацию между зонами (inter-area routing)?",
            options: ["RIP", "EIGRP", "OSPF", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол маршрутизации использует маршрутизацию между автономными системами?",
            options: ["OSPF", "EIGRP", "RIP", "BGP"],
            correct: 3
        },
        {
            question: "Какой протокол использует маршрутизацию внутри автономной системы (intra-AS routing)?",
            options: ["Только BGP", "Только OSPF", "Только EIGRP", "OSPF и EIGRP"],
            correct: 3
        },
        {
            question: "Какой протокол маршрутизации использует маршрутизацию между уровнями (multi-level routing)?",
            options: ["RIP", "IS-IS", "EIGRP", "BGP"],
            correct: 1
        },
        {
            question: "Какой протокол использует иерархическую маршрутизацию с backbone area (area 0)?",
            options: ["RIP", "EIGRP", "OSPF", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол маршрутизации использует маршрутизацию на основе тегов (tag-based routing)?",
            options: ["OSPF", "EIGRP", "RIP", "BGP"],
            correct: 3
        },
        {
            question: "Какой протокол использует маршрутизацию на основе меток (label-based routing)?",
            options: ["RIP", "OSPF", "MPLS", "BGP"],
            correct: 2
        },
        {
            question: "Какой протокол маршрутизации использует маршрутизацию на основе префиксов?",
            options: ["Только BGP", "Только OSPF", "Только EIGRP", "Все перечисленные"],
            correct: 3
        },
        {
            question: "Какой протокол использует маршрутизацию на основе атрибутов сообщества?",
            options: ["OSPF", "EIGRP", "RIP", "BGP"],
            correct: 3
        },
        {
            question: "Какой протокол маршрутизации использует маршрутизацию на основе AS-path prepending?",
            options: ["RIP", "OSPF", "EIGRP", "BGP"],
            correct: 3
        },
        {
            question: "Какой протокол использует маршрутизацию на основе local preference?",
            options: ["OSPF", "EIGRP", "RIP", "BGP"],
            correct: 3
        },
        {
            question: "Какой протокол маршрутизации использует маршрутизацию на основе MED (Multi-Exit Discriminator)?",
            options: ["RIP", "OSPF", "EIGRP", "BGP"],
            correct: 3
        },
        {
            question: "Какой протокол использует маршрутизацию на основе веса (weight)?",
            options: ["OSPF", "EIGRP", "RIP", "BGP"],
            correct: 3
        }
    ];
    return questions[i];
}),
        
"topologies": Array(60).fill().map((_, i) => {
    // Список вопросов с изображениями (10 штук)
    const imageQuestions = [
        {
            question: "Какая топология изображена на рисунке?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0,
            image: "https://habrastorage.org/r/w1560/getpro/habr/upload_files/c70/3f5/8d5/c703f58d510986008ea13d163105b85b.png"
        },
        {
            question: "Какая топология изображена на рисунке?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 1,
            image: "https://habrastorage.org/r/w1560/getpro/habr/upload_files/493/10d/b5c/49310db5c5e53c0e2b69993b8da43215.png"
        },
        {
            question: "Какая топология изображена на рисунке?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 2,
            image: "https://habrastorage.org/r/w1560/getpro/habr/upload_files/be9/c1e/a94/be9c1ea94cdc9e7e1a805a01d156e263.png"
        },
        {
            question: "Какая топология изображена на рисунке?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 3,
            image: "https://habrastorage.org/r/w1560/getpro/habr/upload_files/520/b48/895/520b4889555261fc6c1fb41488cd61f1.png"
        },
        {
            question: "Какая топология изображена на рисунке?",
            options: ["Дерево", "Кольцо", "Полносвязная", "Гиперкуб"],
            correct: 0,
            image: "https://habrastorage.org/r/w1560/getpro/habr/upload_files/96d/a30/731/96da3073148a2652eb9ea2d5a01675ba.png"
        },
        {
            question: "Какая топология изображена на рисунке?",
            options: ["Звезда", "Двойное кольцо", "Шина", "Смешанная"],
            correct: 1,
            image: "https://studfile.net/html/1442/288/html_Ou5kBLuMlP.Hdc3/img-ntF0Gn.png"
        },
        {
            question: "Какая топология изображена на рисунке?",
            options: ["Ячеистая", "Кольцо", "Полносвязная", "Звезда"],
            correct: 2,
            image: "https://habrastorage.org/getpro/habr/upload_files/4df/293/5aa/4df2935aa00d53ece05eea67e6f8879b.PNG"
        },
        {
            question: "Какая топология изображена на рисунке?",
            options: ["Гиперкуб", "Решётка", "Дерево", "Кольцо"],
            correct: 1,
            image: "https://studfile.net/html/2706/176/html_T4GHKqKJl7.rqRp/img-7brtf0.png"
        },
        {
            question: "Какая топология изображена на рисунке?",
            options: ["Смешанная", "Ячеистая", "Звезда", "Кольцо"],
            correct: 0,
            image: "https://habrastorage.org/r/w1560/getpro/habr/upload_files/7d9/216/e12/7d9216e12bf0978b91aa8f1255f7d867.png"
        },
        {
            question: "Какая топология изображена на рисунке?",
            options: ["Точка-точка", "Шина", "Звезда", "Кольцо"],
            correct: 0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80gJ7GuaRSdY6bSo2fCufp986uVc5Y6ZJh1oyTb3RwAW0Lpm04pSh8jDuQ0j-WK0ti9I&usqp=CAU"
        }
    ];

    const textQuestions = [
        {
            question: "Какая топология наиболее устойчива к отказам отдельных узлов?",
            options: ["Звезда", "Кольцо", "Ячеистая", "Шина"],
            correct: 2
        },
        {
            question: "Какая топология требует наименьшего количества кабеля?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 2
        },
        {
            question: "В какой топологии отказ центрального узла парализует всю сеть?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "Какая топология чаще всего используется в современных локальных сетях?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "В какой топологии данные передаются последовательно от узла к узлу?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 1
        },
        {
            question: "Какая топология наиболее сложна в настройке и обслуживании?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 3
        },
        {
            question: "В какой топологии используется концентратор (hub) или коммутатор (switch) в центре?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "Какая топология наиболее уязвима к проблемам с основной магистралью?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 2
        },
        {
            question: "В какой топологии каждый узел соединен со всеми остальными узлами?",
            options: ["Полносвязная", "Кольцо", "Шина", "Звезда"],
            correct: 0
        },
        {
            question: "Какая топология используется в Token Ring сетях?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 1
        },
        {
            question: "Какая топология используется в Ethernet 10BASE2?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 2
        },
        {
            question: "Какая топология обеспечивает наилучшую производительность для больших сетей?",
            options: ["Дерево", "Кольцо", "Шина", "Звезда"],
            correct: 0
        },
        {
            question: "В какой топологии проще всего локализовать неисправность?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "Какая топология требует использования терминаторов?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 2
        },
        {
            question: "В какой топологии добавление нового узла проще всего?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "Какая топология наиболее часто используется в беспроводных сетях?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "В какой топологии сигнал передается во всех направлениях по магистрали?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 2
        },
        {
            question: "Какая топология наиболее эффективно использует пропускную способность сети?",
            options: ["Полносвязная", "Кольцо", "Шина", "Звезда"],
            correct: 0
        },
        {
            question: "В какой топологии используется маркер (token) для управления доступом к сети?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 1
        },
        {
            question: "Какая топология наиболее часто используется в городских сетях (MAN)?",
            options: ["Двойное кольцо", "Звезда", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "Какая топология является комбинацией других топологий?",
            options: ["Гибридная", "Кольцо", "Шина", "Звезда"],
            correct: 0
        },
        {
            question: "В какой топологии используется алгоритм остовного дерева (Spanning Tree)?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 3
        },
        {
            question: "Какая топология используется в сетях FDDI?",
            options: ["Двойное кольцо", "Звезда", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "В какой топологии каждый узел имеет ровно два соседа?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 1
        },
        {
            question: "Какая топология наиболее устойчива к перегрузкам?",
            options: ["Ячеистая", "Кольцо", "Шина", "Звезда"],
            correct: 0
        },
        {
            question: "В какой топологии используется метод доступа CSMA/CD?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 2
        },
        {
            question: "Какая топология наиболее часто используется в оптоволоконных сетях?",
            options: ["Двойное кольцо", "Звезда", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "В какой топологии проще всего реализовать резервирование каналов?",
            options: ["Ячеистая", "Кольцо", "Шина", "Звезда"],
            correct: 0
        },
        {
            question: "Какая топология используется в сетях ATM?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "В какой топологии сигнал передается только в одном направлении?",
            options: ["Однонаправленное кольцо", "Звезда", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "Какая топология наиболее часто используется в промышленных сетях?",
            options: ["Кольцо", "Звезда", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "В какой топологии используется метод доступа Token Bus?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 2
        },
        {
            question: "Какая топология наиболее часто используется в сетях хранения данных (SAN)?",
            options: ["Двойное кольцо", "Звезда", "Шина", "Ячеистая"],
            correct: 1
        },
        {
            question: "В какой топологии используется метод маршрутизации от источника?",
            options: ["Ячеистая", "Кольцо", "Шина", "Звезда"],
            correct: 0
        },
        {
            question: "Какая топология наиболее часто используется в спутниковых сетях?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "В какой топологии используется метод доступа Demand Priority?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "Какая топология наиболее часто используется в сетях DSL?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "В какой топологии используется метод доступа Polling?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "Какая топология наиболее часто используется в сетях Frame Relay?",
            options: ["Звезда", "Полносвязная", "Шина", "Ячеистая"],
            correct: 1
        },
        {
            question: "В какой топологии используется метод доступа Slotted Ring?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 1
        },
        {
            question: "Какая топология наиболее часто используется в сетях ISDN?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "В какой топологии используется метод доступа Register Insertion?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 1
        },
        {
            question: "Какая топология наиболее часто используется в сетях xDSL?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "В какой топологии используется метод доступа Contention?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 2
        },
        {
            question: "Какая топология наиболее часто используется в сетях PON?",
            options: ["Дерево", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "В какой топологии используется метод доступа Time Division Multiple Access (TDMA)?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "Какая топология наиболее часто используется в сетях WiMAX?",
            options: ["Точка-многоточка", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "В какой топологии используется метод доступа Frequency Division Multiple Access (FDMA)?",
            options: ["Звезда", "Кольцо", "Шина", "Ячеистая"],
            correct: 0
        },
        {
            question: "Какая топология наиболее часто используется в сетях LTE?",
            options: ["Ячеистая", "Кольцо", "Шина", "Звезда"],
            correct: 0
        }
    ];

    const imageQuestionPositions = [3, 7, 12, 18, 23, 29, 34, 40, 45, 52];
    
    if (imageQuestionPositions.includes(i)) {
        return imageQuestions[imageQuestionPositions.indexOf(i) % imageQuestions.length];
    } else {
        return textQuestions[i % textQuestions.length];
    }
}),
        
"sequence": Array(60).fill().map((_, i) => {
    const scenarios = [
        {
            type: "setup",
            name: "настройке сети",
            variants: [
                ["Подключить кабель", "Настроить IP-адрес", "Установить маршрут по умолчанию", "Проверить соединение"],
                ["Установить сетевую карту", "Настроить драйверы", "Назначить IP-адрес", "Проверить подключение"],
                ["Подключить роутер", "Настроить WAN-соединение", "Настроить LAN-параметры", "Проверить интернет-доступ"]
            ]
        },
        {
            type: "troubleshoot",
            name: "устранении неполадок",
            variants: [
                ["Проверить физическое подключение", "Проверить настройки IP", "Проверить маршрутизацию", "Протестировать соединение"],
                ["Определить симптомы проблемы", "Проверить кабели и соединения", "Проверить настройки сети", "Применить исправления"],
                ["Проверить индикаторы на оборудовании", "Протестировать с другим устройством", "Проверить журналы ошибок", "Перезагрузить оборудование"]
            ]
        },
        {
            type: "configure",
            name: "конфигурации оборудования",
            variants: [
                ["Установить оборудование", "Настроить параметры сети", "Настроить брандмауэр", "Провести тестирование"],
                ["Прочитать документацию", "Подготовить конфигурационный файл", "Применить настройки", "Проверить работоспособность"],
                ["Создать резервную копию", "Внести изменения", "Проверить совместимость", "Сохранить новую конфигурацию"]
            ]
        },
        {
            type: "diagnose",
            name: "диагностике сети",
            variants: [
                ["Запустить диагностику", "Проверить логи", "Анализировать трафик", "Составить отчет"],
                ["Определить проблемные узлы", "Собрать данные о трафике", "Проанализировать статистику", "Предложить решения"],
                ["Запустить ping-тесты", "Выполнить traceroute", "Проверить таблицы маршрутизации", "Составить карту сети"]
            ]
        },
        {
            type: "security",
            name: "настройке безопасности",
            variants: [
                ["Провести аудит безопасности", "Настроить брандмауэр", "Установить антивирус", "Обновить ПО"],
                ["Определить угрозы", "Установить защитные механизмы", "Настроить политики доступа", "Провести тестирование"],
                ["Сканировать сеть на уязвимости", "Установить обновления", "Настроить VPN", "Проверить журналы безопасности"]
            ]
        },
        {
            type: "backup",
            name: "резервном копировании",
            variants: [
                ["Определить критичные данные", "Выбрать метод резервирования", "Настроить расписание", "Проверить целостность копий"],
                ["Подготовить носители", "Создать полную копию", "Создать инкрементные копии", "Проверить восстановление"],
                ["Оценить объем данных", "Выбрать инструменты", "Выполнить копирование", "Документировать процесс"]
            ]
        },
        {
            type: "upgrade",
            name: "обновлении сети",
            variants: [
                ["Составить план обновления", "Создать резервные копии", "Установить новое оборудование", "Проверить работоспособность"],
                ["Протестировать в изолированной среде", "Подготовить откат", "Применить изменения", "Мониторить стабильность"],
                ["Оценить совместимость", "Обновить прошивки", "Проверить подключения", "Оптимизировать настройки"]
            ]
        },
        {
            type: "monitoring",
            name: "настройке мониторинга",
            variants: [
                ["Определить ключевые метрики", "Выбрать инструменты", "Настроить оповещения", "Протестировать систему"],
                ["Установить сервер мониторинга", "Настроить агенты", "Определить пороги", "Настроить отчеты"],
                ["Проанализировать требования", "Разработать дашборды", "Интегрировать системы", "Обучить персонал"]
            ]
        },
        {
            type: "virtualization",
            name: "настройке виртуализации",
            variants: [
                ["Установить гипервизор", "Создать виртуальные машины", "Настроить сетевые интерфейсы", "Оптимизировать ресурсы"],
                ["Планировать ресурсы", "Развернуть платформу", "Настроить хранилище", "Проверить отказоустойчивость"],
                ["Подготовить хосты", "Настроить кластер", "Развернуть шаблоны", "Настроить миграцию"]
            ]
        },
        {
            type: "wireless",
            name: "настройке беспроводной сети",
            variants: [
                ["Выбрать местоположение", "Настроить точки доступа", "Определить каналы", "Проверить покрытие"],
                ["Провести радиочастотный анализ", "Настроить SSID", "Реализовать безопасность", "Оптимизировать мощность"],
                ["Установить контроллер", "Настроить роуминг", "Проверить скорость", "Документировать настройки"]
            ]
        },
        {
            type: "cloud",
            name: "миграции в облако",
            variants: [
                ["Оценить рабочую нагрузку", "Выбрать провайдера", "Перенести данные", "Проверить доступность"],
                ["Создать план миграции", "Настроить VPN", "Перенести сервисы", "Оптимизировать затраты"],
                ["Протестировать совместимость", "Настроить гибридное решение", "Перенести приложения", "Обучить персонал"]
            ]
        },
        {
            type: "disaster",
            name: "аварийном восстановлении",
            variants: [
                ["Активировать план восстановления", "Восстановить критичные системы", "Проверить целостность данных", "Вернуть обычный режим"],
                ["Оценить ущерб", "Восстановить из резервных копий", "Проверить функциональность", "Документировать инцидент"],
                ["Изолировать проблему", "Задействовать резервные мощности", "Восстановить соединения", "Провести анализ причин"]
            ]
        }
    ];

    // Выбираем случайный сценарий
    const scenario = scenarios[i % scenarios.length];
    const variantIndex = Math.floor(Math.random() * scenario.variants.length);
    let items = [...scenario.variants[variantIndex]];
    
    // Добавляем вариативность в последовательности
    const variations = [
        "Сохранить конфигурацию",
        "Документировать изменения",
        "Провести финальную проверку",
        "Обучить пользователей",
        "Обновить документацию"
    ];
    
    if (Math.random() > 0.5 && items.length > 3) {
        items.pop();
    } else if (Math.random() > 0.7 && items.length < 5) {
        items.push(variations[Math.floor(Math.random() * variations.length)]);
    }
    
    return {
        question: `Установите правильную последовательность действий при ${scenario.name}`,
        items: items,
        correctOrder: Array.from({length: items.length}, (_, i) => i)
    };
})
    };

    // Модальное окно
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.querySelector(".close");
    const modalCloseBtn = document.getElementById("modal-close-btn");

    function showModal(message) {
        modalText.innerHTML = message;
        modal.style.display = "flex";
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    modalCloseBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Загрузка тестов
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    const testContent = document.getElementById("test-content");

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const topic = e.target.getAttribute("data-topic");

            if (topics[topic]) {
                if (topic === "sequence") {
                    loadSequenceTest(topics[topic], topic);
                } else {
                    loadTest(topics[topic], topic);
                }
            }
        });
    });

    function loadTest(questions, topic) {
        testContent.innerHTML = "";
        const form = document.createElement("form");
        form.setAttribute("id", "test-form");

        questions.forEach((q, index) => {
            const questionElement = document.createElement("div");
            questionElement.classList.add("test-question");
            
            // Добавляем нумерацию заданий
            questionElement.innerHTML = `<p><strong>Задание ${index+1}:</strong> ${q.question}</p>`;

            if (q.image) {
                questionElement.innerHTML += `<img src="${q.image}" alt="Топология сети" onerror="this.src='https://via.placeholder.com/600x400?text=Изображение+не+загружено'">`;
            }

            q.options.forEach((option, i) => {
                const label = document.createElement("label");
                label.innerHTML = `<input type="radio" name="question${index}" value="${i}"> ${option}`;
                questionElement.appendChild(label);
            });

            form.appendChild(questionElement);
        });

        const submitButton = document.createElement("button");
        submitButton.textContent = "Проверить ответы";
        submitButton.classList.add("btn", "btn-pulse");
        submitButton.addEventListener("click", function(e) {
            e.preventDefault();
            checkAnswers(questions, topic);
        });

        form.appendChild(submitButton);
        testContent.appendChild(form);
    }

    function loadSequenceTest(questions, topic) {
        testContent.innerHTML = "";
        const form = document.createElement("form");
        form.setAttribute("id", "test-form");

        questions.forEach((q, index) => {
            const questionElement = document.createElement("div");
            questionElement.classList.add("sequence-question");
            
            // Добавляем нумерацию заданий
            questionElement.innerHTML = `
                <p><strong>Задание ${index+1}:</strong> ${q.question}</p>
                <div class="sequence-instruction">Перетащите элементы в правильном порядке (сверху вниз):</div>
                <div class="sequence-hint">Номера в оранжевых кружках показывают текущий порядок</div>
            `;
            
            const dragContainer = document.createElement("div");
            dragContainer.className = "drag-drop-container";
            dragContainer.id = `drag-container-${index}`;
            
            const shuffledItems = [...q.items].sort(() => 0.5 - Math.random());
            
            shuffledItems.forEach((item, i) => {
                const dragItem = document.createElement("div");
                dragItem.className = "drag-item";
                dragItem.innerHTML = `
                    <span class="item-index"></span>
                    <span class="item-text">${item}</span>
                `;
                dragItem.setAttribute("draggable", "true");
                dragItem.dataset.value = item;
                dragItem.dataset.questionIndex = index;
                dragContainer.appendChild(dragItem);
            });
            
            const dropZone = document.createElement("div");
            dropZone.className = "drop-zone";
            dropZone.dataset.questionIndex = index;
            dropZone.id = `drop-zone-${index}`;
            
            const resetButton = document.createElement("button");
            resetButton.textContent = "Сбросить";
            resetButton.className = "btn reset-btn";
            resetButton.addEventListener("click", (e) => {
                e.preventDefault();
                resetQuestion(index, shuffledItems);
            });
            
            questionElement.appendChild(dragContainer);
            questionElement.appendChild(dropZone);
            questionElement.appendChild(resetButton);
            form.appendChild(questionElement);
        });

        const checkButton = document.createElement("button");
        checkButton.textContent = "Проверить все ответы";
        checkButton.className = "btn btn-check-all";
        checkButton.addEventListener("click", function(e) {
            e.preventDefault();
            checkAllSequenceAnswers(questions, topic);
        });

        form.appendChild(checkButton);
        testContent.appendChild(form);
        setupDragAndDrop();
    }

    function setupDragAndDrop() {
        let draggedItem = null;
        let sourceContainer = null;

        document.addEventListener("dragstart", function(e) {
            if (e.target.classList.contains("drag-item")) {
                draggedItem = e.target;
                sourceContainer = e.target.parentElement;
                e.dataTransfer.setData("text/plain", e.target.dataset.value);
                e.target.classList.add("dragging");
                
                document.querySelectorAll(".drop-zone").forEach(zone => {
                    zone.classList.add("highlight");
                });
            }
        });

        document.addEventListener("dragend", function(e) {
            if (e.target.classList.contains("drag-item")) {
                e.target.classList.remove("dragging");
                document.querySelectorAll(".drop-zone").forEach(zone => {
                    zone.classList.remove("highlight");
                });
            }
        });

        document.addEventListener("dragover", function(e) {
            if (e.target.classList.contains("drop-zone") || 
               e.target.classList.contains("drag-drop-container")) {
                e.preventDefault();
                e.dataTransfer.dropEffect = "move";
            }
        });

        document.addEventListener("drop", function(e) {
            e.preventDefault();
            if (!draggedItem) return;

            const questionIndex = draggedItem.dataset.questionIndex;
            const targetIsDropZone = e.target.classList.contains("drop-zone") && 
                                  e.target.id === `drop-zone-${questionIndex}`;
            const targetIsContainer = e.target.classList.contains("drag-drop-container") && 
                                    e.target.id === `drag-container-${questionIndex}`;

            if (targetIsDropZone || targetIsContainer) {
                e.target.appendChild(draggedItem);
                e.target.classList.remove("highlight");
                
                if (targetIsDropZone) {
                    updateSequenceIndices(e.target);
                } else {
                    // При возврате в контейнер сбрасываем стили
                    const indexElement = draggedItem.querySelector('.item-index');
                    indexElement.style.backgroundColor = '#f8743c';
                    draggedItem.classList.remove("correct", "incorrect");
                }
            }
        });
    }

    function updateSequenceIndices(dropZone) {
        const items = dropZone.querySelectorAll('.drag-item');
        items.forEach((item, index) => {
            const indexElement = item.querySelector('.item-index');
            indexElement.textContent = index + 1;
            indexElement.style.backgroundColor = '#f8743c';
            item.classList.remove("correct", "incorrect");
        });
    }

    function resetQuestion(questionIndex, items) {
        const dropZone = document.getElementById(`drop-zone-${questionIndex}`);
        const dragContainer = document.getElementById(`drag-container-${questionIndex}`);
        
        // Возвращаем все элементы в контейнер
        while (dropZone.firstChild) {
            const item = dropZone.firstChild;
            dragContainer.appendChild(item);
            const indexElement = item.querySelector('.item-index');
            indexElement.style.backgroundColor = '#f8743c';
            item.classList.remove("correct", "incorrect");
        }
        
        // Перемешиваем элементы
        const children = Array.from(dragContainer.children);
        for (let i = children.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            dragContainer.appendChild(children[j]);
        }
    }

    function checkAnswers(questions, topic) {
        const form = document.getElementById("test-form");
        const userAnswers = [];
        
        questions.forEach((q, index) => {
            const selectedAnswer = form.querySelector(`input[name="question${index}"]:checked`);
            userAnswers.push(selectedAnswer ? parseInt(selectedAnswer.value) : undefined);
        });

        const correctAnswers = userAnswers.filter((ans, i) => ans === questions[i].correct).length;
        const percentage = Math.round((correctAnswers / questions.length) * 100);
        
        showModal(`Вы правильно ответили на ${correctAnswers} из ${questions.length} вопросов (${percentage}%).`);
        saveTestResult(topic, questions, userAnswers);
    }

    function checkAllSequenceAnswers(questions, topic) {
        let fullyCorrectTasks = 0;
        const results = [];
        
        questions.forEach((q, index) => {
            const dropZone = document.getElementById(`drop-zone-${index}`);
            if (!dropZone) {
                // Если зона сброса не существует, значит пользователь не выполнял это задание
                results.push({
                    question: q.question,
                    isFullyCorrect: false,
                    totalItems: q.items.length
                });
                return;
            }
            
            const droppedItems = Array.from(dropZone.querySelectorAll(".drag-item"));
            
            // Проверяем, все ли элементы были перемещены в зону сброса
            if (droppedItems.length === 0) {
                results.push({
                    question: q.question,
                    isFullyCorrect: false,
                    totalItems: q.items.length
                });
                return;
            }
            
            // Проверяем правильность порядка
            let isFullyCorrect = true;
            droppedItems.forEach((item, position) => {
                const isCorrect = item.dataset.value === q.items[q.correctOrder[position]];
                if (!isCorrect) isFullyCorrect = false;
                
                // Подсветка
                const indexElement = item.querySelector('.item-index');
                if (isCorrect) {
                    indexElement.style.backgroundColor = '#4CAF50';
                    item.classList.add("correct");
                } else {
                    indexElement.style.backgroundColor = '#F44336';
                    item.classList.add("incorrect");
                }
            });
            
            if (isFullyCorrect) fullyCorrectTasks++;
            
            results.push({
                question: q.question,
                isFullyCorrect: isFullyCorrect,
                totalItems: q.items.length
            });
        });
        
        const totalAttempted = results.filter(r => r.isFullyCorrect !== undefined).length;
        showModal(`Правильно выполнено заданий: ${fullyCorrectTasks} из ${totalAttempted}`);
        saveSequenceResults(topic, results, fullyCorrectTasks, totalAttempted);
    }

    function saveTestResult(topic, questions, userAnswers) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) return;

        const now = new Date();
        const testResult = {
            username: currentUser.username,
            group: currentUser.group,
            topic: topicNames[topic] || topic,
            date: now.toLocaleString(),
            questions: questions.map((q, i) => ({
                question: q.question,
                correctAnswer: q.options[q.correct],
                userAnswer: userAnswers[i] !== undefined ? q.options[userAnswers[i]] : 'Не ответил'
            })),
            correctCount: userAnswers.filter((ans, i) => ans === questions[i].correct).length,
            totalQuestions: questions.length
        };

        let results = JSON.parse(localStorage.getItem('testResults') || '[]');
        results.push(testResult);
        localStorage.setItem('testResults', JSON.stringify(results));

        generateResultsFile(topicNames[topic] || topic, testResult);
    }

    function saveSequenceResults(topic, results, fullyCorrectTasks, totalAttempted) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) return;
    
        const now = new Date();
        const testResult = {
            username: currentUser.username,
            group: currentUser.group,
            topic: topicNames[topic] || topic,
            date: now.toLocaleString(),
            results: results,
            fullyCorrectTasks: fullyCorrectTasks,
            totalAttempted: totalAttempted,
            totalTasks: results.length,
            isSequence: true
        };
    
        let allResults = JSON.parse(localStorage.getItem('testResults') || '[]');
        allResults.push(testResult);
        localStorage.setItem('testResults', JSON.stringify(allResults));
    
        generateResultsFile(topicNames[topic] || topic, testResult);
    }

    function generateResultsFile(topicName, testResult) {
        let resultText = `Результаты теста\n`;
        resultText += `Тема: ${topicName}\n`;
        resultText += `Пользователь: ${testResult.username}\n`;
        resultText += `Группа: ${testResult.group}\n`;
        resultText += `Дата: ${testResult.date}\n\n`;
        
        if (testResult.isSequence) {
            resultText += `Правильно выполнено заданий: ${testResult.fullyCorrectTasks} из ${testResult.totalAttempted}\n\n`;
            
            testResult.results.forEach((r, i) => {
                resultText += `Задание ${i+1}: ${r.question}\n`;
                if (r.isFullyCorrect === undefined) {
                    resultText += `Статус: Не выполнялось\n`;
                } else {
                    resultText += `Статус: ${r.isFullyCorrect ? 'Выполнено правильно' : 'Есть ошибки'}\n`;
                }
                resultText += `Элементов в задании: ${r.totalItems}\n\n`;
            });
        }

        resultText += `Итог: ${testResult.correctCount || testResult.fullyCorrectTasks} из ${testResult.totalQuestions || testResult.totalTasks} правильных ответов`;

        const blob = new Blob([resultText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Результаты_${topicName}_${new Date().toISOString().slice(0,10)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Инициализация анимаций
    document.querySelectorAll('.header, .footer, .sidebar, .test-container').forEach(el => {
        el.classList.add('animated');
    });
});

function toggleMenu() {
    const nav = document.querySelector(".nav");
    const burger = document.querySelector(".burger-menu");
    nav.classList.toggle("active");
    burger.classList.toggle("open");
}