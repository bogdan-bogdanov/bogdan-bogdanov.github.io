// ============================================
// PORTFOLIO DATA - EASY UPDATE SECTION
// ============================================
// Update the content below to modify your portfolio
// All content is centralized here for easy management

const portfolioData = {
    en: {
        ui: {
            homeLabel: "Home",
            langToggle: "Русский"
        },
        home: {
            title: "Bogdan Bogdanov",
            description: "Scriptwriter. Showrunner. Narrative Designer. Game Director.\nI teach writing, design, and critical thinking.",
            contact: [
                {
                    label: "Telegram",
                    link: "https://t.me/Dybree",
                    type: "telegram"
                },
                {
                    label: "Email",
                    link: "mailto:miburoshinsengumi@gmail.com",
                    type: "email"
                },
                {
                    label: "LinkedIn",
                    link: "https://www.linkedin.com/in/bogdan-bogdanov-811b82159/",
                    type: "linkedin"
                }
            ]
        },
        scriptwriting: {
            navHeading: "Script Writing & Showrunning",
            navSubtext: "Film and television narratives",
            description: "As a scriptwriter and showrunner, I craft compelling narratives that resonate with audiences. My work spans various genres and formats, bringing fresh perspectives to storytelling. I collaborate closely with directors, producers, and creative teams to develop projects from concept to screen.",
            samples: [
                {
                    title: "Sample Script 1",
                    url: "https://example.com/sample1.pdf"
                },
                {
                    title: "Sample Script 2",
                    url: "https://example.com/sample2.pdf"
                },
                {
                    title: "Sample Script 3",
                    url: "https://example.com/sample3.pdf"
                }
            ],
            filmography: [
                {
                    title: "Project Title 1",
                    year: "2024",
                    role: "Showrunner / Head Writer",
                    description: "A brief description of the project, its genre, and your contribution. This is where you can highlight key achievements or notable aspects of the work."
                },
                {
                    title: "Project Title 2",
                    year: "2023",
                    role: "Writer / Co-Creator",
                    description: "Another project description. Include relevant details about the scope, audience, or any awards/recognition received."
                },
                {
                    title: "Project Title 3",
                    year: "2022",
                    role: "Script Writer",
                    description: "Describe your role and the project's significance. Mention any collaborations or unique challenges you overcame."
                }
                // Add more filmography entries as needed
            ]
        },
        gamedesign: {
            navHeading: "Game Narrative Design & Direction",
            navSubtext: "Interactive storytelling experiences",
            description: "In the realm of interactive storytelling, I design narrative experiences that engage players on multiple levels. As a narrative designer and game director, I create worlds, characters, and storylines that adapt to player choices while maintaining compelling dramatic arcs. My approach combines traditional storytelling with game design principles to deliver memorable interactive experiences.",
            projects: [
                {
                    title: "Game Project 1",
                    description: "A detailed description of your game project. Explain the narrative design approach, the story, characters, and how player choices affect the narrative. Mention the genre, platform, and any notable features.",
                    media: [
                        {
                            type: "video",
                            url: "https://example.com/video1.mp4",
                            thumbnail: "https://example.com/thumb1.jpg"
                        },
                        {
                            type: "image",
                            url: "https://example.com/screenshot1.jpg"
                        },
                        {
                            type: "image",
                            url: "https://example.com/screenshot2.jpg"
                        }
                    ]
                },
                {
                    title: "Game Project 2",
                    description: "Another game project description. Highlight your role as narrative designer or game director, the challenges you faced, and the creative solutions you implemented. Discuss the narrative structure and how it enhances gameplay.",
                    media: [
                        {
                            type: "image",
                            url: "https://example.com/screenshot3.jpg"
                        },
                        {
                            type: "video",
                            url: "https://example.com/video2.mp4",
                            thumbnail: "https://example.com/thumb2.jpg"
                        },
                        {
                            type: "image",
                            url: "https://example.com/screenshot4.jpg"
                        }
                    ]
                }
                // Add more projects as needed
            ]
        }
    },
    ru: {
        ui: {
            homeLabel: "Домой",
            langToggle: "English"
        },
        home: {
            title: "Богдан Богданов",
            description: "Сценарист. Шоураннер. Нарративный дизайнер. Креативный директор.\nПреподаю сценарное мастерство, дизайн и критическое мышление.",
            contact: [
                {
                    label: "Telegram",
                    link: "https://t.me/Dybree",
                    type: "telegram"
                },
                {
                    label: "Email",
                    link: "mailto:miburoshinsengumi@gmail.com",
                    type: "email"
                },
                {
                    label: "LinkedIn",
                    link: "https://www.linkedin.com/in/bogdan-bogdanov-811b82159/",
                    type: "linkedin"
                }
            ]
        },
        scriptwriting: {
            navHeading: "Сценарное мастерство и шоураннинг",
            navSubtext: "Кино и сериальные истории",
            description: "Как сценарист и шоураннер, я создаю истории, которые запоминаются аудитории. Работаю в разных жанрах и форматах, развиваю проекты от концепции до экрана вместе с командами режиссеров и продюсеров.",
            samples: [
                {
                    title: "Пример сценария 1",
                    url: "https://example.com/sample1.pdf"
                },
                {
                    title: "Пример сценария 2",
                    url: "https://example.com/sample2.pdf"
                },
                {
                    title: "Пример сценария 3",
                    url: "https://example.com/sample3.pdf"
                }
            ],
            filmography: [
                {
                    title: "Проект 1",
                    year: "2024",
                    role: "Шораннер / главный автор",
                    description: "Краткое описание проекта, его жанра и моего вклада. Здесь можно отметить основные достижения."
                },
                {
                    title: "Проект 2",
                    year: "2023",
                    role: "Автор / соавтор",
                    description: "Описание проекта, аудитории и ключевых особенностей. Можно добавить награды или фестивали."
                },
                {
                    title: "Проект 3",
                    year: "2022",
                    role: "Сценарист",
                    description: "Роль и значимость проекта. Укажите коллаборации или творческие задачи, которые удалось решить."
                }
                // Add more filmography entries as needed
            ]
        },
        gamedesign: {
            navHeading: "Нарративный дизайн и гейм-дирекшн",
            navSubtext: "Интерактивные истории",
            description: "Создаю игровые миры, персонажей и сюжеты, которые реагируют на выбор игрока и остаются драматически цельными. Соединяю драматургию и геймдизайн, чтобы дать игроку запоминающийся опыт.",
            projects: [
                {
                    title: "Игровой проект 1",
                    description: "Подробное описание игры: подход к нарративу, сюжет, персонажи и влияние выбора игрока. Укажите жанр, платформу и ключевые фичи.",
                    media: [
                        {
                            type: "video",
                            url: "https://example.com/video1.mp4",
                            thumbnail: "https://example.com/thumb1.jpg"
                        },
                        {
                            type: "image",
                            url: "https://example.com/screenshot1.jpg"
                        },
                        {
                            type: "image",
                            url: "https://example.com/screenshot2.jpg"
                        }
                    ]
                },
                {
                    title: "Игровой проект 2",
                    description: "Описание проекта: моя роль как нарративного дизайнера или геймдиректора, вызовы и решения, структура сюжета и её влияние на геймплей.",
                    media: [
                        {
                            type: "image",
                            url: "https://example.com/screenshot3.jpg"
                        },
                        {
                            type: "video",
                            url: "https://example.com/video2.mp4",
                            thumbnail: "https://example.com/thumb2.jpg"
                        },
                        {
                            type: "image",
                            url: "https://example.com/screenshot4.jpg"
                        }
                    ]
                }
                // Add more projects as needed
            ]
        }
    }
};

// ============================================
// END OF DATA SECTION
// ============================================

