// Tab Navigation
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const homeButton = document.getElementById('home-button');

    // Initialize content
    loadHomeContent();
    loadScriptwritingContent();
    loadGamedesignContent();
    loadNavigationContent();
    
    // Update home button visibility
    updateHomeButtonVisibility();

    // Home button click handler
    homeButton.addEventListener('click', () => {
        switchToTab('home');
    });

    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            switchToTab(targetTab);
        });
    });
    
    // Function to switch tabs
    function switchToTab(targetTab) {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to corresponding content
        document.getElementById(targetTab).classList.add('active');
        
        // If not home, add active to the clicked tab button
        if (targetTab !== 'home') {
            const clickedButton = document.querySelector(`[data-tab="${targetTab}"]`);
            if (clickedButton) {
                clickedButton.classList.add('active');
            }
        }
        
        // Update home button visibility
        updateHomeButtonVisibility();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Function to update home button visibility
    function updateHomeButtonVisibility() {
        const homeContent = document.getElementById('home');
        if (homeContent && homeContent.classList.contains('active')) {
            homeButton.style.display = 'none';
        } else {
            homeButton.style.display = 'block';
        }
    }
});

// Load Home Content
function loadHomeContent() {
    const data = portfolioData.home;
    
    document.getElementById('home-title').textContent = data.title;
    document.getElementById('home-description').textContent = data.description;
    
    // Contact info - render as dynamic list of anchors
    const contactDiv = document.getElementById('home-contact');
    contactDiv.innerHTML = '';
    
    if (data.contact && Array.isArray(data.contact) && data.contact.length > 0) {
        const contactList = document.createElement('ul');
        contactList.className = 'contact-list';
        
        data.contact.forEach(contactItem => {
            if (contactItem.link && contactItem.label) {
                const listItem = document.createElement('li');
                const contactLink = document.createElement('a');
                contactLink.href = contactItem.link;
                contactLink.textContent = contactItem.label;
                
                // Open external links in new tab (not mailto links)
                if (!contactItem.link.startsWith('mailto:')) {
                    contactLink.target = '_blank';
                }
                
                listItem.appendChild(contactLink);
                contactList.appendChild(listItem);
            }
        });
        
        contactDiv.appendChild(contactList);
    }
}

// Load Scriptwriting Content
function loadScriptwritingContent() {
    const data = portfolioData.scriptwriting;
    
    document.getElementById('scriptwriting-description').textContent = data.description;
    
    // Samples
    const samplesDiv = document.getElementById('scriptwriting-samples');
    samplesDiv.innerHTML = '';
    
    if (data.samples && data.samples.length > 0) {
        data.samples.forEach(sample => {
            const sampleLink = document.createElement('a');
            sampleLink.href = sample.url;
            sampleLink.className = 'sample-link';
            sampleLink.textContent = sample.title;
            sampleLink.target = '_blank';
            samplesDiv.appendChild(sampleLink);
        });
    }
    
    // Filmography
    const filmographyDiv = document.getElementById('filmography-list');
    filmographyDiv.innerHTML = '';
    
    if (data.filmography && data.filmography.length > 0) {
        data.filmography.forEach(film => {
            const filmItem = document.createElement('div');
            filmItem.className = 'filmography-item';
            
            filmItem.innerHTML = `
                <h3>${film.title}</h3>
                <span class="year">${film.year}</span>
                <div class="role">${film.role}</div>
                <div class="description">${film.description}</div>
            `;
            
            filmographyDiv.appendChild(filmItem);
        });
    }
}

// Load Gamedesign Content
function loadGamedesignContent() {
    const data = portfolioData.gamedesign;
    
    document.getElementById('gamedesign-description').textContent = data.description;
    
    // Samples
    const samplesDiv = document.getElementById('gamedesign-samples');
    samplesDiv.innerHTML = '';
    
    if (data.samples && data.samples.length > 0) {
        data.samples.forEach(sample => {
            const sampleLink = document.createElement('a');
            sampleLink.href = sample.url;
            sampleLink.className = 'sample-link';
            sampleLink.textContent = sample.title;
            sampleLink.target = '_blank';
            samplesDiv.appendChild(sampleLink);
        });
    }
    
    // Projects
    const projectsDiv = document.getElementById('projects-list');
    projectsDiv.innerHTML = '';
    
    if (data.projects && data.projects.length > 0) {
        data.projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            
            let mediaHTML = '';
            if (project.media && project.media.length > 0) {
                mediaHTML = '<div class="media-gallery">';
                project.media.forEach(media => {
                    if (media.type === 'video') {
                        mediaHTML += `
                            <div class="media-item">
                                <video controls>
                                    <source src="${media.url}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        `;
                    } else if (media.type === 'image') {
                        mediaHTML += `
                            <div class="media-item">
                                <img src="${media.url}" alt="${project.title} screenshot" loading="lazy">
                            </div>
                        `;
                    }
                });
                mediaHTML += '</div>';
            }
            
            projectItem.innerHTML = `
                <h3>${project.title}</h3>
                <div class="project-description">${project.description}</div>
                ${mediaHTML}
            `;
            
            projectsDiv.appendChild(projectItem);
        });
    }
}

// Load Navigation Content
function loadNavigationContent() {
    // Scriptwriting navigation
    const scriptwritingData = portfolioData.scriptwriting;
    if (scriptwritingData.navHeading) {
        document.getElementById('scriptwriting-heading').textContent = scriptwritingData.navHeading;
    }
    if (scriptwritingData.navSubtext) {
        document.getElementById('scriptwriting-subtext').textContent = scriptwritingData.navSubtext;
    }
    
    // Gamedesign navigation
    const gamedesignData = portfolioData.gamedesign;
    if (gamedesignData.navHeading) {
        document.getElementById('gamedesign-heading').textContent = gamedesignData.navHeading;
    }
    if (gamedesignData.navSubtext) {
        document.getElementById('gamedesign-subtext').textContent = gamedesignData.navSubtext;
    }
}

