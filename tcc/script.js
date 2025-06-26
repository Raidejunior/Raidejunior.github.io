
// Global variables
let timerInterval;
let currentTime = 25 * 60; // 25 minutes in seconds
let pomodoroCount = 0;
let currentHouseSlide = 0;

// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Technique tabs
function showTechnique(technique) {
    // Hide all contents
    document.querySelectorAll('.technique-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab-button').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected content and activate tab
    document.getElementById(technique).classList.add('active');
    event.target.classList.add('active');
}

// Pomodoro Timer
function updateTimerDisplay() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    document.getElementById('timerDisplay').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer(minutes) {
    clearInterval(timerInterval);
    currentTime = minutes * 60;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        currentTime--;
        updateTimerDisplay();

        if (currentTime <= 0) {
            clearInterval(timerInterval);
            if (minutes === 25) {
                pomodoroCount++;
                document.getElementById('pomodoroCount').textContent = pomodoroCount;
                alert('Pomodoro concluído! Hora da pausa!');
            } else {
                alert('Pausa concluída! Hora de voltar ao trabalho!');
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    currentTime = 25 * 60;
    updateTimerDisplay();
}

// GTD Phase tooltip
function showGTDPhase(phase, description) {
    showModal(phase, description);
}

// SMART Generator
function generateSMART() {
    const specific = document.getElementById('specific').value;
    const measurable = document.getElementById('measurable').value;
    const achievable = document.getElementById('achievable').value;
    const relevant = document.getElementById('relevant').value;
    const timebound = document.getElementById('timebound').value;

    if (specific && measurable && achievable && relevant && timebound) {
        const result = `Meta: ${specific}, medida por ${measurable}, usando ${achievable}, relevante porque ${relevant}, com prazo até ${timebound}.`;

        const resultDiv = document.getElementById('smartResult');
        resultDiv.innerHTML = `<h4>🎯 Sua Meta SMART:</h4><p><strong>${result}</strong></p>`;
        resultDiv.style.display = 'block';
    } else {
        alert('Por favor, preencha todos os campos para gerar sua meta SMART.');
    }
}

// Carousel functionality
function moveCarousel(type, direction) {
    if (type === 'houses') {
        const carousel = document.getElementById('housesCarousel');
        const slides = carousel.children;
        const totalSlides = slides.length;

        currentHouseSlide += direction;

        if (currentHouseSlide >= totalSlides) {
            currentHouseSlide = 0;
        } else if (currentHouseSlide < 0) {
            currentHouseSlide = totalSlides - 1;
        }

        const translateX = -currentHouseSlide * (300 + 30); // slide width + margin
        carousel.style.transform = `translateX(${translateX}px)`;
    }
}

// Card details modal
function showCardDetails(title, effect, justification) {
    showModal(title, effect, justification);
}

// Modal functions
function showModal(title, effect, justification) {
    document.getElementById('modalTitle').textContent = title;

    document.getElementById('modalContent').innerHTML = `
        <strong>Efeito no jogo:</strong><br>${effect}<br><br>
        <strong>Justificativa:</strong><br>${justification}
    `;

    document.getElementById('modal').style.display = 'block';
}


function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Initialize timer display
updateTimerDisplay();
