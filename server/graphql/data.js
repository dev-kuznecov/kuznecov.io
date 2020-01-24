const skills = [
    {
        title: 'HTML',
        hash: 'html',
        progress: 4,
        text: 'хэ тэ мэ эл, да'
    },
    {
        title: 'CSS, SCSS',
        hash: 'styles',
        progress: 4,
        text: 'Верстаю 4 года, знаю множество тонкостей и особенностей браузеров'
    },
    {
        title: 'Bootstrap',
        hash: 'bootstrap',
        progress: 4,
        text: 'Использую на всех больших проектах, кастомизирую в зависимости от дизайна'
    },
    {
        title: 'PUG',
        hash: 'pug',
        progress: 4,
        text: 'Использовал на больших проектах, отличный шаблонизатор, но, в общем-то, они все похожи'
    },
    {
        title: 'JS (ES6)',
        hash: 'js',
        progress: 3,
        text: 'Immediately Invoked Function Expression'
    },
    {
        title: 'TS',
        hash: 'ts',
        progress: 3,
        text: 'Жду бету Vue 3 на TS, поэтому в данный момент использую Composition API с кучей несовместимостей, но все равно круто!'
    },
    {
        title: 'Vue',
        hash: 'vue',
        progress: 3,
        text: 'Все последние проекты я делаю только на нем, это восхитительный фреймворк'
    },
    {
        title: 'Vuex',
        hash: 'vuex',
        progress: 3,
        text: 'Когда я начал использовать хранилища в своих проектах, я наконец-то смог насладиться работой с данными'
    },
    {
        title: 'Nuxt (SSR)',
        hash: 'ssr',
        progress: 3,
        text: 'Сейчас для SSR я использую Nuxt, но я так же делал кастомные сборки на webpack, в такой переходный момент между Vue 2 -> 3, наверное я вернусь к кастомной сборке'
    },
    {
        title: 'Apollo (GraphQL)',
        hash: 'graphql',
        progress: 2,
        text: 'Я недавно начал изучать GraphQL. Этот проект использует Apollo GraphQL'
    },
    {
        title: 'JQuery',
        hash: 'jquery',
        progress: 4,
        text: 'Когда люди пишут лапшу, мы ругаемся на JQuery, по-моему это несправедливо...'
    },
    {
        title: 'Node.js',
        hash: 'nodejs',
        progress: 3
    },
    {
        title: 'Express',
        hash: 'express',
        progress: 3,
        text: 'Могу реализовать полноценный сайт на связке Express, MongoDB, PassportJS, JWT'
    },
    {
        title: 'Git',
        hash: 'git',
        progress: 3,
        text: 'Знаю как мерджить, комитить и пушить'
    },
    {
        title: 'WebPack',
        hash: 'webpack',
        progress: 3,
        text: 'Отлично разбираюсь в этом сборщике, легко пишу свои конфиги'
    },
    {
        title: 'Gulp',
        hash: 'gulp',
        progress: 4,
        text: 'К сожалению, пример показать не могу, но у меня каждый таск в отдельном файле и подключается модульно. Просто надоели эти конфиги-матрасы на 3 тыс строк кода'
    },
    {
        title: 'Grunt',
        hash: 'grunt',
        progress: 1,
        text: 'Я пришел в веб, когда он уже отжил своё, делал только правки на древних проектах'
    },
    {
        title: 'WebSocket',
        hash: 'socket',
        progress: 2,
        text: 'Сейчас использую для subscriptions в Apollo GQL'
    },
    {
        title: 'Three.js',
        hash: 'three',
        progress: 1,
        text: 'Когда-то делал свою игру, освоил основы, могу создать сцену и анимировать её, ну и добавить немного логики'
    },
    {
        title: 'Angular',
        hash: 'angular',
        progress: 2,
        text: 'У меня были коммерческие проекты на Angular 1.x, а вот на Angular 2+ — нет, но перед тем как я пришел во Vue, я усердно изучал Angular 2+'
    },
    {
        title: 'PHP',
        hash: 'php',
        progress: 2,
        text: 'В начале своего пути делал сайты на Laravel, предварительно изучив ООП, PDO'
    },
    {
        title: 'Photoshop',
        hash: 'photoshop',
        progress: 3,
        text: 'Раньше все макеты были в PSD, какой ужас...'
    },
    {
        title: 'English',
        hash: 'english',
        progress: 1,
        text: 'Лондон чё-то там... В общем, могу прочитать только техническую документацию, но скоро собираюсь повысить уровень до разговорного'
    },
    {
        title: 'Design',
        hash: 'design',
        progress: 4,
        text: 'Десигн этого сайта сделал я сам  (&nbsp;▀&nbsp;͜͞ʖ▀)'
    }
]

const timeline = [
    {
        title: 'ADV (Dominion)',
        date: '2017 - 2019',
        status: 'FrontEnd-разработчик',
        text: 'Разрабатывал клиентскую часть на Vue, Angular, Jquery, чистом JS, верстал состояния, оптимизировал легаси код'
    },
    {
        title: 'Parus Agency',
        date: '2016 - 2017',
        status: 'FrontEnd-разработчик',
        text: 'В основном занимался клиентской частью, иногда делал проект полностью на Bitrix или Modx'
    },
    {
        title: 'Freelance',
        date: '2015 - 2016',
        status: 'FullStack-разработчик',
        text: 'Разрабатывал сайты под ключ на Laravel, Modx'
    }
]

const projects = [
    {
        id: 1,
        title: 'Кувалда.ру',
        tag: 'Интернет-магазин',
        url: 'https://www.kuvalda.ru/',
        text: 'Полная реализация клиентской части на Vue'
    },
    {
        id: 2,
        title: 'Miele',
        tag: 'Интернет-магазин',
        url: 'https://www.miele-shop.ru/',
        text: 'Полная реализация клиентской части на Vue'
    },
    {
        id: 3,
        title: 'СПБ Дом Книги',
        tag: 'Интернет-магазин',
        url: 'https://www.spbdk.ru/',
        text: 'Полная реализация клиентской части на Vue'
    },
    {
        id: 4,
        title: 'SNS',
        url: 'https://sns.ru/',
        tag: 'Корпоративный',
        text: 'Полная реализация клиентской части'
    },
    {
        id: 5,
        title: 'Ostec',
        url: 'https://ostec-group.ru/',
        tag: 'Интернет-магазин',
        text: 'Разработка клиентской части'
    },
    {
        id: 6,
        title: 'Generation S',
        url: 'https://generation-startup.ru/',
        tag: 'Акселератор',
        text: 'Реализация внутреннего UI для инвесторов на PHP, JS'
    }
]

const sections = [
    {
        name: 'about',
        url: 'about',
        title: 'Обо мне',
        tags: [
            {
                title: 'Павел'
            },
            {
                title: '23 года'
            },
            {
                title: 'ЗОЖ'
            },
            {
                title: 'Астрономия'
            },
            {
                title: 'Котэ'
            },
            {
                title: 'Metalcore'
            },
            {
                title: 'RYTP'
            },
            {
                title: 'Habr'
            },
            {
                title: 'Gamedev'
            },
            {
                title: 'Манга'
            },
            {
                title: 'Бизнес'
            },
            {
                title: 'Политика'
            },
            {
                title: 'DOTA 2'
            }
        ]
    },
    {
        name: 'exp',
        url: 'exp',
        title: 'Опыт',
        tags: [
            {
                title: 'Кувалда.ру'
            },
            {
                title: 'СПБ Дом Книги'
            },
            {
                title: 'SNS'
            },
            {
                title: 'Miele Shop'
            },
            {
                title: 'DM Shop'
            },
            {
                title: 'VIRBAC'
            },
            {
                title: 'Generation S'
            },
            {
                title: 'Ostec'
            },
            {
                title: 'Berito'
            },
            {
                title: 'WolfsBrewery'
            },
            {
                title: 'Medici-Jewelry'
            },
            {
                title: 'VivatBayan'
            },
            {
                title: 'Flebofa'
            },
            {
                title: 'Charm-Optika'
            },
            {
                title: 'СВПЗ'
            },
            {
                title: 'Team8'
            },
        ]
    },
    {
        name: 'skills',
        url: 'skills',
        title: 'Навыки',
        tags: [
            {
                title: 'HTML'
            },
            {
                title: 'CSS'
            },
            {
                title: 'SCSS'
            },
            {
                title: 'Bootstrap'
            },
            {
                title: 'PUG'
            },
            {
                title: 'ES6'
            },
            {
                title: 'JS'
            },
            {
                title: 'Vue'
            },
            {
                title: 'Vuex'
            },
            {
                title: 'JQuery'
            },
            {
                title: 'Node.js'
            },
            {
                title: 'Express'
            },
            {
                title: 'Angular'
            },
            {
                title: 'TS'
            },
            {
                title: 'Photoshop'
            },
            {
                title: 'Zeplin.io'
            },
            {
                title: 'InVision'
            },
            {
                title: 'Axios'
            },

            {
                title: 'Three.js'
            },
            {
                title: 'Git'
            },
        ]
    },
    {
        name: 'contacts',
        url: 'contacts',
        title: 'Контакты',
        tags: [
            {
                title: 'Самара'
            },
            {
                title: 'Telegram'
            },
            {
                title: 'Телефон'
            },
            {
                title: 'Email'
            },
            {
                title: 'VK'
            }
        ]
    },
]

export {
    skills,
    timeline,
    projects,
    sections
}