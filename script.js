// --- Language and Verification Gating ---
// =======================================================================
// TRANSLATION TABLE - EDIT THIS SECTION TO CHANGE ALL SITE TEXT
// =======================================================================
const translations = {
    en: {
        // === VERIFICATION POPUP ===
        pageTitle: "Frozen In Time - Art Center Yokohama",
        headerText: "🤖 Time Verification Required",
        languageInstruction: "First, select your language by clicking on it:",
        verifyQuestion: "Select all items that relate to time:",
        loadingText: "Verifying your understanding of time...",
        statusText: "Analyzing temporal perception...",
        successText: "✅ Welcome! Come for what you want",
        enterBtn: "Enter Gallery",
        verifyBtn: "Verify Selection",
        errorText: "Please select more items - everything relates to time in some way!",
        
        // === MAIN PAGE CONTENT ===
        warningBanner: "❄️ Warning: Temporal art archive. Content may freeze your perception of time. ⏰",
        featuredTitle: "⏰ Featured Digital Art Piece",
        artworkTitle: 'TMRとめられ',
        artworkInfo: "Artist: [Your Name] | Duration: 10:54 | Year: 2025",
        viewArtwork: "VIEW",
        
        // === VIDEO INFO SECTION ===
        nowViewing: 'Now Viewing: "TMRとめられ"',
        videoHosting: "Video hosting for artists:",
        hostingOptions: "• Internet Archive (Best for art) - No censorship, permanent hosting\n• Vimeo (Pro only) - May flag nude art, limited free storage\n• GitHub Releases - 25MB limit, not suitable for long videos",
        replaceNote: "Replace with your artwork URL in script.js!",
        
        // === RELATED WORKS SECTION ===
        relatedWorks: "Related Works & Artists",
        artistStatement: "Artist Statement",
        aboutWork: "About the work",
        artCenterHome: "Art Center Home", 
        yokohamaLocation: "Yokohama location",
        otherArtists: "Other Artists",
        collaborativeWorks: "Collaborative works",
        contactInfo: "Contact Info",
        getInTouch: "Get in touch",
        
        // === NAVIGATION ===
        navStatement: "Statement",
        navArtists: "Artists", 
        navGallery: "Gallery",
        navContact: "Contact",
        
        // === POPUPS ===
        virusWarningTitle: "❄️ TEMPORAL FREEZE DETECTED! ⏰",
        virusWarningText: "Your time perception requires calibration!",
        virusWarningButton: "⏰ SYNC TIME",
        virusWarningCancel: "Maybe Later",
        subscriptionTitle: "� temp_title MEMBERSHIP ❄️",
        subscriptionText: "Support our time-frozen artists with exclusive access!",
        subscriptionPrice: "¥9,999/month",
        subscriptionDiscount: "Only ¥499/month!",
        subscriptionButton: "⏰ BECOME PATRON",
        subscriptionSupport: "Support temporal art in Yokohama",
        humanVerificationTitle: "🤖 Turing Test Required",
        humanVerificationText: "Please complete the Turing Test to access our digital archive:",
        humanVerificationLoading: "Almost done! Processing Turing Test results...",
        humanVerificationSuccess: "✅ Turing Test passed! Welcome!",
        humanVerifyBtn: "Verify",
        humanEnterBtn: "Enter Gallery",
    },
    ja: {
        // === VERIFICATION POPUP ===
        pageTitle: "フローズン・イン・タイム - アートセンター横浜",
        headerText: "🤖 時間認証が必要です",
        languageInstruction: "まず、言語をクリックして選択してください：",
        verifyQuestion: "時間に関係するものをすべて選択してください：",
        loadingText: "時間の理解を検証中...",
        statusText: "時間的認識を分析中...",
        successText: "✅ お気に入りなコンテンツへどうぞ",
        enterBtn: "入る",
        verifyBtn: "選択を確認",
        errorText: "もっと選択してください - すべてが何らかの形で時間に関係しています！",
        
        // === MAIN PAGE CONTENT ===
        warningBanner: "❄️ 警告: 時間芸術アーカイブ。コンテンツは時間の知覚を凍結する可能性があります。⏰",
        featuredTitle: "⏰ 注目のデジタルアート作品",
        artworkTitle: 'TMRとめられ',
        artworkInfo: "長さ: 10:54 | 年: 2025",
        viewArtwork: "プレイ",
        
        // === VIDEO INFO SECTION ===
        nowViewing: '現在視聴中: "TMRとめられ"',
        videoHosting: "アーティストのための動画ホスティング:",
        hostingOptions: "• Internet Archive（アート向け）- 検閲なし、永続ホスティング\n• Vimeo（プロのみ）- ヌードアートにフラグ、無料ストレージ制限\n• GitHub Releases - 25MB制限、長時間動画に不適",
        replaceNote: "script.jsであなたの作品URLに置き換えてください！",
        
        // === RELATED WORKS SECTION ===
        relatedWorks: "関連作品とアーティスト",
        artistStatement: "アーティストステートメント",
        aboutWork: "作品について",
        artCenterHome: "アートセンターホーム",
        yokohamaLocation: "横浜の場所",
        otherArtists: "他のアーティスト",
        collaborativeWorks: "コラボレーション作品",
        contactInfo: "連絡先",
        getInTouch: "お問い合わせ",
        
        // === NAVIGATION ===
        navStatement: "ステートメント",
        navArtists: "アーティスト",
        navGallery: "ギャラリー",
        navContact: "連絡先",
        
        // === POPUPS ===
        virusWarningTitle: "❄️ 時間凍結検出！ ⏰",
        virusWarningText: "あなたの時間認識に調整が必要です！",
        virusWarningButton: "⏰ 時間を同期",
        virusWarningCancel: "後で",
        subscriptionTitle: "� temp_title メンバーシップ ❄️",
        subscriptionText: "時間凍結アーティストを独占アクセスでサポート！",
        subscriptionPrice: "¥9,999/月",
        subscriptionDiscount: "月額¥499のみ！",
        subscriptionButton: "⏰ パトロンになる",
        subscriptionSupport: "横浜の時間芸術をサポート",
        humanVerificationTitle: "🤖 チューリングテストが必要です",
        humanVerificationText: "デジタルアーカイブにアクセスするにはチューリングテストを完了してください：",
        humanVerificationLoading: "もうすぐ完了！チューリングテスト結果を処理中...",
        humanVerificationSuccess: "✅ チューリングテスト合格！ようこそ！",
        humanVerifyBtn: "確認",
        humanEnterBtn: "ギャラリーに入る",
    }
};
// =======================================================================

let selectedLanguage = "en";
let verified = false;

function setLanguage(lang) {
    selectedLanguage = lang;
    const t = translations[lang];
    // Persist selection
    try { localStorage.setItem('fit_lang', lang); } catch(e) {}
    // Update document language and title
    document.documentElement.setAttribute('lang', lang);
    if (t.pageTitle) document.title = t.pageTitle;
    
    // Update verification popup elements
    document.getElementById('verify-header-text').textContent = t.headerText;
    document.getElementById('language-instruction').textContent = t.languageInstruction;
    document.getElementById('verify-question-text').textContent = t.verifyQuestion;
    document.getElementById('loading-text').textContent = t.loadingText;
    document.getElementById('time-verification-status').textContent = t.statusText;
    document.getElementById('success-text').textContent = t.successText;
    document.getElementById('enter-btn').textContent = t.enterBtn;
    document.getElementById('time-verify-btn').textContent = t.verifyBtn;
    
    // Always update main content if present (safe even if hidden)
    updateMainContentLanguage(t);
}

// Public API for post-entry language switching
function switchLanguage(lang) {
    if (!translations[lang]) return;
    setLanguage(lang);
    // Reapply main content translations explicitly
    updateMainContentLanguage(translations[lang]);
    console.log(`Language switched to: ${lang}`);
}

function updateMainContentLanguage(t) {
    if (!t) return;
    const missingOnce = new Set();
    
    // Add a small delay to ensure all elements are ready
    setTimeout(() => {
        // Simple text replacements
        const simpleElements = [
            { id: 'warning-banner', text: t.warningBanner },
            { id: 'featured-title', text: t.featuredTitle },
            { id: 'artwork-title', text: t.artworkTitle },
            { id: 'artwork-info', text: t.artworkInfo },
            { id: 'view-artwork', text: t.viewArtwork },
            { id: 'now-viewing', text: t.nowViewing },
            { id: 'video-hosting', text: t.videoHosting },
            { id: 'replace-note', text: t.replaceNote },
            { id: 'related-works', text: t.relatedWorks },
            { id: 'artist-statement', text: t.artistStatement },
            { id: 'about-work', text: t.aboutWork },
            { id: 'art-center-home', text: t.artCenterHome },
            { id: 'yokohama-location', text: t.yokohamaLocation },
            { id: 'other-artists', text: t.otherArtists },
            { id: 'collaborative-works', text: t.collaborativeWorks },
            { id: 'contact-info', text: t.contactInfo },
            { id: 'get-in-touch', text: t.getInTouch },
            { id: 'copyright', text: t.copyright },
            { id: 'footer-about', text: t.footerAbout },
            { id: 'footer-exhibitions', text: t.footerExhibitions },
            { id: 'footer-residency', text: t.footerResidency },
            { id: 'footer-contact', text: t.footerContact },
            // Navigation
            { id: 'nav-statement', text: t.navStatement },
            { id: 'nav-artists', text: t.navArtists },
            { id: 'nav-gallery', text: t.navGallery },
            { id: 'nav-contact', text: t.navContact },
            // Popups
            { id: 'virus-warning-title', text: t.virusWarningTitle },
            { id: 'virus-warning-text', text: t.virusWarningText },
            { id: 'virus-warning-button', text: t.virusWarningButton },
            { id: 'virus-warning-cancel', text: t.virusWarningCancel },
            { id: 'subscription-title', text: t.subscriptionTitle },
            { id: 'subscription-text', text: t.subscriptionText },
            { id: 'subscription-price', text: t.subscriptionPrice },
            { id: 'subscription-discount', text: t.subscriptionDiscount },
            { id: 'subscription-button', text: t.subscriptionButton },
            { id: 'subscription-support', text: t.subscriptionSupport },
            { id: 'human-verification-title', text: t.humanVerificationTitle },
            { id: 'human-verification-text', text: t.humanVerificationText },
            { id: 'human-verification-loading', text: t.humanVerificationLoading },
            { id: 'human-verification-success', text: t.humanVerificationSuccess },
            { id: 'human-verify-btn', text: t.humanVerifyBtn },
            { id: 'human-enter-btn', text: t.humanEnterBtn }
        ];
        
        // Elements that need innerHTML for line breaks
        const htmlElements = [
            { id: 'hosting-options', html: t.hostingOptions.replace(/\n/g, '<br>') }
        ];
        
        // Update simple text elements
        simpleElements.forEach(({ id, text }) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = text;
                if (id.startsWith('nav-')) {
                    console.log(`[i18n] Translated nav element ${id}: "${text}"`);
                }
            } else if (!missingOnce.has(id)) {
                console.warn('[i18n] Missing element id:', id);
                missingOnce.add(id);
            }
        });
        
        // Update HTML elements (for line breaks)
        htmlElements.forEach(({ id, html }) => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = html;
            } else if (!missingOnce.has(id)) {
                console.warn('[i18n] Missing element id:', id);
                missingOnce.add(id);
            }
        });
    }, 100); // Small delay to ensure DOM is fully ready
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
    
    // Ensure navigation and all visible elements are translated immediately
    updateMainContentLanguage(translations[lang]);
    
    console.log(`Language selected: ${lang}`);
    
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
    // Main content is already visible, just ensure it stays visible
    document.getElementById('main-content').classList.remove('hidden');
    document.body.style.overflow = 'auto';
    
    // Apply selected language to main content after a small delay to ensure DOM is ready
    setTimeout(() => {
        const t = translations[selectedLanguage];
        updateMainContentLanguage(t);
        console.log(`Applying language: ${selectedLanguage}`);
        const toggle = document.getElementById('lang-toggle');
        if (toggle) toggle.classList.remove('hidden');
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    // Restore saved language if present
    try {
        const stored = localStorage.getItem('fit_lang');
        if (stored && translations[stored]) {
            selectedLanguage = stored;
        }
    } catch(e) {}

    // Apply language immediately (even before showing main content) so hidden content is translated
    setLanguage(selectedLanguage);
    
    // Also ensure navigation is translated immediately
    setTimeout(() => {
        console.log('Checking navigation elements:');
        ['nav-statement', 'nav-artists', 'nav-gallery', 'nav-contact'].forEach(id => {
            const el = document.getElementById(id);
            console.log(`${id}: ${el ? 'found' : 'NOT FOUND'}`);
        });
        updateMainContentLanguage(translations[selectedLanguage]);
        console.log('Navigation translation applied');
    }, 50);

    // Mark selected option visually
    const opt = document.querySelector(`.language-option[data-lang="${selectedLanguage}"]`);
    if (opt) opt.classList.add('selected');

    // Show main content in background and overlay popup (mobile-friendly approach)
    document.getElementById('main-content').classList.remove('hidden');
    document.getElementById('language-select-popup').classList.remove('hidden');
    // Don't disable body scroll - let content be accessible in background
    // document.body.style.overflow = 'hidden';

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
    
    // Start random countdown timers
    startRandomCountdownTimers();
    
    // Close popups when clicking outside - EXCEPT language verification popup
    document.querySelectorAll('.popup-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                // Don't allow closing the language verification popup by clicking outside
                if (overlay.id === 'language-select-popup') {
                    return; // Prevent closing - user must complete verification
                }
                closePopup(overlay.id);
            }
        });
    });
    
    // Prevent right-click (classic art gallery protection)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        alert('🚫 Right-click disabled to protect our digital artworks! (Just being artistic)');
    });
    
    // Fake ad blocker detection - DISABLED
    // setTimeout(() => {
    //     if (Math.random() < 0.4) {
    //         alert('🛡️ Ad blocker detected! Please disable to support our artists!');
    //     }
    // }, 10000);
    
    // Initialize floating corner elements
    initializeFloatingElements();
});

// Random countdown timer system
function startRandomCountdownTimers() {
    const countdownMessages = [
        "❄️ YOU CAN STOP YOUR TIME IN",
        "⏰ FREEZE YOUR TIME IN", 
        "🚨 TIME SUSPENSION AVAILABLE IN",
        "⚠️ TIME PAUSE READY IN",
        "❌ TIME HALT COUNTDOWN:",
        "🔒 TIME FREEZE UNLOCKS IN",
        "⏳ STOP TIME IN:",
        "🆘 TIME CONTROL READY IN"
    ];
    
    function createCountdownTimer() {
        // Random timing between 15-45 seconds
        const delay = Math.random() * 30000 + 15000;
        
        setTimeout(() => {
            // 30% chance to show timer
            if (Math.random() < 0.3) {
                const message = countdownMessages[Math.floor(Math.random() * countdownMessages.length)];
                const duration = Math.floor(Math.random() * 15) + 5; // 5-20 seconds
                showCountdownTimer(message, duration);
            }
            
            // Schedule next timer
            createCountdownTimer();
        }, delay);
    }
    
    // Start the timer system
    createCountdownTimer();
}

function showCountdownTimer(message, seconds) {
    // Don't show if a timer is already active
    if (document.getElementById('countdown-timer')) return;
    
    const timer = document.createElement('div');
    timer.id = 'countdown-timer';
    timer.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ff0000, #cc0000);
        color: white;
        padding: 15px 20px;
        border: 3px solid #fff;
        border-radius: 10px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 16px;
        z-index: 9999;
        box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
        text-align: center;
        min-width: 250px;
        animation: urgentPulse 0.5s infinite alternate;
    `;
    
    // Add pulsing animation
    if (!document.querySelector('#countdown-styles')) {
        const style = document.createElement('style');
        style.id = 'countdown-styles';
        style.textContent = `
            @keyframes urgentPulse {
                0% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.5); transform: scale(1); }
                100% { box-shadow: 0 0 30px rgba(255, 0, 0, 0.8); transform: scale(1.02); }
            }
            @keyframes timerFadeOut {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0.8); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(timer);
    
    let timeLeft = seconds;
    
    function updateTimer() {
        timer.innerHTML = `
            <div style="margin-bottom: 5px;">${message}</div>
            <div style="font-size: 24px; color: #ffff00;">${timeLeft}</div>
            <div style="font-size: 12px; margin-top: 5px;">SECONDS</div>
        `;
        
        if (timeLeft <= 0) {
            // Timer expired - show "TIME STOPPED" briefly then remove
            timer.innerHTML = `
                <div style="font-size: 20px; color: #ffff00;">TIME STOPPED!</div>
                <div style="font-size: 14px;">❄️ FROZEN ❄️</div>
            `;
            timer.style.animation = 'timerFadeOut 2s forwards';
            
            setTimeout(() => {
                if (timer.parentNode) {
                    timer.remove();
                }
            }, 2000);
            return;
        }
        
        timeLeft--;
        setTimeout(updateTimer, 1000);
    }
    
    updateTimer();
    
    // Add click to dismiss
    timer.addEventListener('click', () => {
        timer.style.animation = 'timerFadeOut 0.5s forwards';
        setTimeout(() => {
            if (timer.parentNode) {
                timer.remove();
            }
        }, 500);
    });
}

function verifyTimeAnswer(answer) {
    // This function is now replaced by the new verification system
    console.log('Old verification function called');
}

// Popup management
function showPopup(popupId) {
    document.getElementById(popupId).classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Ensure popup content is translated when shown
    updateMainContentLanguage(translations[selectedLanguage]);
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
    const targets = ['patterns', 'symbols', 'objects', 'shapes', 'connections', 'sequences'];
    const currentTarget = targets[Math.floor(Math.random() * targets.length)];
    
    document.getElementById('captcha-target').textContent = currentTarget;
    
    const images = ['🔲', '🔳', '⬜', '⬛', '�', '🔻', '⭐', '❄️', '�', '�', '🟨', '🟫', '🔗', '➡️', '⬅️', '↕️', '1️⃣', '2️⃣', '3️⃣', '4️⃣'];
    const correctImages = {
        'patterns': ['🔲', '�', '⬜', '⬛'],
        'symbols': ['🔺', '�', '⭐', '❄️'],
        'objects': ['🟩', '🟪', '🟨', '�'],
        'shapes': ['🔺', '🔻', '🔲', '🔳'],
        'connections': ['🔗', '➡️', '⬅️', '↕️'],
        'sequences': ['1️⃣', '2️⃣', '3️⃣', '4️⃣']
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
        
        // Set up the YouTube video embed
        const iframe = document.getElementById('video-frame');
        
        // Set responsive dimensions - the CSS will handle the responsive behavior
        iframe.width = "100%";
        iframe.style.aspectRatio = "16/9"; // Modern browsers support this
        iframe.style.minHeight = "200px";
        
        // Set the YouTube embed URL (converted from share link)
        iframe.src = "https://www.youtube.com/embed/00kpkgGSmiE?si=8EKO4Tba1cn-I9F";
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        
        // Update video info using translation keys (reuse existing structure/IDs)
        const t = translations[selectedLanguage];
        const nowViewingEl = document.getElementById('now-viewing');
        if (nowViewingEl) nowViewingEl.textContent = t.nowViewing;
        
        const videoHostingEl = document.getElementById('video-hosting');
        if (videoHostingEl) videoHostingEl.textContent = t.videoHosting;
        const hostingOptionsEl = document.getElementById('hosting-options');
        if (hostingOptionsEl) hostingOptionsEl.innerHTML = t.hostingOptions.replace(/\n/g,'<br>');
        const replaceNoteEl = document.getElementById('replace-note');
        if (replaceNoteEl) replaceNoteEl.textContent = t.replaceNote;
        
        // Ensure any other main content reflects current language
        updateMainContentLanguage(t);
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

// Initialize when page loads - MOVED TO TOP OF FILE
// All initialization is now handled in the first DOMContentLoaded listener

// Floating corner elements functions - Grid stacking system
function initializeFloatingElements() {
    const elements = ['floating-corner-1', 'floating-corner-2', 'floating-corner-3'];
    let adsVisible = [];
    let cycleIndex = 0;
    
    // Start with first ad
    setTimeout(() => {
        showAd('floating-corner-1');
        adsVisible.push('floating-corner-1');
        
        // Add second ad on top after 8 seconds
        setTimeout(() => {
            showAd('floating-corner-2');
            adsVisible.push('floating-corner-2');
            
            // Start cycling every 15 seconds
            setInterval(() => {
                cycleAds(elements, adsVisible, cycleIndex);
                cycleIndex = (cycleIndex + 1) % elements.length;
            }, 15000);
            
        }, 8000);
    }, 5000);
    
    makeFloatingElementsInteractive();
}

function showAd(elementId) {
    const element = document.getElementById(elementId);
    element.style.display = 'block';
    element.style.animation = 'slideInLeft 0.8s ease-out';
}

function cycleAds(allElements, visibleAds, cycleIndex) {
    if (visibleAds.length === 0) return;
    
    // Remove the bottom ad (first in visible array)
    const bottomAd = visibleAds.shift();
    hideAd(bottomAd);
    
    // If there's a top ad, make it drop down
    if (visibleAds.length > 0) {
        const topAd = visibleAds[0];
        const topElement = document.getElementById(topAd);
        topElement.style.animation = 'dropDown 0.6s ease-out';
        
        // Update its position to bottom after animation
        setTimeout(() => {
            if (topAd === 'floating-corner-2') {
                topElement.style.bottom = '20px';
            }
        }, 600);
    }
    
    // Add next ad on top
    setTimeout(() => {
        const nextAdIndex = (cycleIndex + 1) % allElements.length;
        const nextAd = allElements[nextAdIndex];
        
        if (nextAd === 'floating-corner-2') {
            // Reset position for corner-2 when it comes back
            document.getElementById(nextAd).style.bottom = '280px';
        }
        
        showAd(nextAd);
        visibleAds.push(nextAd);
        
        // Keep max 2 ads visible
        if (visibleAds.length > 2) {
            const oldAd = visibleAds.shift();
            hideAd(oldAd);
        }
    }, 1000);
}

function hideAd(elementId) {
    const element = document.getElementById(elementId);
    if (element && element.style.display !== 'none') {
        element.style.animation = 'slideOutLeft 0.5s ease-in';
        setTimeout(() => {
            element.style.display = 'none';
        }, 500);
    }
}

function hideCurrentAd(elementId) {
    hideAd(elementId);
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