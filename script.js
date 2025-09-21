// Popup management
function showPopup(popupId) {
    document.getElementById(popupId).classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closePopup(popupId) {
    document.getElementById(popupId).classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Random popup generator
function randomPopup() {
    const popups = ['virus-warning', 'subscription-popup'];
    const randomPopup = popups[Math.floor(Math.random() * popups.length)];
    showPopup(randomPopup);
}

// Fake virus scan
function fakeVirusScan() {
    const scanBtn = event.target;
    scanBtn.innerHTML = '🔄 Scanning...';
    scanBtn.disabled = true;
    
    setTimeout(() => {
        scanBtn.innerHTML = '✅ Clean!';
        setTimeout(() => {
            closePopup('virus-warning');
            // Show another popup because why not
            setTimeout(() => showPopup('subscription-popup'), 1000);
        }, 1000);
    }, 2000);
}

// Fake premium upgrade
function fakePremium() {
    alert('💳 Payment failed! Your card was declined. Try our FREE trial instead! 😉');
    closePopup('subscription-popup');
    setTimeout(() => showPopup('human-verification'), 500);
}

// Fake download
function fakeDownload() {
    const responses = [
        "🚫 Download limit reached! Upgrade to Premium for unlimited downloads!",
        "⚠️ Suspicious activity detected! Please verify you're human first.",
        "💰 This content requires Premium membership. Upgrade now for only $4.99!",
        "🤖 Bot detected! Complete human verification to continue.",
        "📱 Download our app for faster downloads! (Click here to install virus... I mean app!)"
    ];
    
    const response = responses[Math.floor(Math.random() * responses.length)];
    alert(response);
    
    if (response.includes('human')) {
        showVerification();
    } else {
        setTimeout(randomPopup, 1000);
    }
}

// Human verification system
function showVerification() {
    showPopup('human-verification');
    generateCaptcha();
}

function generateCaptcha() {
    const captchaContainer = document.getElementById('captcha-images');
    const targets = ['pirates', 'skulls', 'ships', 'treasure', 'parrots', 'swords'];
    const currentTarget = targets[Math.floor(Math.random() * targets.length)];
    
    document.getElementById('captcha-target').textContent = currentTarget;
    
    const images = ['🏴‍☠️', '💀', '⚔️', '🗡️', '💎', '🦜', '⚓', '🏴', '💰', '🔫', '👑', '🌊'];
    const correctImages = {
        'pirates': ['🏴‍☠️', '🏴'],
        'skulls': ['💀'],
        'ships': ['⚓', '🌊'],
        'treasure': ['💎', '💰', '👑'],
        'parrots': ['🦜'],
        'swords': ['⚔️', '🗡️', '🔫']
    };
    
    captchaContainer.innerHTML = '';
    
    // Generate 9 images
    for (let i = 0; i < 9; i++) {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'captcha-image';
        
        // 30% chance of correct image
        if (Math.random() < 0.3 && correctImages[currentTarget]) {
            const correctImg = correctImages[currentTarget][Math.floor(Math.random() * correctImages[currentTarget].length)];
            imageDiv.textContent = correctImg;
            imageDiv.dataset.correct = 'true';
        } else {
            imageDiv.textContent = images[Math.floor(Math.random() * images.length)];
            imageDiv.dataset.correct = 'false';
        }
        
        imageDiv.onclick = () => toggleCaptchaSelection(imageDiv);
        captchaContainer.appendChild(imageDiv);
    }
}

function toggleCaptchaSelection(element) {
    element.classList.toggle('selected');
}

function nextVerificationStep() {
    // Hide step 1, show step 2
    document.getElementById('verification-step-1').classList.add('hidden');
    document.getElementById('verification-step-2').classList.remove('hidden');
    
    // Start fake loading
    const progressBar = document.getElementById('verification-progress');
    const statusText = document.getElementById('verification-status');
    
    const loadingSteps = [
        'Checking browser fingerprint...',
        'Analyzing mouse movements...',
        'Validating IP address...',
        'Detecting bots...',
        'Confirming humanity...',
        'Almost done...',
        'Verification complete!'
    ];
    
    let currentStep = 0;
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 20 + 5;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = progress + '%';
        
        if (currentStep < loadingSteps.length - 1) {
            statusText.textContent = loadingSteps[currentStep];
            currentStep++;
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('verification-step-2').classList.add('hidden');
                document.getElementById('verification-complete').classList.remove('hidden');
            }, 500);
        }
    }, 800);
}

// Video loading
function loadVideo() {
    const placeholder = document.getElementById('video-placeholder');
    const videoSection = document.getElementById('actual-video');
    
    // Show loading message
    placeholder.innerHTML = `
        <div style="padding: 40px;">
            <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: #ff6600;"></i>
            <h3>Loading video...</h3>
            <p>Please wait...</p>
        </div>
    `;
    
    // After 2 seconds, show the video section with instructions
    setTimeout(() => {
        placeholder.classList.add('hidden');
        videoSection.classList.remove('hidden');
        
        // Set up a sample video (you can replace this with actual video)
        const iframe = document.getElementById('video-frame');
        
        // Make responsive height
        if (window.innerWidth <= 768) {
            iframe.height = "200";
        } else {
            iframe.height = "400";
        }
        
        // Example with a sample video - replace with your own
        iframe.src = "https://www.youtube.com/embed/dQw4w9WGXcQ?autoplay=1&mute=1";
        
        // Update video info
        document.querySelector('.video-info h3').textContent = 'Now Playing: Sample Video';
        document.querySelector('.video-info p').innerHTML = `
            <strong>For your own video hosting:</strong><br>
            • YouTube (Unlisted) - Free, easy<br>
            • Vimeo - Professional<br>
            • Self-hosted MP4 files<br>
            <br><em>Replace iframe src in script.js!</em>
        `;
    }, 2000);
}

// Annoying behaviors
function startAnnoyingBehaviors() {
    // Random popups every 30-60 seconds
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance
            randomPopup();
        }
    }, Math.random() * 30000 + 30000);
    
    // Fake download buttons that move when clicked
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('download-btn') && Math.random() < 0.2) {
            e.target.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
            setTimeout(() => {
                e.target.style.transform = 'none';
            }, 1000);
        }
    });
    
    // Fake loading messages
    const fakeMessages = [
        "👁️ Someone is watching...",
        "📡 Connecting to secret server...",
        "🔓 Bypassing copyright protection...",
        "🏴‍☠️ Sailing the seven seas...",
        "💀 Summoning digital ghosts..."
    ];
    
    // Show random messages in console
    setInterval(() => {
        const message = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];
        console.log(`%c${message}`, 'color: #ff6600; font-size: 16px; font-weight: bold;');
    }, 10000);
}

// Easter eggs and extra pirate behavior
function addPirateEffects() {
    // Change cursor to skull on certain elements
    const pirateElements = document.querySelectorAll('.download-btn, .play-btn, .video-card');
    pirateElements.forEach(el => {
        el.classList.add('skull-cursor');
    });
    
    // Occasional screen shake
    setInterval(() => {
        if (Math.random() < 0.05) { // 5% chance
            document.body.style.animation = 'shake 0.5s';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 500);
        }
    }, 5000);
    
    // Random pirate sounds (text-based)
    const pirateSounds = ['Arrr!', 'Ahoy!', 'Shiver me timbers!', 'Yo ho ho!'];
    window.addEventListener('click', () => {
        if (Math.random() < 0.1) { // 10% chance
            const sound = pirateSounds[Math.floor(Math.random() * pirateSounds.length)];
            const soundDiv = document.createElement('div');
            soundDiv.textContent = sound;
            soundDiv.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 2rem;
                color: #ff6600;
                font-family: 'Creepster', cursive;
                z-index: 9999;
                pointer-events: none;
                animation: fadeOut 2s forwards;
            `;
            document.body.appendChild(soundDiv);
            
            setTimeout(() => {
                soundDiv.remove();
            }, 2000);
        }
    });
}

// Add fadeOut animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); }
    }
`;
document.head.appendChild(style);

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🏴‍☠️ Welcome to the most legitimate video site on the seven seas! 🏴‍☠️', 
        'color: #ff6600; font-size: 20px; font-weight: bold;');
    
    // Start annoying behaviors after 5 seconds
    setTimeout(startAnnoyingBehaviors, 5000);
    
    // Add pirate effects
    addPirateEffects();
    
    // Show welcome popup after 3 seconds
    setTimeout(() => {
        if (Math.random() < 0.7) {
            showPopup('subscription-popup');
        }
    }, 3000);
    
    // Close popups when clicking outside
    document.querySelectorAll('.popup-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closePopup(overlay.id);
            }
        });
    });
    
    // Prevent right-click (classic pirate site move)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        alert('🚫 Right-click disabled for your protection! (Not really, just being annoying)');
    });
    
    // Fake ad blocker detection
    setTimeout(() => {
        if (Math.random() < 0.4) {
            alert('🛡️ Ad blocker detected! Please disable to support our totally legal content!');
        }
    }, 10000);
});