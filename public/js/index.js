// ---------------------------------------- //
// -------------- Alert Popup ------------- //
// ---------------------------------------- //
const alertPopup = () => {
    // Get the banner and it's button
    let alertBanner = document.getElementById('alert-banner');
    let alertBannerBtn = document.getElementById('close-banner');
    
    // Remove banner on 'close' click
    alertBannerBtn.addEventListener('click', () => {
        alertBanner.classList.remove('active');
    });
};


// ---------------------------------------- //
// ------------- Navbar Toggle ------------ //
// ---------------------------------------- //
const navbarToggle = () => {
    // Get burger, header, navbar list contain and the links
    let burger = document.querySelector('.burger-container');
    let header = document.querySelector('.header');
    let navbarList =  document.querySelector('.nav-list-container');
    let navbarLinks = document.querySelectorAll('.navbar-link');

    // Burger onclick: active the elements
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        header.classList.toggle('active');
        navbarList.classList.toggle('active');
    });

    // Navbar links onclick: remove 'active' class
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.toggle('active');
            header.classList.toggle('active');
            navbarList.classList.toggle('active');
        });
    });
};


// ---------------------------------------- //
// ------------- Modal - Popup ------------ //
// ---------------------------------------- //
const activeModal = (obj) => {
    // Get modal
    let modal = document.getElementById('popup-modal');
    // Array to hold social media links
    let icons = [];

    // Get social media links
    obj.socials.forEach(icon => {
        let popupIcon = 
        `<a href="#">
            <img src="/assets/images/icons/${icon}-white.png" alt="">
        </a>`;
        icons.push(popupIcon);
    });
    
    let popup = 
    `<div class="frame">
        <div class="popup">
            <button class="close" title="Close"></button>
            <div class="profile">
                <img class="avatar" src="/assets/images/team/${obj.img}.png" alt="${obj.name}">
                <h3>${obj.name}</h3>
                <p>${obj.role}</p>
                <div class="icons">
                    ${icons.join('')}
                </div>
            </div>
            <div class="description">
                <p>${obj.description}</p>
            </div>
        </div>
    </div>`;

    // Add popup to modal
    modal.innerHTML = popup;
    // Active modal
    modal.classList.add('active');
    // Avoid scrolling when modal is open
    document.body.style.overflow = 'hidden';

    // Windows onclick (setTimeout 1s to avoid immediate closing)
    setTimeout(() => {
        window.addEventListener('click', (e) => {
            // Check for clicking outside of popup or close button
            let isOutside = e.target.closest('.modal .frame');
            let isClose = e.target.closest('.modal .close');
            if((isOutside && !e.target.closest('.popup')) || isClose) {
                // Clear modal, remove 'active' class, and set overflow to scroll again 
                modal.innerHTML = '';
                document.body.style.overflow = 'scroll';
                modal.classList.remove('active');
            }
        });
    }, 1000);
};


// ---------------------------------------- //
// ----------- Get Target Member ---------- //
// ---------------------------------------- //
const generateMemberProfile = (arr) => {
    // Get all team (founders and team) boxes
    let members = document.querySelectorAll('.team-groups .box');

    // For each member:
    members.forEach(element => {
        // Get the button (to open modal)
        let btn = element.querySelector('button');

        // Button onclick:
        btn.addEventListener('click', () => {
            // Get the data-member attribute to check for the member in the arr of objs
            let member = btn.getAttribute('data-member');

            arr.forEach(el => {
                el.members.forEach(mem => {
                    // Get the target member
                    if (member == mem.id) {
                        // Pass the member to the modal
                        activeModal(mem);
                    }
                });
            });
        });
    });
};


// ---------------------------------------- //
// --------------- Build Team ------------- //
// ---------------------------------------- //
const buildTeam = () => {
    // Declare team
    let teamObjects = [
        // Founders
        {
            category: 'founders',
            members: [
                {
                    id: 'member-1',
                    name: 'yannick v',
                    role: 'creative director',
                    socials: ['twitter', 'artstation'],
                    img: 'member1',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus debitis, id qui autem rerum natus pariatur nisi, distinctio quis sed similique dicta hic dolores accusantium voluptate, rem illum minima. Aliquid aliquam voluptate corporis dicta obcaecati sunt pariatur. Iure, qui natus repellat impedit quis aut eius soluta officiis non illo?',
                },
                {
                    id: 'member-2',
                    name: 'yannick v',
                    role: 'creative director',
                    socials: ['twitter', 'artstation'],
                    img: 'member1',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus debitis, id qui autem rerum natus pariatur nisi, distinctio quis sed similique dicta hic dolores accusantium voluptate, rem illum minima. Aliquid aliquam voluptate corporis dicta obcaecati sunt pariatur. Iure, qui natus repellat impedit quis aut eius soluta officiis non illo?',
                },
                {
                    id: 'member-3',
                    name: 'yannick v',
                    role: 'creative director',
                    socials: ['twitter', 'artstation'],
                    img: 'member1',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus debitis, id qui autem rerum natus pariatur nisi, distinctio quis sed similique dicta hic dolores accusantium voluptate, rem illum minima. Aliquid aliquam voluptate corporis dicta obcaecati sunt pariatur. Iure, qui natus repellat impedit quis aut eius soluta officiis non illo?',
                },
                {
                    id: 'member-4',
                    name: 'yannick v',
                    role: 'creative director',
                    socials: ['twitter', 'artstation'],
                    img: 'member1',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus debitis, id qui autem rerum natus pariatur nisi, distinctio quis sed similique dicta hic dolores accusantium voluptate, rem illum minima. Aliquid aliquam voluptate corporis dicta obcaecati sunt pariatur. Iure, qui natus repellat impedit quis aut eius soluta officiis non illo?',
                },
                {
                    id: 'member-5',
                    name: 'yannick v',
                    role: 'creative director',
                    socials: ['twitter', 'artstation'],
                    img: 'member1',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus debitis, id qui autem rerum natus pariatur nisi, distinctio quis sed similique dicta hic dolores accusantium voluptate, rem illum minima. Aliquid aliquam voluptate corporis dicta obcaecati sunt pariatur. Iure, qui natus repellat impedit quis aut eius soluta officiis non illo?',
                },
            ],
        },
        // Team
        {
            category: 'team',
            members: [
                {
                    id: 'member-6',
                    name: 'erick pires',
                    role: 'some text here',
                    socials: ['twitter'],
                    img: 'member1',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus debitis, id qui autem rerum natus pariatur nisi, distinctio quis sed similique dicta hic dolores accusantium voluptate, rem illum minima. Aliquid aliquam voluptate corporis dicta obcaecati sunt pariatur. Iure, qui natus repellat impedit quis aut eius soluta officiis non illo?',
                },
                {
                    id: 'member-7',
                    name: 'erick pires',
                    role: 'some text here',
                    socials: ['twitter'],
                    img: 'member1',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus debitis, id qui autem rerum natus pariatur nisi, distinctio quis sed similique dicta hic dolores accusantium voluptate, rem illum minima. Aliquid aliquam voluptate corporis dicta obcaecati sunt pariatur. Iure, qui natus repellat impedit quis aut eius soluta officiis non illo?',
                },
                {
                    id: 'member-8',
                    name: 'erick pires',
                    role: 'some text here',
                    socials: ['twitter'],
                    img: 'member1',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus debitis, id qui autem rerum natus pariatur nisi, distinctio quis sed similique dicta hic dolores accusantium voluptate, rem illum minima. Aliquid aliquam voluptate corporis dicta obcaecati sunt pariatur. Iure, qui natus repellat impedit quis aut eius soluta officiis non illo?',
                },
                {
                    id: 'member-9',
                    name: 'erick pires',
                    role: 'some text here',
                    socials: ['twitter'],
                    img: 'member1',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus debitis, id qui autem rerum natus pariatur nisi, distinctio quis sed similique dicta hic dolores accusantium voluptate, rem illum minima. Aliquid aliquam voluptate corporis dicta obcaecati sunt pariatur. Iure, qui natus repellat impedit quis aut eius soluta officiis non illo?',
                },
            ],
        },
    ];


    // For each group:
    teamObjects.forEach(group => {
        // Array to hold HTML output
        let output = [];

        // For each member
        group.members.forEach(member => {
            // Array to hold icons
            let icons = [];
            // Get social links
            member.socials.forEach(icon => {
                let socialLink = 
                `<a href="#">
                    <img src="/assets/images/icons/${icon}.png" alt="icon">
                </a>`;
                icons.push(socialLink);
            });
            
            // Generate box for each member
            let box = 
            `<div class="box">
                <div>
                    <div class="member-img-container">
                        <button data-member="${member.id}">
                            <img src="/assets/images/team/${member.img}.png" alt="Member Image">
                        </button>
                    </div>
                    <h4>${member.name}</h4>
                    <p>${member.role}</p>
                    <div class="icons">
                        ${icons.join('')}
                    </div>
                </div>
            </div>`;

            output.push(box);
        });        

        // Wrap each category
        let wrapper = 
        `<div class="${group.category}-wrapper groups">
            <h3>${group.category}</h3>
            <div class="wrapper">
                ${output.join('')}
            </div>
        </div>`;
        
        // Print categories to HTML 
        document.getElementById('team-groups').innerHTML += wrapper;
    });

    // Call active modal popup
    generateMemberProfile(teamObjects);
};


// ---------------------------------------- //
// -------------- Create FAQ -------------- //
// ---------------------------------------- //
const createFAQ = () => {
    // Array to hold HTML output (panels)
    let output = [];
    
    // Array of QA objects
    let questions = [
        {
            question: 'Lorem ipsum dolor sit amet.', 
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium ex rem aliquam facilis fuga atque repellendus itaque repellat pariatur!'
        },
        {
            question: 'Lorem ipsum dolor sit amet.', 
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium ex rem aliquam facilis fuga atque repellendus itaque repellat pariatur!'
        },
        {
            question: 'Lorem ipsum dolor sit amet.', 
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium ex rem aliquam facilis fuga atque repellendus itaque repellat pariatur!'
        },
        {
            question: 'Lorem ipsum dolor sit amet.', 
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium ex rem aliquam facilis fuga atque repellendus itaque repellat pariatur!'
        },
    ];

    // Create a panel for each QA
    questions.forEach(box => {
        let panel = 
        `<div class="panel">
            <button>
                <span class="question">${box.question}</span>
                <span class="icon">
                    <ion-icon name="add"></ion-icon>
                </span>
            </button>
            <p>${box.answer}</p>
        </div>`;

        // Push the panel to the output array
        output.push(panel);
    });

    // Print the output to the HTML
    document.getElementById('accordoin').innerHTML = output.join('');

    // RUN toggle accordion 
    accordionToggle();
};


// ---------------------------------------- //
// -------------- Toggle FAQ -------------- //
// ---------------------------------------- //
const accordionToggle = () => {
    // Get panels
    let panels = document.querySelectorAll('.panel');
    
    // For each panel:
    panels.forEach(panel => {
        // Get the button (question), p (answer), icon
        let btn = panel.querySelector('button');
        let answer = panel.querySelector('p');
        let icon = panel.querySelector('ion-icon');

        // Button onclick:
        btn.addEventListener('click', () => {
            // Toggle the 'answer' state
            answer.classList.toggle('active');
            // Change icon
            icon.getAttribute('name') == 'add' ? icon.setAttribute('name', 'remove') : icon.setAttribute('name', 'add');
        });
    });
};


// ---------------------------------------- //
// ----------- Generate Sliders ----------- //
// ---------------------------------------- //
const generateSliders = (arr, folder, target, format) => {
    // Array to hold images
    let images = [];
    // Array to hold HTML output
    let output = [];
    
    // Generate an image for each object
    arr.forEach(el => {
        images.push(
            `<img alt="${el.name}" src="/assets/images/${folder}/${el.name}.${format}">`
        );
    });

    // Duplicate sliders (Check HTML & SCSS)
    for(let i = 0; i < 2; i++) {
        let div = 
        `<div>${images.join('')}</div>`;
        output.push(div)
    }

    // Print output to HTML
    target.innerHTML = output.join('');
};


// ---------------------------------------- //
// ----------- Generate Sliders ----------- //
// ---------------------------------------- //
const slidersObjs = () => {
    // Get targets
    let brandsContainer = document.getElementById('brands-slider');
    let teasersContainer = document.getElementById('teasers-slider');

    // Array of brands objects
    let brands = [
        {name: 'illuvium'},
        {name: 'paramount'},
        {name: 'netflix'},
        {name: 'taufilms'},
        {name: 'axisstudios'},
        {name: 'sony'},
        {name: 'canal'},
        {name: 'ilion'},
        {name: 'illumination'},
        {name: 'imageworks'},
        {name: 'mikros'},
        {name: 'nwave'},
        {name: 'skydance'},
    ];

    // (arr, folder, target, format)
    generateSliders(brands, 'companies', brandsContainer, 'png');
};


// ---------------------------------------- //
// ----------- Generate Roadmap ----------- //
// ---------------------------------------- //
const buildRoadmap = () => {
    // Get roadmap grid element
    let roadmapGrid = document.getElementById('roadmap-grid');
    // Array to hold HTML output
    let output = [];

    // Array of road objects
    let roadmap = [
        {
            id: 1, 
            title: 'OUR VISION',
            section: [
                {
                    text: ['Create the biggest home in the metaverse for dreamers, animal lovers, designers, entrepreneurs and individuals backed by the technology of Web3 and decentralization.'],
                },
                {
                    sectionTitle: 'PRINCIPLES:',
                    text: ['If we want to go somewhere, We have to put our community first, Strong Community = Strong AniHOPE, We will always move as one unit and one family. together, we will build that and have one of the strongest communites in the space.'],
                },
                {
                    sectionTitle: 'ART:',
                    text: ['Genesis collection will be one of many art collections to come under the name "AniHOPE". We will keep delivering high quality art, crafred by the hands of passionate great artists to conquere the metaverse.'],
                }
            ],
        },
        {
            id: 2, 
            title: 'COLLECTION',
            section: [
                {
                    text: [
                        'There will be 8,192 unique 3D pieces of digital art which will have the same best work of the team, covering the small details of the Anihope Cats, from the fur to the eyes to the expressions which will be released into the Metaverse.',
                        'As a team with 10+ years experience in the 3d art, working for the biggest names in the indusrty as Netflix, Sony and Illuvium (to name a few), It\'s our duty to deliver the highest quality and detailed art possible to our community.'
                    ],
                },
                {
                    text: [
                        'The whole collection will be fully-rigged and Metaverse ready.', 
                        'Are YOU ready to be your very own AniHOPE in the ANIverse?'
                    ],
                }
            ],
        },
        {
            id: 3, 
            title: 'GIVING BACK',
            section: [
                {
                    text: [
                        'Since we as a team are all animal lovers, We will be giving back $80,000 to the cats and animals shelters and charities.',
                        'These funds will help feeding and improve the lives of the animals without a loving home (And maybe even find one for them).',
                        'Shelters will be chosen by the community.'
                    ],
                }
            ],
        },
        {
            id: 4, 
            title: 'ANIverse',
            section: [
                {
                    text: [
                        'Our very own Metaverse is called the ANIverse, Which is currently where we spend our time: Discord, Twitter and Socials.',
                        'We will take step up from here for the community, We will be the fusion between the Physical and Digital Verse.',
                        'Where we implement the assets of the physical world into the metaverse and vice versa.'
                    ],
                },
                {
                    sectionTitle: '3D Character:',
                    text: [
                        'We are looking into various metaverse platforms to create our own ANIverse to be able to bring you a mesmerizing experience into it as AniHOPE members.',
                        'Since our pieces are 100% rigged with facial expressions supported, it will not be a hard task for us to execute our vision for the future of the community.'
                    ]
                }
            ],
        },
        {
            id: 5, 
            title: 'IRL',
            section: [
                {
                    sectionTitle: 'Collectibles:',
                    text: ['Figurines, Toys and Phyiscal Collectibles.']
                },
                {
                    sectionTitle: 'Merchendise:',
                    text: ['Exclusive merchandise for the members of the AniHOPE club will be available soon.']
                },
                {
                    sectionTitle: 'IRL Events:',
                    text: ['Events, Festivals and Meet-ups to be able to expand and get to know each other even beyond the digital world.']
                },
            ]
        },
        {
            id: 6, 
            title: 'More Animals<br />to join the <br />AniHOPE',
            section: [
                {
                    text: [
                        'After showing our sneak-peeks of the Genesis collection, More animals will be joining the party with the same standards of the ANIHOPE team.',
                        'This will only be the begninning of what yet to come.'
                    ]
                }
            ]
        },
        {
            id: 7, 
            title: 'More is yet to come',
            section: [
                {
                    text: [
                        'We are exploring tons of different ways to utilize and give back to the community such as Partnerships, Gift Boxes, Staking, DAO etc...',
                        'As a collective, we will be hearing from you so we all can be the directors of the future of AniHOPE.'
                    ]
                },
                {
                    sectionTitle: 'Leave your idea:',
                    isForm: true
                }
            ]
        },
    ];

    // For each step
    roadmap.forEach((block, idx) => {
        // Array to hold every section (heading if there, and the paragraphs)
        let sections = [];
        // Contact form 
        let form = 
        `<form class="contact-form">
            <div class="form-block">
                <label for="user-email">E-mail address:</label>
                <input id="user-email" name="user-email" type="email" />
            </div>
            <div class="form-block">
                <label for="user-message">Your awesome idea:</label>
                <textarea id="user-message"></textarea>
            </div>
            <div class="form-block">
                <input type="submit" id="submit-btn" value="Send" />
            </div>
        </form>`;

        // For each section
        block.section.forEach(section => {
            // Array to hold the text
            let text = [];
            // If section title found, wrap it in h5
            section.sectionTitle ? text.push('<h5 class="main-title">' + section.sectionTitle +'</h5>') : '';
            // If text found:
            if(section.text) {
                // Wrap every sentence in a paragraph
                section.text.forEach(element => {
                    let p = `<p>${element}</p>`;
                    text.push(p);
                });
            }

            // Wrap each section in a div contains the text (and form if found)  
            let stepContent = 
            `<div class="block-text-section">
                ${section.text ? text.join('') : ''}
                ${section.isForm ? form : ''}
            </div>`;
            // Push the content to the sections array
            sections.push(stepContent);
        });

        // Push the content in a the output array as a block contains each step as bellow:
        /*
            Title
            Text (contains headings and paragraphs)
            Image
            Close button
        */
        output.push(
            `<div class="block">
                <div class="block-content">
                    <div class="block-title-wrapper">
                        <h4>
                            <span class="block-title-idx">${idx+1}</span>
                            <span class="block-title main-title">${block.title}</span>
                        </h4>
                    </div>
                    <div class="block-text-wrapper">
                        ${sections.join('')}
                    </div>
                    <div class="block-img-wrapper">
                        <img alt="${block.title}" src="/assets/images/roadmap/block-${idx+1}.png" />
                    </div>
                    <button class="close"></button>
                </div>
            </div>`
        );
    });

    // Print the output to the DOM
    roadmapGrid.innerHTML = output.join('');
    // Run the toggle roadmap blocks function
    toggleRoadmap();
};


// ---------------------------------------- //
// ------------- Toggle Roadmap ----------- //
// ---------------------------------------- //
const toggleRoadmap = () => {
    // Get the roadmap and the blocks
    let roadmap = document.getElementById('roadmap-grid');
    let blocks = roadmap.querySelectorAll('.block');

    // For each block:
    blocks.forEach(block => {
        // Get the content
        let content = block.querySelector('.block-content');
        
        // Active the clicked content
        content.addEventListener('click', () => {
            block.classList.add('active');
        });

        setTimeout(() => {
            // Window onclick:
            window.addEventListener('click', (e) => {
                // Get the close button
                let isClose = content.querySelector('.close');
                // If clicked on the close button or outside of the active block content then:
                if(e.target == isClose || !e.target.closest('.block-content')) {
                    // Deactivate it
                    block.classList.remove('active');
                }
                // If the block contains the 'active' class, increase z-index for clean overlap
                if(block.classList.contains('active')) {
                    block.style.setProperty('z-index', '9', 'important');
                } else {
                    block.style.zIndex = '1';
                }
            });
        }, 1000);
    });

};
 

// ---------------------------------------- //
// ------------ Print Copyright ----------- //
// ---------------------------------------- //
const printCurrentYear = () => {
    // Print current year to copyright
    document.getElementById('current-year').innerHTML = new Date().getFullYear();
};


// ######################################### //
// ################ RUN ALL ################ //
// ######################################### //
const runAll = () => {
    // alertPopup();
    navbarToggle();
    slidersObjs();
    buildRoadmap();
    buildTeam();
    createFAQ();
    printCurrentYear();
};

runAll();
