// --- Language and Verification Gating ---
const translations = {
    en: {
        headerText: "🤖 Time Verification Required",
        languageInstruction: "First, select your language by clicking on it:",
        verifyQuestion: "Select all items that relate to time:",
        loadingText: "Verifying your understanding of time...",
        statusText: "Analyzing temporal perception...",
        successText: "✅ Welcome! Come for what you want",
        enterBtn: "Enter Gallery",
        verifyBtn: "Verify Selection",
        errorText: "Please select more items - everything relates to time in some way!"
    },
    ja: {
        headerText: "🤖 時間認証が必要です",
        languageInstruction: "まず、言語をクリックして選択してください：",
        verifyQuestion: "時間に関係するものをすべて選択してください：",
        loadingText: "時間の理解を検証中...",
        statusText: "時間的認識を分析中...",
        successText: "✅ お気に入りなコンテンツへどうぞ",
        enterBtn: "入る",
        verifyBtn: "選択を確認",
        errorText: "もっと選択してください - すべてが何らかの形で時間に関係しています！"
    }
};

let selectedLanguage = "en";
let verified = false;

function setLanguage(lang) {
    selectedLanguage = lang;
    const t = translations[lang];
    
    // Update all text elements
    document.getElementById('verify-header-text').textContent = t.headerText;
    document.getElementById('language-instruction').textContent = t.languageInstruction;
    document.getElementById('verify-question-text').textContent = t.verifyQuestion;
    document.getElementById('loading-text').textContent = t.loadingText;
    document.getElementById('time-verification-status').textContent = t.statusText;
    document.getElementById('success-text').textContent = t.successText;
    document.getElementById('enter-btn').textContent = t.enterBtn;
    document.getElementById('time-verify-btn').textContent = t.verifyBtn;
}

function selectLanguage(lang) {
    // Remove selection from all language options
    document.querySelectorAll('.language-option').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Select the clicked language
    document.querySelector(`[data-lang="${lang}"]`).classList.add('selected');
    
    // Set language and proceed to time verification
    setLanguage(lang);
    
    setTimeout(() => {
        document.getElementById('language-step').classList.add('hidden');
        document.getElementById('time-verification-step').classList.remove('hidden');
        generateTimeCaptcha();
    }, 1000);
}

function generateTimeCaptcha() {
    const captchaContainer = document.getElementById('time-captcha-images');
    
    // All items are actually time-related in philosophical/artistic sense
    const timeItems = [
        { emoji: '⏰', name: 'clock' },
        { emoji: '🌅', name: 'sunrise' },
        { emoji: '🍂', name: 'autumn' },
        { emoji: '❄️', name: 'frozen' },
        { emoji: '📚', name: 'memory' },
        { emoji: '🌊', name: 'flow' },
        { emoji: '🎭', name: 'performance' },
        { emoji: '📱', name: 'moment' },
        { emoji: '🕯️', name: 'duration' }
    ];
    
    captchaContainer.innerHTML = '';
    
    // Generate 9 images - all are "correct" since everything relates to time
    for (let i = 0; i < 9; i++) {
        const item = timeItems[i];
        const imageDiv = document.createElement('div');
        imageDiv.className = 'captcha-image';
        imageDiv.textContent = item.emoji;
        imageDiv.dataset.correct = 'true';  // All items are correct!
        imageDiv.dataset.name = item.name;
        
        imageDiv.onclick = () => toggleCaptchaSelection(imageDiv);
        captchaContainer.appendChild(imageDiv);
    }
}

function verifyTimeSelection() {
    const selectedItems = document.querySelectorAll('#time-captcha-images .captcha-image.selected');
    const totalItems = document.querySelectorAll('#time-captcha-images .captcha-image').length;
    
    if (selectedItems.length === totalItems) {
        // All items selected - correct!
        document.getElementById('time-verification-step').classList.add('hidden');
        document.getElementById('time-verification-loading').classList.remove('hidden');
        
        // Start loading animation
        startTimeVerificationLoading();
    } else {
        // Not all items selected
        alert(translations[selectedLanguage].errorText);
    }
}

function startTimeVerificationLoading() {
    const progressBar = document.getElementById('time-verification-progress');
    const statusText = document.getElementById('time-verification-status');
    
    const loadingSteps = selectedLanguage === 'en' ? [
        'Analyzing temporal perception...',
        'Checking understanding of time...',
        'Validating temporal awareness...',
        'Confirming time consciousness...',
        'Processing temporal data...',
        'Almost complete...',
        'Time verification successful!'
    ] : [
        '時間的認識を分析中...',
        '時間の理解を確認中...',
        '時間意識を検証中...',
        '時間認識を確認中...',
        '時間データを処理中...',
        'もうすぐ完了...',
        '時間認証成功！'
    ];
    
    let currentStep = 0;
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 15 + 10;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = progress + '%';
        
        if (currentStep < loadingSteps.length - 1) {
            statusText.textContent = loadingSteps[currentStep];
            currentStep++;
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('time-verification-loading').classList.add('hidden');
                document.getElementById('time-verification-complete').classList.remove('hidden');
            }, 500);
        }
    }, 800);
}

function enterSite() {
    verified = true;
    document.getElementById('language-select-popup').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
    // Show language/verify popup first
    document.getElementById('language-select-popup').classList.remove('hidden');
    document.getElementById('main-content').classList.add('hidden');
    document.body.style.overflow = 'hidden';
    setLanguage(selectedLanguage);
});

function verifyTimeAnswer(answer) {
    // This function is now replaced by the new verification system
    console.log('Old verification function called');
}

// Popup management
function showPopup(popupId) {
    document.getElementById(popupId).classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closePopup(popupId) {
    document.getElementById(popupId).classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Random popup generator - PATREON DISABLED
function randomPopup() {
    const popups = ['virus-warning']; // Removed subscription-popup
    const randomPopup = popups[Math.floor(Math.random() * popups.length)];
    showPopup(randomPopup);
}

// Fake virus scan
function fakeVirusScan() {
    const scanBtn = event.target;
    scanBtn.innerHTML = '❄️ Synchronizing...';
    scanBtn.disabled = true;
    
    setTimeout(() => {
        scanBtn.innerHTML = '⏰ Time Synced!';
        setTimeout(() => {
            closePopup('virus-warning');
            // Skip subscription popup - go directly to human verification
            setTimeout(() => showPopup('human-verification'), 1000);
        }, 1000);
    }, 2000);
}

// Fake premium upgrade - DISABLED
function fakePremium() {
    alert('❄️ This gallery is free to browse! Enjoy our temporal art collection! ⏰');
    closePopup('subscription-popup');
    // Skip to human verification instead
    setTimeout(() => showPopup('human-verification'), 500);
}

// Fake download
function fakeDownload() {
    const responses = [
        "❄️ Archive access temporarily frozen! Please verify you're human first.",
        "⚠️ Suspicious activity detected! Please verify you're human first.", 
        "⏰ Time synchronization required! Complete verification to continue.",
        "🤖 Bot detected! Complete verification to access our archive.",
        "📱 Download our gallery app for better viewing! (Coming soon to App Store!)"
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
    const targets = ['art supplies', 'brushes', 'canvases', 'sculptures', 'galleries', 'easels'];
    const currentTarget = targets[Math.floor(Math.random() * targets.length)];
    
    document.getElementById('captcha-target').textContent = currentTarget;
    
    const images = ['�', '�️', '🖼️', '🎭', '🏛️', '✏️', '📐', '🖊️', '�', '�', '�', '📚'];
    const correctImages = {
        'art supplies': ['�', '🖌️', '✏️', '📐'],
        'brushes': ['🖌️', '�️'],
        'canvases': ['🖼️'],
        'sculptures': ['🎭'],
        'galleries': ['🏛️', '🖼️'],
        'easels': ['🎨', '�️']
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
        'Analyzing aesthetic preferences...',
        'Checking artistic background...',
        'Validating gallery access...',
        'Detecting art appreciation level...',
        'Confirming human creativity...',
        'Almost ready...',
        'Welcome to our gallery!'
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
        document.querySelector('.video-info h3').textContent = 'Now Viewing: "Time Fragments"';
        document.querySelector('.video-info p').innerHTML = `
            <strong>About this piece:</strong><br>
            Digital video installation exploring temporal displacement<br>
            Part of "Frozen In Time" exhibition series<br>
            <br><strong>Video hosting for artists:</strong><br>
            • Vimeo (Best for art) - Professional presentation<br>
            • YouTube (Unlisted) - Wide accessibility<br>
            • Self-hosted - Full control<br>
            <br><em>Replace with your artwork URL in script.js!</em>
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
        "🎨 Preparing digital canvas...",
        "�️ Loading art assets...",
        "🏛️ Connecting to Yokohama servers...",
        "� Optimizing viewing experience...",
        "✨ Channeling creative energy..."
    ];
    
    // Show random messages in console
    setInterval(() => {
        const message = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];
        console.log(`%c${message}`, 'color: #ff6600; font-size: 16px; font-weight: bold;');
    }, 10000);
}

// Easter eggs and extra frozen time effects
function addFrozenEffects() {
    // Change cursor to snowflake on certain elements
    const frozenElements = document.querySelectorAll('.download-btn, .play-btn, .video-card');
    frozenElements.forEach(el => {
        el.classList.add('frozen-cursor');
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
    
    // Random art sounds (text-based)
    const artSounds = ['✨ Inspiration!', '🎨 Create!', 'Beautiful!', '🖌️ Art flows!'];
    window.addEventListener('click', () => {
        if (Math.random() < 0.1) { // 10% chance
            const sound = artSounds[Math.floor(Math.random() * artSounds.length)];
            const soundDiv = document.createElement('div');
            soundDiv.textContent = sound;
            soundDiv.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 1.5rem;
                color: #ff6600;
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
    console.log('%c� Welcome to Frozen In Time - Art Center Yokohama! �', 
        'color: #ff6600; font-size: 20px; font-weight: bold;');
    
    // Start annoying behaviors after 5 seconds
    setTimeout(startAnnoyingBehaviors, 5000);
    
    // Add frozen effects
    addFrozenEffects();
    
    // Show welcome popup after 3 seconds - PATREON DISABLED
    setTimeout(() => {
        if (Math.random() < 0.7) {
            showPopup('virus-warning'); // Changed from subscription-popup
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
    
    // Prevent right-click (classic art gallery protection)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        alert('🚫 Right-click disabled to protect our digital artworks! (Just being artistic)');
    });
    
    // Fake ad blocker detection
    setTimeout(() => {
        if (Math.random() < 0.4) {
            alert('🛡️ Ad blocker detected! Please disable to support our artists!');
        }
    }, 10000);
    
    // Initialize floating corner elements
    initializeFloatingElements();
});

// Floating corner elements functions
function initializeFloatingElements() {
    const elements = ['floating-corner-1', 'floating-corner-2', 'floating-corner-3'];
    let currentAdIndex = 0;
    
    // Show first ad after delay
    setTimeout(() => {
        showNextAd(elements, currentAdIndex);
    }, 5000);
    
    // Cycle through ads every 15-20 seconds
    setInterval(() => {
        hideCurrentAd(elements[currentAdIndex]);
        currentAdIndex = (currentAdIndex + 1) % elements.length;
        setTimeout(() => {
            showNextAd(elements, currentAdIndex);
        }, 2000); // 2 second gap between ads
    }, 18000);
    
    makeFloatingElementsInteractive();
}

function showNextAd(elements, index) {
    const element = document.getElementById(elements[index]);
    element.style.display = 'block';
    element.style.animation = 'slideInLeft 0.8s ease-out';
}

function hideCurrentAd(elementId) {
    const element = document.getElementById(elementId);
    if (element && element.style.display !== 'none') {
        element.style.animation = 'slideOutLeft 0.5s ease-in';
        setTimeout(() => {
            element.style.display = 'none';
        }, 500);
    }
}

function closeFloatingElement(elementId) {
    const element = document.getElementById(elementId);
    element.style.animation = 'slideOutLeft 0.5s ease-in';
    setTimeout(() => {
        element.style.display = 'none';
    }, 500);
    
    // Don't auto-respawn when manually closed - let the cycle handle it
}

function makeFloatingElementsInteractive() {
    const floatingElements = document.querySelectorAll('.floating-corner');
    
    floatingElements.forEach(element => {
        // Add hover effects (subtle for video ads)
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.05)';
            element.style.transition = 'transform 0.2s ease';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
        
        // Add click behavior for the image
        const img = element.querySelector('img');
        img.addEventListener('click', () => {
            // Typical video site ad behaviors
            const behaviors = [
                () => alert('❄️ Click to explore our frozen art gallery!'),
                () => alert('🎨 Premium artworks await! Browse our collection!'),
                () => showPopup('virus-warning'),
                () => window.open('https://frozen-in-time.github.io', '_blank')
            ];
            
            const randomBehavior = behaviors[Math.floor(Math.random() * behaviors.length)];
            randomBehavior();
        });
    });
}