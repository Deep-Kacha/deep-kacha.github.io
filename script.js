// Resume Data
const resumeData = {
    hero: {
        name: "Deep Kacha",
        roles: [
            "Web Developer",
            "MERN Stack Developer",
            ".NET Developer",
            "Tech Enthusiast",
            "Software Craftsman",
            "AI-Powered Web Developer"
        ],
        tagline: "Crafting maintainable software solutions with modern web technologies. Passionate about problem-solving, clean code, and creating scalable applications."
    },
    about: {
        description: "Entry-level professional with practical experience in developing maintainable software solutions. Adept at problem-solving, debugging, and creating modular, scalable applications. Strong understanding of development best practices, code quality, and collaboration. Committed to contributing value while continuously improving technical skills.",
        highlights: [
            "B.Tech in Computer Engineering (CGPA: 7.63)",
            "3+ Hackathon participations including IIT Gandhinagar",
            "Certified in JavaScript and Python programming",
            "Expertise in Full-Stack Web Development"
        ]
    },
    skills: [
        { name: "React", icon: "devicon-react-original colored", level: 90 },
        { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 90 },
        { name: "HTML5", icon: "devicon-html5-plain colored", level: 95 },
        { name: "CSS3", icon: "devicon-css3-plain colored", level: 95 },
        { name: "Node.js", icon: "devicon-nodejs-plain colored", level: 80 },
        { name: "Express", icon: "devicon-express-original", level: 80 },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: 85 },
        { name: "MySQL", icon: "devicon-mysql-plain colored", level: 85 },
        { name: "Git", icon: "devicon-git-plain colored", level: 88 },
        { name: "GitHub", icon: "devicon-github-original", level: 88 },
        { name: "Flutter", icon: "devicon-flutter-plain colored", level: 82 },
        { name: "Dart", icon: "devicon-dart-plain colored", level: 82 },
        { name: "Firebase", icon: "devicon-firebase-plain colored", level: 85 },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", level: 85 },
        { name: ".NET", icon: "devicon-dot-net-plain-wordmark colored", level: 80 },
        { name: "C#", icon: "devicon-csharp-plain colored", level: 80 }
    ],
    projects: [
        {
            title: "Campus Drive Portal (Built For RK University)",
            role: "PERN Stack and .NET Development",
            description: "A comprehensive platform built for RK University to streamline and manage campus placement drives. Due to specific technology dependencies, this project was architected across two distinct tech stacks: a traditional .NET stack and a modern PERN stack (PostgreSQL, Express, React, Node.js).",
            tech: ["React", "Node.js", "Express", "PostgreSQL", "C#", "ASP.NET MVC", "SQL Server"],
            year: "2025",
            github: "https://github.com/Deep-Kacha/TrainingAndPlacementPortal_React"
        },
        {
            title: "Trackeoo (Placement - Internship Tracker)",
            role: ".NET Development",
            description: "Trackeoo is a student internship and placement tracking system that simplifies monitoring, reporting, and record management. It helps institutions manage student progress, placement activities, and internship data through organized workflows and user-friendly administrative tools.",
            tech: ["C#", "ASP.NET Web Forms", "SQL Server", "HTML", "CSS"],
            year: "2024",
            github: "https://github.com/Deep-Kacha/Trackeoo"
        },
        {
            title: "Express Car",
            role: "App Development",
            description: "Express Car is a cross-platform car rental mobile application built with Flutter and Dart, featuring a responsive and modular user interface. It integrates Firebase Authentication and Realtime Database to provide secure user management, seamless vehicle booking, real-time updates, and an efficient rental experience for customers and administrators.",
            tech: ["Flutter", "Dart", "Firebase", "Google Auth"],
            year: "2025",
            github: "https://github.com/Deep-Kacha/Car-Rent-App"
        },
        {
            title: "Cook-Book",
            role: "Full Stack Development",
            description: "Built a full-stack recipe platform with user authentication and CRUD operations. Implemented category-wise recipe management with secure database integration and applied input validation for enhanced security.",
            tech: ["PHP", "MySQL", "HTML", "CSS", "AJAX"],
            year: "2024",
            github: "https://github.com/Deep-Kacha/Cook-Book"
        },
        {
            title: "GitHub User Finder",
            role: "Frontend Development",
            description: "Created a GitHub profile search tool using GitHub REST API and JavaScript with async/await for real-time data fetching. Implemented dynamic DOM updates, responsive UI design, and error handling to deliver a seamless and interactive user profile exploration experience.",
            tech: ["JavaScript", "REST API", "HTML", "CSS"],
            year: "2024",
            github: "https://github.com/Deep-Kacha/Github-User-Finder",
            live: "https://deep-kacha.github.io/Github-User-Finder/"
        }
    ],
    education: [
        { degree: "B.Tech in Computer Engineering", school: "RK University, Rajkot", year: "2023 - Present", details: "CGPA: 7.63 • Focus on Software Development & Web Technologies" },
        { degree: "12th Grade (GSEB)", school: "Shree Shubham School", year: "2022 - 2023", details: "Percentile: 66.67" },
        { degree: "10th Grade (GSEB)", school: "Shree Palav Vidhya Dham", year: "2020 - 2021", details: "Percentile: 98.06 • Distinction" }
    ],
    certifications: [
        { degree: "The Complete JavaScript Developer", school: "Udemy", year: "Jan 2026", details: "Learn Modern JavaScript (ES6+) • Advanced Concepts" },
        { degree: "The Joy of Computing Using Python", school: "NPTEL (Elite)", year: "Jan-Apr 2025", details: "Elite Certification • Python Programming" }
    ],
    hackathons: [
        { degree: "CodeMind AI Hackathon", school: "RK University", year: "July 2026", details: "Participated and showcased innovative AI solutions" },
        { degree: "CONVERSANTECH", school: "Darshan University", year: "July 2025", details: "Participated in innovation-focused hackathon" },
        { degree: "SOCIOHACK", school: "IIT Gandhinagar", year: "Feb 2025", details: "Social impact hackathon participation" },
        { degree: "TECHNOPLANET / IDEATHON", school: "RK University", year: "Feb 2024", details: "Innovation and ideation competition" }
    ],
    contact: {
        email: "deepnkacha2256@gmail.com",
        phone: "+91 93741 80975",
        location: "Rajkot, Gujarat, India"
    }
};

// Three.js Variables
let scene, camera, renderer, particles, meshes = [];
let mouseX = 0, mouseY = 0, lenis;

// Three.js Setup
function initThreeJS() {
    const canvas = document.getElementById('webgl-canvas');
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 10, 50);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    createParticles();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00ffff, 1, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0088ff, 1, 50);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onMouseMove);

    animate();
}





function createParticles() {
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 6000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [new THREE.Color(0x00ffff), new THREE.Color(0x0088ff), new THREE.Color(0x3bdec5), new THREE.Color(0x00ffff)];

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 50;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.02,
        transparent: true,
        opacity: 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
}

function onMouseMove(e) {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    meshes.forEach((mesh, i) => {
        if (i === meshes.length - 1) return;
        mesh.rotation.x += 0.005 * (i + 1);
        mesh.rotation.y += 0.008 * (i + 1);
        mesh.rotation.z += 0.003 * (i + 1);
    });

    if (particles) particles.rotation.y += 0.0005;

    // Color Animation for Lights
    const time = Date.now() * 0.001;
    scene.children.forEach(child => {
        if (child.isPointLight) {
            const hue = (Math.sin(time * 0.5) + 1) * 0.5; // Oscillate hue
            child.color.setHSL(hue, 0.8, 0.5);
        }
    });

    // Animate Large Sphere (Last mesh)
    const sphere = meshes[meshes.length - 1];
    if (sphere) {
        sphere.rotation.x -= 0.002;
        sphere.rotation.y -= 0.002;
        sphere.scale.setScalar(1 + Math.sin(time * 0.5) * 0.05); // Pulse effect
    }

    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

function updateThreeTheme(isLight) {
    const bgColor = isLight ? 0xf1f5f9 : 0x000000;

    scene.fog.color.setHex(bgColor);
    scene.fog.density = isLight ? 0.01 : 0.02;

    const darkColors = [0x00ffff, 0x0088ff, 0x3bdec5, 0x00ffff];
    const lightColors = [0x2563eb, 0x4f46e5, 0x0d9488, 0xdb2777];
    const activeColors = isLight ? lightColors : darkColors;

    if (particles) {
        const colors = particles.geometry.attributes.color.array;
        const palette = activeColors.map(c => new THREE.Color(c));

        for (let i = 0; i < particles.geometry.attributes.position.count; i++) {
            const color = palette[i % palette.length];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        particles.geometry.attributes.color.needsUpdate = true;
        particles.material.blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending;
        particles.material.opacity = isLight ? 0.6 : 0.8;
        particles.material.needsUpdate = true;
    }

    meshes.forEach((mesh, i) => {
        if (mesh.type === 'Group') {
            // This is the glassy DK element
            mesh.children.forEach(child => {
                child.material.color.setHex(isLight ? 0x2563eb : 0x00ffff);
                child.material.transmission = isLight ? 0.8 : 0.9;
                child.material.opacity = 1;
            });
        } else {
            mesh.material.color.setHex(activeColors[i % activeColors.length]);
            mesh.material.opacity = isLight ? 0.6 : 0.6;
        }
        if (mesh.material) mesh.material.needsUpdate = true;
    });
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    if (!cursor || !follower) return;

    // Disable custom cursor on touch devices (mobile/tablet)
    if (window.matchMedia("(pointer: coarse)").matches) {
        cursor.style.display = 'none';
        follower.style.display = 'none';
        return;
    }

    let cursorX = 0, cursorY = 0, followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
    });

    function animateCursor() {
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        followerX += (cursorX - followerX) * 0.1;
        followerY += (cursorY - followerY) * 0.1;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll('a, button, .project-card, .skill-card, .sidebar-icon, .floating-sidebar-right').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.pill-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                lenis ? lenis.scrollTo(targetSection, {
                    duration: 1.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }) : targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    document.querySelectorAll('.hero-cta a').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                lenis ? lenis.scrollTo(targetSection) : targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
                });
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.section, .mega-contact-section').forEach(section => observer.observe(section));

    // Resume Download + Open New Tab Logic
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', async (e) => {
            e.preventDefault();

            // 1. Open the PDF in a new tab for viewing
            window.open(resumeBtn.href, '_blank');

            // 2. Force the download using Blob (prevents current tab from navigating)
            try {
                const response = await fetch(resumeBtn.href);
                const blob = await response.blob();
                const blobUrl = window.URL.createObjectURL(blob);

                const link = document.createElement('a');
                link.href = blobUrl;
                link.download = 'Deep_Kacha_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                setTimeout(() => window.URL.revokeObjectURL(blobUrl), 100);
            } catch (err) {
                console.error("Blob download failed (likely CORS or local file:// limit).", err);
                // We won't fallback to a standard link click here because that navigates the current tab.
            }
        });
    }
}

// Render Functions
function renderHero() {
    document.querySelector('.hero-title').textContent = resumeData.hero.name;
    document.querySelector('.hero-tagline').textContent = resumeData.hero.tagline;
    initTypewriter();
}

function initTypewriter() {
    const subtitleElement = document.querySelector('.hero-subtitle');
    const roles = resumeData.hero.roles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        let displayText = currentRole.substring(0, charIndex);

        // Add a simple blinking cursor effect and color gradient wrapper
        subtitleElement.innerHTML = '<span class="typewriter-text">' + displayText + '</span><span style="border-right: 0.15em solid #46c3d9; padding-right: 2px; animation: blink-cursor 0.75s step-end infinite;"></span>';

        let typingSpeed = isDeleting ? 40 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before typing next word
        }

        // Randomize typing speed slightly for realism
        if (!isDeleting && charIndex !== currentRole.length) {
            typingSpeed += Math.random() * 50;
        }

        setTimeout(type, typingSpeed);
    }

    // Add CSS for blinking cursor and text gradient if not already present
    if (!document.getElementById('typewriter-style')) {
        const style = document.createElement('style');
        style.id = 'typewriter-style';
        style.innerHTML = `
            .typewriter-text {
                background: linear-gradient(90deg, #54a8fb, #46c3d9, #3bdec5);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                color: transparent;
                font-weight: bold;
            }
            @keyframes blink-cursor {
                from, to { border-color: transparent }
                50% { border-color: #46c3d9; }
            }
        `;
        document.head.appendChild(style);
    }

    type();
}

function renderAbout() {
    document.querySelector('.about-description').textContent = resumeData.about.description;
    const highlights = document.querySelector('.about-highlights');
    let html = '';
    resumeData.about.highlights.forEach(h => {
        html += `<div class="highlight-item"><div class="highlight-icon"></div><span>${h}</span></div>`;
    });
    highlights.innerHTML = html;
}

function renderSkills() {
    const grid = document.querySelector('.skills-grid');
    let html = '';
    resumeData.skills.forEach((skill, i) => {
        html += `
            <div class="skill-card small-card" style="animation-delay: ${i * 0.05}s">
                <i class="${skill.icon} skill-logo"></i>
                <div class="skill-name">${skill.name}</div>
            </div>`;
    });
    grid.innerHTML = html;
}

function renderProjects() {
    const grid = document.querySelector('.projects-grid');
    let html = '';
    resumeData.projects.forEach((p, i) => {
        const techTags = p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
        html += `
            <div class="project-card" style="animation-delay: ${i * 0.1}s">
                <div class="project-header">
                    <div><h3 class="project-title">${p.title}</h3><p class="project-role">${p.role}</p></div>
                    <span class="project-year">${p.year}</span>
                </div>
                <p class="project-description">${p.description}</p>
                <div class="project-tech">${techTags}</div>
                <div class="project-footer">
                    <a href="${p.github}" target="_blank" class="project-link" aria-label="View Source on GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    ${p.live ? `
                    <a href="${p.live}" target="_blank" class="project-link live-link" aria-label="Live Demo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        <span>Live Demo</span>
                    </a>` : ''}
                </div>
            </div>`;
    });
    grid.innerHTML = html;
}

function renderEducation() {
    const timeline = document.getElementById('education-list');
    let html = '';
    resumeData.education.forEach((item, i) => {
        html += `
            <div class="education-item" style="animation-delay: ${i * 0.1}s">
                <div class="education-header">
                    <div>
                        <h3 class="education-degree">${item.degree}</h3>
                        <p class="education-school">${item.school}</p>
                    </div>
                    <span class="education-year">${item.year}</span>
                </div>
                <p class="education-details">${item.details}</p>
            </div>`;
    });
    timeline.innerHTML = html;
}

function renderCertifications() {
    const certTimeline = document.getElementById('certifications-list');
    let htmlCert = '';
    resumeData.certifications.forEach((item, i) => {
        htmlCert += `
            <div class="education-item" style="animation-delay: ${i * 0.1}s">
                <div class="education-header">
                    <div>
                        <h3 class="education-degree">${item.degree}</h3>
                        <p class="education-school">${item.school}</p>
                    </div>
                    <span class="education-year">${item.year}</span>
                </div>
                <p class="education-details">${item.details}</p>
            </div>`;
    });
    certTimeline.innerHTML = htmlCert;

    const hackTimeline = document.getElementById('hackathons-list');
    let htmlHack = '';
    resumeData.hackathons.forEach((item, i) => {
        htmlHack += `
            <div class="education-item" style="animation-delay: ${i * 0.1}s">
                <div class="education-header">
                    <div>
                        <h3 class="education-degree">${item.degree}</h3>
                        <p class="education-school">${item.school}</p>
                    </div>
                    <span class="education-year">${item.year}</span>
                </div>
                <p class="education-details">${item.details}</p>
            </div>`;
    });
    hackTimeline.innerHTML = htmlHack;
}

function renderContact() {
    // Deprecated
}

// GSAP Animations
function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.hero-content', {
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
        y: 150, opacity: 0.5, ease: 'none'
    });

    ['.hero-title', '.hero-subtitle', '.hero-tagline', '.hero-cta'].forEach((sel, i) => {
        gsap.to(sel, { opacity: 1, y: 0, duration: 1, delay: 0.2 + i * 0.2, ease: 'power3.out' });
    });

    gsap.fromTo('.scroll-indicator', { y: 20, opacity: 0 }, { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'power3.out' });

    const scrollConfig = { start: 'top 70%', end: 'bottom 20%', toggleActions: 'play none none reverse' };

    gsap.to('.about-text', { scrollTrigger: { trigger: '.about-section', ...scrollConfig }, opacity: 1, x: 0, duration: 1, ease: 'power3.out' });
    gsap.to('.about-stats', { scrollTrigger: { trigger: '.about-section', ...scrollConfig }, opacity: 1, x: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
    gsap.to('.skill-card', { scrollTrigger: { trigger: '.skills-section', ...scrollConfig }, opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' });
    gsap.to('.project-card', { scrollTrigger: { trigger: '.projects-section', ...scrollConfig }, opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' });
    gsap.to('.education-section .education-item', { scrollTrigger: { trigger: '.education-section', ...scrollConfig }, opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' });
    gsap.to('.certifications-section .education-item', { scrollTrigger: { trigger: '.certifications-section', ...scrollConfig }, opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' });

    gsap.fromTo('.mega-heading',
        { scale: 0.9, opacity: 0 },
        { scrollTrigger: { trigger: '.mega-contact-section', ...scrollConfig }, scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Premium Text Reveal for Section Titles
    document.querySelectorAll('.section-title').forEach(title => {
        gsap.fromTo(title,
            {
                clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
                y: 40,
                opacity: 0
            },
            {
                clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

function animateSkillBars() {
    // Deprecated
}

// Contact Form
function initContactForm() {
    const modal = document.getElementById('contact-modal');
    const openBtn = document.getElementById('open-contact-modal');
    const closeBtn = document.getElementById('close-contact-modal');
    const overlay = document.getElementById('modal-overlay');
    const form = document.getElementById('contact-form-ajax');
    const formView = document.getElementById('modal-form-view');
    const successView = document.getElementById('modal-success-view');
    const submitBtn = document.getElementById('modal-submit-btn');
    const submitText = document.getElementById('submit-text');
    const submitSpinner = document.getElementById('submit-spinner');
    const backToTop = document.querySelector('.back-to-top');

    if (!modal || !openBtn || !closeBtn || !overlay) return;

    const openModal = () => {
        formView.style.display = 'block';
        successView.style.display = 'none';
        if (form) form.reset();
        if (submitText) { submitText.textContent = 'SEND MESSAGE'; submitText.style.display = 'inline'; }
        if (submitSpinner) submitSpinner.style.display = 'none';
        if (submitBtn) submitBtn.disabled = false;
        // Compensate for scrollbar width to prevent layout shift
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.setProperty('--scrollbar-width', scrollbarWidth + 'px');
        document.body.classList.add('modal-open');
        modal.classList.add('active');
        if (backToTop) backToTop.style.visibility = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        document.documentElement.style.removeProperty('--scrollbar-width');
        if (backToTop) backToTop.style.visibility = '';
    };

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    if (!form) return;
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('field-name').value.trim();
        const email = document.getElementById('field-email').value.trim();
        const topic = document.getElementById('field-topic').value.trim();
        const message = document.getElementById('field-message').value.trim();
        const errorMsg = document.getElementById('form-error-msg');

        // JS Validation
        if (!name || !email || !topic || !message) {
            errorMsg.textContent = 'Please fill out all fields.';
            errorMsg.style.display = 'block';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMsg.textContent = 'Please enter a valid email address.';
            errorMsg.style.display = 'block';
            return;
        }

        errorMsg.style.display = 'none';
        submitBtn.disabled = true;
        submitText.style.display = 'none';
        submitSpinner.style.display = 'inline';

        const honey = form.querySelector('input[name="_honey"]').value;
        if (honey) return; // Bot detected

        try {
            const response = await fetch('https://formsubmit.co/ajax/deepnkacha2256@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Name: name,
                    Email: email,
                    Subject: topic,
                    Message: message,
                    _subject: `New Message from Portfolio: ${topic}`,
                    _captcha: "false",
                    _honey: honey,
                    _template: "table"
                })
            });

            if (response.ok) {
                const result = await response.json();
                formView.style.display = 'none';
                successView.style.display = 'block';
                form.reset();
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Submission failed');
            }
        } catch (error) {
            console.error('FormSubmit Error:', error);
            errorMsg.textContent = 'Oops! There was a problem. Please try again or email me directly.';
            errorMsg.style.display = 'block';
            submitText.textContent = 'RETRY';
            submitText.style.display = 'inline';
            submitSpinner.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
}

// Magnetic Button Effect
function initMagneticButtons() {
    // Skip on touch devices to prevent stuck states
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const magnets = document.querySelectorAll('.btn, .pill-link, .resume-download, .footer-icon-btn, .mouse, .sidebar-icon, .floating-sidebar-right');

    magnets.forEach(magnet => {
        magnet.addEventListener('mousemove', (e) => {
            const rect = magnet.getBoundingClientRect();
            // Calculate distance from center
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Apply subtle pull effect using GSAP
            gsap.to(magnet, {
                x: x * 0.35,
                y: y * 0.35,
                duration: 0.3,
                ease: 'power2.out'
            });

            // Optionally, add a slight glow to the cursor follower
            const follower = document.querySelector('.cursor-follower');
            if (follower) {
                follower.style.borderColor = '#60a5fa';
                follower.style.boxShadow = '0 0 15px rgba(96, 165, 250, 0.5)';
            }
        });

        magnet.addEventListener('mouseleave', () => {
            // Snap back elastically
            gsap.to(magnet, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'elastic.out(1, 0.3)'
            });

            const follower = document.querySelector('.cursor-follower');
            if (follower) {
                follower.style.borderColor = 'var(--color-text)';
                follower.style.boxShadow = 'none';
            }
        });
    });
}

// 3D Tilt Effect
function init3DTilt() {
    // Disable 3D tilt on touch devices to prevent stuck states
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.querySelectorAll('.project-card, .skill-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const centerX = rect.width / 2, centerY = rect.height / 2;
            const rotateX = (y - centerY) / 30, rotateY = (centerX - x) / 30;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });
}

// Other Features
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    const text = document.querySelector('.loader-text');
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress > 100) progress = 100;
        text.textContent = progress + '%';

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => preloader.style.display = 'none', 1500);
            }, 500);
        }
    }, 150);
}

function initThemeToggle() {
    const btn = document.querySelector('.theme-toggle');
    const sun = document.querySelector('.sun-icon');
    const moon = document.querySelector('.moon-icon');

    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        sun.style.display = 'none';
        moon.style.display = 'block';
        setTimeout(() => updateThreeTheme(true), 100);
    } else {
        setTimeout(() => updateThreeTheme(false), 100);
    }

    btn?.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-theme');
        sun.style.display = isLight ? 'none' : 'block';
        moon.style.display = isLight ? 'block' : 'none';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateThreeTheme(isLight);
    });
}

function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    });

    btn?.addEventListener('click', (e) => {
        e.preventDefault();
        lenis ? lenis.scrollTo('#hero') : window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
        const target = document.getElementById('about');
        lenis ? lenis.scrollTo(target) : target.scrollIntoView({ behavior: 'smooth' });
    });
}

function initSmoothScroll() {
    lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });

    const header = document.querySelector('.top-header');
    const scrollProgress = document.querySelector('.scroll-progress');

    lenis.on('scroll', ({ scroll, progress }) => {
        header.classList.toggle('scrolled', scroll > 80);
        if (scene) scene.rotation.y = scroll * 0.0005;

        // Update Scroll Progress Bar
        if (scrollProgress) {
            scrollProgress.style.width = (progress * 100) + '%';
        }
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
}

function initClock() {
    const clock = document.getElementById('clock');
    function update() {
        clock.textContent = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    update();
    setInterval(update, 1000);
}

function animateHeader() {
    gsap.fromTo('.top-header',
        { y: -60, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.4
        }
    );

    // Animate header elements sequentially
    gsap.fromTo('.profile-pic',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 0.8 }
    );

    gsap.fromTo('.location',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.9 }
    );

    gsap.fromTo('.pill-link',
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 1 }
    );

    gsap.fromTo('.header-clock',
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 1.2 }
    );

    gsap.fromTo('.resume-download',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 1.3 }
    );

    gsap.fromTo('.theme-toggle',
        { scale: 0, rotate: -180, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 1.4 }
    );
}

function initSecurity() {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
}

// Scroll Restoration
function resetScrollPosition() {
    // Prevent browser's native restoration which might conflict with dynamic content
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Force scroll to top
    window.scrollTo(0, 0);
    setTimeout(() => {
        if (lenis) lenis.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);
    }, 50);
}

// Initialize
function init() {
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderEducation();
    renderCertifications();
    renderContact();

    initThreeJS();
    initCustomCursor();
    initNavigation();
    initGSAPAnimations();
    initContactForm();
    initPreloader();
    initThemeToggle();
    initBackToTop();
    initSmoothScroll();
    initClock();
    animateHeader();
    initSecurity();
    initMagneticButtons();
    resetScrollPosition();

    setTimeout(init3DTilt, 500);
}

document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();