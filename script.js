document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. Language Translation Configuration
    // ==========================================
    const translations = {
        tr: {
            "nav-home": "Ana Sayfa",
            "nav-projects": "Projeler",
            "nav-services": "Hizmetler",
            "nav-assistant": "Akıllı Asistan",
            "nav-about": "Hakkımızda",
            "nav-tools": "Araçlar",
            "nav-generator": "SteamCapsuleArt",
            "nav-resizer": "Boyutlandırıcı",
            "hero-badge": "SİSTEM DURUMU: AKTİF",
            "hero-title": "Karanlık Atmosferler,<br><span class=\"gradient-text\">Cozy Dokunuşlar</span>",
            "hero-subtitle": "Sıra dışı macera, korku ve cozy avcılık oyunları ile geleceğin kurumsal yapay zeka otomasyon çözümlerini tasarlıyoruz. Sıcak, atmosferik ve akıcı dijital deneyimler.",
            "hero-btn-projects": "Projeleri İncele",
            "hero-btn-assistant": "Asistanı Dene",
            "hero-scroll": "DİKEY AKIŞ",
            
            // Section Headers
            "section-subtitle-projects": "// PORTFÖYÜMÜZ",
            "section-title-projects": "Geliştirilen Projeler",
            "section-desc-projects": "Geliştirdiğimiz PC projelerinin yanı sıra daha önce mobil oyunlar da tasarladık; ancak güncelleme yayınlamadığımız için Play Store'dan kaldırılmıştır.",
            
            "section-subtitle-services": "// FREELANCE HİZMETLERİMİZ",
            "section-title-services": "Upwork Hizmet Kataloğu",
            "section-desc-services": "Hızlı oyun prototipleme, Unity mekanikleri, mobil/HTML5 uyumlu projeler ve yapay zeka destekli yerelleştirme hizmetleri için doğrudan Upwork üzerinden teklif alabilirsiniz.",
            
            // Game Roles & Info
            "project-role-label": "Rol:",
            
            // Game 1
            "game1-status": "YAYINDA",
            "game1-genre": "ANOMALİ DEDEKTİFLİĞİ / KORKU",
            "game1-role": "Solo Geliştirici",
            "game1-desc": "Sadece 4 ayda, sıfır bütçe ve sıkı bir planlamayla tek başıma geliştirip yayınladığım bu oyunda birbirine bağlı sistemlere odaklandım. Dinamik bir karakter kontrolcüsü, çalışan asansörler, etkileşimli bir dedektif panosu ve diyalog seçeneklerine sahip duyarlı bir radyo sistemi inşa ettim. Steam'de %100 olumlu inceleme alarak özellikle Asya pazarında güçlü bir ivme yakaladı. 12 dile tamamen yerelleştirildi. Bu proje, sürükleyici, yüksek kaliteli oynanış tasarlama ve cilalanmış bir ürünü hızla piyasaya sürme becerimi kanıtlamaktadır.",
            "game1-tag1": "Halüsinasyon Mekaniği",
            "game1-tag2": "Çıkarım Panosu",
            "game1-tag3": "Çoklu Sonlar",
            
            // Game 2
            "game2-status": "ERKEN ERİŞİM",
            "game2-genre": "CO-OP SURVIVAL HORROR",
            "game2-role": "Solo Geliştirici",
            "game2-desc": "Tamamen solo olarak geliştirdiğim Steam'deki ilk oyunum. Sunucu bakım maliyeti gerektirmeyen, Mirror kütüphanesi ve Steamworks P2P altyapısını kullanan 1-4 oyunculu bir co-op oyun mimarisi tasarladım. Steam Bulut Kayıtları, Başarımlar ve Steam Lobi Eşleştirmesini entegre ettim. Yüksek tutundurma oranına sahip oynanış döngüleri, modüler karakter özelleştirmeleri, düşman yapay zekası davranışları, dinamik aydınlatma ve DLC dağıtım hatları yazdım. 12 dile tamamen yerelleştirildi.",
            "game2-tag1": "Mirror Ağ Altyapısı",
            "game2-tag2": "Steamworks P2P",
            "game2-tag3": "Yapay Zeka Maskotlar",
            
            // Game 3 - Spear of the Sky
            "game3-status": "ÜCRETSİZ YAYINLANDI",
            "game3-genre": "COZY AVCI / BİRİNCİ ŞAHIS",
            "game3-role": "Solo Geliştirici (Mert K.)",
            "game3-desc": "Steam'de tamamen ücretsiz olarak yayınlanan dinamik PC aksiyon oyunu. Geri dönen mızrak fırlatma mekaniği, Prestige ilerleme sistemi, çevrimiçi liderlik tabloları ve üç farklı oynanış döngüsü (Klasik, Hayatta Kalma ve Boss Savaşı) içerir. Yüzlerce aktif nesne ve fizik simülasyonu için yüksek performans optimizasyonları yapıldı.",
            "game3-tag1": "Geri Dönen Mızrak",
            "game3-tag2": "Prestige İlerlemesi",
            "game3-tag3": "Liderlik Tabloları",
            
            // Game 4 - NextBot PANIC!
            "game4-status": "YAKINDA · DEMO YAYINDA",
            "game4-genre": "1-8 KİŞİLİK CO-OP SURVIVAL / PARTY",
            "game4-role": "Solo Geliştirici (Mert K.)",
            "game4-desc": "1-8 oyunculu, prosedürel olarak oluşturulan labirentlerde Nextbot'lardan kaçtığınız kaotik bir co-op hayatta kalma partisi oyunu. Oyuncuların kendi karakterlerini çizip boyayabildiği ve Steam Atölyesi (Workshop) üzerinden özel Nextbot'lar oluşturup indirebildiği eğlenceli ve dinamik bir oyun mimarisi inşa edildi. Steam'de sayfası ve ücretsiz oynanabilir demosu yayında!",
            "game4-tag1": "1-8 Kişilik Co-Op",
            "game4-tag2": "Steam Atölyesi (Workshop)",
            "game4-tag3": "Özel Karakter Çizimi",
            
            "btn-steam": "Steam'de İncele",
            
            // Freelance Services
            "service1-title": "AI Localization & Translation Setup",
            "service1-desc": "Oyununuzu yapay zeka destekli araçlarla ve Unity'nin Localization paketiyle hızlıca 12+ dile çevirip entegre edin.",
            "service1-price": "30$'dan başlayan fiyatlarla",
            
            "service2-title": "Playable Game Prototype (Unity / HTML5)",
            "service2-desc": "Fikirlerinizi hızlıca test etmek için ister Steam mekanikleri, ister mobil, isterseniz de tarayıcı destekli (HTML5) akıcı prototipler.",
            "service2-price": "45$'dan başlayan fiyatlarla",
            
            "service3-title": "Steamworks Integration for Unity",
            "service3-desc": "Lobi eşleştirmeleri, liderlik tabloları, bulut kayıtları, başarımlar ve DLC gibi tüm Steam API özelliklerini oyununuza bağlayın.",
            "service3-price": "50$'dan başlayan fiyatlarla",
            
            "service-delivery-fast": "Hızlı Teslimat",
            "btn-hire": "Upwork'te Sipariş Ver",
            
            // Assistant
            "section-subtitle-assistant": "// YAPAY ZEKA LABS",
            "section-title-assistant": "Kurumsal Akıllı Asistan",
            "section-desc-assistant": "Galaverse AI, işletmenizin veri tabanlarını, müşteri ilişkilerini ve lojistik süreçlerini optimize etmek amacıyla tasarlanmış özelleştirilebilir bir yapay zeka aracıdır.",
            "chat-status": "Aktif & Öğreniyor",
            "chat-latency": "GECİKME: 42ms",
            "chat-initial": "Merhaba. Ben Galaverse Kurumsal Akıllı Asistanı. Sistemlerimizin entegrasyon kapasiteleri, makine öğrenimi modellerimiz veya otomasyon çözümlerimiz hakkında sorularınızı yanıtlayabilirim.",
            "chat-placeholder": "Asistan ile konuşun...",
            "chat-send": "GÖNDER",
            "chat-system": "Sistem",
            "chat-user": "Kullanıcı",
            "chat-now": "Şimdi",
            
            // Configurator Labels
            "cfg-title": "Asistanı Özelleştir",
            "cfg-subtitle": "Kendi şirketinizin bilgilerini girerek akıllı asistanın nasıl yanıt verdiğini anında test edin.",
            "cfg-label-name": "Şirket Adı (Maks. 30 Karakter)",
            "cfg-label-desc": "Şirket Açıklaması (Maks. 120 Karakter)",
            "cfg-label-product": "Hizmet/Ürün & Fiyatı (Maks. 50 Karakter)",
            "cfg-btn-apply": "Sistemi Güncelle",
            "cfg-btn-demo": "Şablon Yükle",
            
            // About
            "section-subtitle-about": "// MİSYON & VİZYON",
            "section-title-about": "Gerçekliğin Karanlık Yüzü, Geleceğin Kodları",
            "about-text-1": "Galaverse Creations olarak 2024 yılında kurulduk. Atmosferik hikaye anlatıcılığı ile ileri düzey veri işlemeyi tek bir stüdyo çatısı altında birleştiriyoruz. Ekiplerimiz, gerilim dozu yüksek, derin hikaye anlatımlı oyunlar üretirken; aynı zamanda endüstriyel otomasyon süreçlerinde kullanılacak özelleştirilmiş yapay zeka katmanları geliştiriyor.",
            "about-text-2": "Felsefemiz net: Görsel gürültüden uzak, temiz, optimize ve sıcak tasarım ilkeleriyle şekillendirilmiş yüksek performanslı dijital ürünler.",
            "about-text-3": "Ayrıca Upwork platformu üzerinden küresel düzeyde bağımsız/freelance oyun geliştirme ve AI entegrasyonu hizmetleri sunuyoruz. Unity oyun mekanikleri, gelişmiş fizik simülasyonları, yapay zeka destekli bot ve asistan çözümleri ve optimizasyon alanlarında projelerinize can veriyoruz.",
            "contact-label-email": "İLETİŞİM / E-POSTA",
            "contact-label-hq": "MERKEZ",
            "contact-val-hq": "Ankara, Türkiye",
            "contact-label-upwork": "UPWORK HİZMETLERİ",
            "contact-label-fiverr": "FIVERR HİZMETLERİ",
            
            // Game Section
            "section-subtitle-game": "// HTML5 & WEB OYUN GELİŞTİRME",
            "section-title-game": "Tarayıcı İçi Oyun Üretiyoruz",
            "section-desc-game": "Sadece Unity değil — tarayıcıda çalışan HTML5 & WebGL oyunlar, kurumsal gamification çözümleri ve interaktif web deneyimleri de geliştiriyoruz. Aşağıda oynayabileceğiniz canlı bir demo.",
            "btn-fullscreen-game": "Tam Ekran Oyna",

            // Stats & CTA Section
            "stat-label-1": "Steam Olumlu İnceleme",
            "stat-label-2": "Dil Yerelştirmesi",
            "stat-label-3": "Sıfırdan Lansman (Ay)",
            "stat-label-4": "Yayınlanan Proje",
            "stat-label-5": "Ort. Proje Bütçesi",
            
            // Freelance CTA
            "cta-subtitle": "// BİRLİKTE ÇALIŞALIM",
            "cta-title": "Projenizi Gerçeğe Dönüştürelim",
            "cta-desc": "Unity oyun geliştirme, Steamworks entegrasyonu, hızlı prototipleme veya yapay zeka çözümleriniz için hemen profesyonel freelance profillerimiz üzerinden sipariş oluşturabilir veya bizimle iletişime geçebilirsiniz.",
            "cta-btn-upwork": "Upwork Profilini Gör",
            "cta-btn-fiverr": "Fiverr Profilini Gör",

            // Footer
            "footer-copy": "© 2026 Galaverse Creations. Tüm hakları saklıdır.",
            "footer-privacy": "Gizlilik Politikası"
        },
        en: {
            "nav-home": "Home",
            "nav-projects": "Projects",
            "nav-services": "Services",
            "nav-assistant": "Smart Assistant",
            "nav-about": "About Us",
            "nav-tools": "Tools",
            "nav-generator": "SteamCapsuleArt",
            "nav-resizer": "Image Resizer",
            "hero-badge": "● INDIE GAME & AI STUDIO",
            "hero-title": "Atmospheric Indie Games <br><span class=\"gradient-text\">& Practical AI Systems</span>",
            "hero-subtitle": "Crafted by solo indie developer Mert K. based in Ankara. Building immersive anomaly detection, horror, and cozy hunting PC games — alongside customized AI automation tools for modern workflows.",
            "hero-btn-projects": "Explore Games",
            "hero-btn-assistant": "Test AI Assistant",
            "hero-scroll": "SCROLL DOWN",
            
            // Section Headers
            "section-subtitle-projects": "// FEATURED GAMES",
            "section-title-projects": "Steam & PC Titles",
            "section-desc-projects": "Explore my PC titles developed solo from scratch, featuring deep gameplay mechanics, unique atmospheric concepts, and native Steamworks integration.",
            
            "section-subtitle-services": "// FREELANCE WORK",
            "section-title-services": "Game Dev & AI Services",
            "section-desc-services": "Need custom Unity gameplay mechanics, Steam API setup, playable HTML5 prototypes, or AI translation pipelines? Available for contract work on Upwork.",
            
            // Game Roles & Info
            "project-role-label": "Role:",
            
            // Game 1
            "game1-status": "RELEASED",
            "game1-genre": "ANOMALY DETECTION / HORROR",
            "game1-role": "Solo Developer (Mert K.)",
            "game1-desc": "Built and published solo in 4 months on a $0 budget. Focused on tight interconnected systems: dynamic controller, working elevators, interactive deduction board, and dialogue radio systems. Achieved a 100% positive rating on Steam with strong Asian market traction. Fully localized in 12 languages.",
            "game1-tag1": "Hallucination Mechanic",
            "game1-tag2": "Deduction Board",
            "game1-tag3": "Multiple Endings",
            
            // Game 2
            "game2-status": "EARLY ACCESS",
            "game2-genre": "CO-OP SURVIVAL HORROR",
            "game2-role": "Solo Developer (Mert K.)",
            "game2-desc": "My debut co-op horror title on Steam. Engineered 1-4 player architecture with Mirror & Steamworks P2P (zero server maintenance costs). Integrated Steam Cloud Saves, Achievements, Lobby Matchmaking, dynamic lighting, and enemy AI.",
            "game2-tag1": "Mirror Networking",
            "game2-tag2": "Steamworks P2P",
            "game2-tag3": "Enemy AI Mascots",
            
            // Game 3 - Spear of the Sky
            "game3-status": "RELEASED · FREE TO PLAY",
            "game3-genre": "COZY HUNTING / FIRST-PERSON",
            "game3-role": "Solo Developer (Mert K.)",
            "game3-desc": "Released completely Free-to-Play on Steam. A fast-paced aerial combat & hunting game featuring a returning spear mechanic, Prestige progression, online Steam leaderboards, and three distinct game loops (Classic, Survival, Boss Rush) optimized for massive physics entity counts.",
            "game3-tag1": "Returning Spear",
            "game3-tag2": "Prestige Scoring",
            "game3-tag3": "Steam Leaderboards",
            
            // Game 4 - NextBot PANIC!
            "game4-status": "COMING 2026 · DEMO OUT",
            "game4-genre": "1-8 PLAYER CO-OP SURVIVAL PARTY",
            "game4-role": "Solo Developer (Mert K.)",
            "game4-desc": "A chaotic 1-8 player co-op survival party game where players must escape endless procedurally generated mazes while outsmarting relentless Nextbots. Features full custom character drawing tools and Steam Workshop integration to create, share, and download custom Nextbots. Steam page and free playable demo are live now!",
            "game4-tag1": "1-8 Player Co-Op",
            "game4-tag2": "Steam Workshop",
            "game4-tag3": "Custom Paint Tools",
            
            "btn-steam": "View on Steam",
            
            // Freelance Services
            "service1-title": "AI Localization & Translation Setup",
            "service1-desc": "Translate and integrate your game into 12+ languages quickly using AI-assisted translation tools and Unity's official Localization package.",
            "service1-price": "From $30",
            
            "service2-title": "Playable Game Prototype (Unity / HTML5)",
            "service2-desc": "Turn your ideas into playable prototypes with fluid mechanics, whether for Steam features, mobile games, or browser-based HTML5 platforms.",
            "service2-price": "From $45",
            
            "service3-title": "Steamworks Integration for Unity",
            "service3-desc": "Connect Steam API features to your game, including P2P multiplayer lobbies, achievements, cloud saves, leaderboards, and DLC support.",
            "service3-price": "From $50",
            
            "service-delivery-fast": "Fast Delivery",
            "btn-hire": "Hire on Upwork",
            
            // Assistant
            "section-subtitle-assistant": "// AI LABS",
            "section-title-assistant": "Interactive AI Assistant",
            "section-desc-assistant": "A live demonstration showcasing a customizable AI assistant built for workflow automation and structured client inquiries.",
            "chat-status": "Live & Operational",
            "chat-latency": "LATENCY: 42ms",
            "chat-initial": "Hello! I am the Galaverse Assistant. Feel free to ask about our indie game projects, Unity engineering, or custom AI automation tools.",
            "chat-placeholder": "Ask the assistant a question...",
            "chat-send": "SEND",
            "chat-system": "System",
            "chat-user": "User",
            "chat-now": "Now",
            
            // Configurator Labels
            "cfg-title": "Customize Assistant",
            "cfg-subtitle": "Enter your company or project info to test live response simulations instantly.",
            "cfg-label-name": "Company/Project Name (Max 30 Chars)",
            "cfg-label-desc": "Description (Max 120 Chars)",
            "cfg-label-product": "Service/Product & Price (Max 50 Chars)",
            "cfg-btn-apply": "Update System",
            "cfg-btn-demo": "Load Template",
            
            // About
            "section-subtitle-about": "// ABOUT US",
            "section-title-about": "Indie Spirit, Robust Engineering",
            "about-text-1": "Founded in 2024 in Ankara, Galaverse Creations is an independent game & AI technology studio led by solo developer Mert K.",
            "about-text-2": "From crafting horror games with a 100% Steam positive rating to building streamlined AI automation layers, our core ethos is simple: authentic storytelling, clean architecture, and high-performance digital products.",
            "about-text-3": "Additionally, I provide global freelance services on Upwork specializing in Unity C# mechanics, Steamworks API integration, and customized AI tools.",
            "contact-label-email": "CONTACT / EMAIL",
            "contact-label-hq": "HEADQUARTERS",
            "contact-val-hq": "Ankara, Turkey",
            "contact-label-upwork": "UPWORK PROFILE",
            "contact-label-fiverr": "FIVERR PROFILE",

            // Game Section
            "section-subtitle-game": "// WEB GAME DEMO",
            "section-title-game": "Browser Game Showcase",
            "section-desc-game": "Beyond PC games, I build fluid HTML5 & Canvas games that run natively in any browser. You can play the live demo right below.",
            "btn-fullscreen-game": "Play Fullscreen",
            
            // Stats & CTA Section
            "stat-label-1": "Steam Positive Rating",
            "stat-label-2": "Languages Localized",
            "stat-label-3": "Solo Launch (Months)",
            "stat-label-4": "Shipped Games",
            "stat-label-5": "Avg. Project Budget",
            
            // Freelance CTA
            "cta-subtitle": "// WORK WITH US",
            "cta-title": "Let's Build Your Game or AI Tool",
            "cta-desc": "Need Unity development, Steamworks integration, prototyping, or AI tools? Get in touch directly via my professional Upwork profile.",
            "cta-btn-upwork": "View Upwork Profile",
            "cta-btn-fiverr": "View Fiverr Profile",

            // Footer
            "footer-copy": "© 2026 Galaverse Creations. All rights reserved.",
            "footer-privacy": "Privacy Policy"
        }
    };

    // ==========================================
    // 2. Custom Assistant Configurator State
    // ==========================================
    const assistantConfig = {
        tr: {
            name: "Galaverse Creations",
            desc: "işletmeler için yapay zeka entegrasyonu, otomasyon çözümleri ve interaktif dijital deneyimler geliştiriyoruz.",
            product: "Yapay Zeka Danışmanlık ve Kurulum Hizmeti - $2,500"
        },
        en: {
            name: "Galaverse Creations",
            desc: "we develop artificial intelligence integration, automation solutions, and interactive digital experiences for businesses.",
            product: "AI Consulting and Setup Service - $2,500"
        }
    };

    const demoTemplate = {
        tr: {
            name: "Galaverse Mobil Acentesi",
            desc: "işletmenizin satışlarını artırmak ve müşteri bağlılığı sağlamak için yüksek performanslı mobil uygulamalar tasarlıyoruz.",
            product: "Özel Mobil Uygulama Paketi - $5,000"
        },
        en: {
            name: "Galaverse Mobile Agency",
            desc: "we design high-performance mobile applications to boost your business sales and drive customer loyalty.",
            product: "Custom Mobile App Package - $5,000"
        }
    };

    let currentLang = localStorage.getItem('galaverse-lang') || 'en';

    // Populate the configurator inputs with current values
    function syncConfigInputs() {
        const inputName = document.getElementById('cfg-name');
        const inputDesc = document.getElementById('cfg-desc');
        const inputProduct = document.getElementById('cfg-product');

        if (inputName) inputName.value = assistantConfig[currentLang].name;
        if (inputDesc) inputDesc.value = assistantConfig[currentLang].desc;
        if (inputProduct) inputProduct.value = assistantConfig[currentLang].product;
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('galaverse-lang', lang);
        
        // Update language switcher buttons active class
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key] !== undefined) {
                const val = translations[lang][key];
                
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = val;
                } else if (element.classList.contains('preserve-html') || key === 'hero-title') {
                    element.innerHTML = val;
                } else {
                    element.textContent = val;
                }
            }
        });

        // Update html lang attribute
        document.documentElement.setAttribute('lang', lang);

        // Sync configurator fields
        syncConfigInputs();
    }

    // Set initial language and sync fields
    setLanguage(currentLang);

    // Language Toggle Click Event
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.currentTarget.getAttribute('data-lang');
            if (selectedLang !== currentLang) {
                setLanguage(selectedLang);
            }
        });
    });


    // ==========================================
    // 3. Navigation Menu Scroll Effect
    // ==========================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 4. Mobile Menu Toggle
    // ==========================================
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });

    // ==========================================
    // 5. Scrollspy (Active Link Highlighting)
    // ==========================================
    const sections = document.querySelectorAll('header, section');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // Scroll offset correction
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================
    // 6. Intelligent Assistant Chat & Configurator Logic
    // ==========================================
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatBody = document.getElementById('chat-body');
    const btnDemo = document.getElementById('cfg-btn-demo');
    const btnApply = document.getElementById('cfg-btn-apply');
    const toast = document.getElementById('cfg-toast');

    // Show toast notification
    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }

    // Apply configuration inputs
    if (btnApply) {
        btnApply.addEventListener('click', () => {
            const nameVal = document.getElementById('cfg-name').value.trim();
            const descVal = document.getElementById('cfg-desc').value.trim();
            const prodVal = document.getElementById('cfg-product').value.trim();

            assistantConfig[currentLang].name = nameVal || (currentLang === 'tr' ? "Galaverse Creations" : "Galaverse Creations");
            assistantConfig[currentLang].desc = descVal || (currentLang === 'tr' ? "yapay zeka otomasyon ve özel yazılım çözümleri sunan bir stüdyodur." : "is a studio providing artificial intelligence automation and custom software solutions.");
            assistantConfig[currentLang].product = prodVal || (currentLang === 'tr' ? "Hizmet Paketleri - Detaylar için iletişime geçin" : "Service Packages - Contact for details");

            const successMsg = currentLang === 'tr' ? "Sistem Güncellendi!" : "System Updated!";
            showToast(successMsg);
        });
    }

    // Load Demo Template
    if (btnDemo) {
        btnDemo.addEventListener('click', () => {
            assistantConfig[currentLang].name = demoTemplate[currentLang].name;
            assistantConfig[currentLang].desc = demoTemplate[currentLang].desc;
            assistantConfig[currentLang].product = demoTemplate[currentLang].product;

            syncConfigInputs();

            const demoMsg = currentLang === 'tr' ? "Şablon Yüklendi!" : "Template Loaded!";
            showToast(demoMsg);
        });
    }

    // Helper function to get current time string (HH:MM)
    function getCurrentTimeString() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    // Scroll chat body to bottom
    function scrollToBottom() {
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    let isChatLoading = false;

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (isChatLoading) return;
        
        let messageText = chatInput.value.trim();
        if (!messageText) return;

        // Truncate to maximum 500 characters to prevent API misuse
        if (messageText.length > 500) {
            messageText = messageText.substring(0, 500);
        }

        const userLabel = currentLang === 'tr' ? 'Kullanıcı' : 'User';
        const systemLabel = currentLang === 'tr' ? 'Sistem' : 'System';
        const sendBtn = chatForm.querySelector('.chat-send-btn');

        try {
            isChatLoading = true;
            chatInput.disabled = true;
            if (sendBtn) sendBtn.disabled = true;

            // User Message HTML
            const userMessageHTML = `
                <div class="chat-message user">
                    <div class="message-avatar">
                        <span class="user-avatar-icon">U</span>
                    </div>
                    <div class="message-wrapper">
                        <div class="message-content">
                            <p>${escapeHTML(messageText)}</p>
                        </div>
                        <span class="message-time"><span>${userLabel}</span> • ${getCurrentTimeString()}</span>
                    </div>
                </div>
            `;

            // Append user message
            chatBody.insertAdjacentHTML('beforeend', userMessageHTML);
            chatInput.value = '';
            scrollToBottom();

            // Show typing indicator / loading message
            const loadingText = currentLang === 'tr' ? 'Veri işleniyor...' : 'System processing...';
            const loadingIndicatorHTML = `
                <div class="chat-message bot" id="loading-indicator">
                    <div class="message-avatar">
                        <img src="images/ai_avatar.png" alt="Galaverse AI Avatar">
                    </div>
                    <div class="message-wrapper">
                        <div class="message-content" style="border-color: rgba(224, 157, 88, 0.3);">
                            <div class="typing-indicator" style="display: flex; align-items: center; gap: 8px;">
                                <span class="typing-dot" style="background-color: var(--accent); margin: 0;"></span>
                                <span class="typing-dot" style="background-color: var(--accent); margin: 0;"></span>
                                <span class="typing-dot" style="background-color: var(--accent); margin: 0;"></span>
                                <span style="font-family: var(--font-mono); font-size: 11px; color: var(--accent); margin-left: 8px; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block;">
                                    ${loadingText}
                                </span>
                            </div>
                        </div>
                        <span class="message-time"><span>${systemLabel}</span> • ${getCurrentTimeString()}</span>
                    </div>
                </div>
            `;

            chatBody.insertAdjacentHTML('beforeend', loadingIndicatorHTML);
            scrollToBottom();

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

            // Model Seçimi: En güncel ve hızlı sürüm olan 'gemini-2.5-flash' modelini kullanıyoruz.
            const modelName = 'gemini-2.5-flash'; 

            // Şirket Özelleştirme Verilerini Al
            const companyName = assistantConfig[currentLang].name;
            const companyDesc = assistantConfig[currentLang].desc;
            const companyProduct = assistantConfig[currentLang].product;

            // Yapay Zekaya Gönderilecek Sistem & Kullanıcı Promptu
            let systemPrompt = "";
            if (currentLang === 'tr') {
                systemPrompt = `Sen Galaverse Creations tarafından geliştirilmiş Kurumsal Akıllı Asistan'sın.
Şu an test modundasın ve şu şirket bilgilerini temsil ediyorsun:
- Şirket Adı: ${companyName}
- Şirket Açıklaması: ${companyDesc}
- Sunduğu Ürün/Hizmet ve Fiyatı: ${companyProduct}

Kullanıcıdan gelen sorulara bu şirket kimliğiyle cevap vermelisin. Kısa, net, samimi ama profesyonel ol. Cevaplarında fantastik/sihir temalarından uzak dur, endüstriyel ve teknolojik bir üslup kullan.

Kullanıcının sorusu: ${messageText}`;
            } else {
                systemPrompt = `You are the Enterprise Smart Assistant developed by Galaverse Creations.
You are currently in test mode representing the following company:
- Company Name: ${companyName}
- Company Description: ${companyDesc}
- Offered Product/Service & Price: ${companyProduct}

You must answer user questions based on this company identity. Keep it brief, clear, and highly professional. Avoid fantasy/magic themes; maintain an industrial and technological tone.

User's question: ${messageText}`;
            }

            // POST request via transparent proxy
            const response = await fetch(`https://galaverse-ai-proxy.merttrem1181.workers.dev/v1beta/models/${modelName}:generateContent`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: systemPrompt
                        }]
                    }]
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            // Remove loading indicator
            const indicatorEl = document.getElementById('loading-indicator');
            if (indicatorEl) {
                indicatorEl.remove();
            }

            let botReplyText = "";
            if (data.candidates && data.candidates.length > 0 && 
                data.candidates[0].content && 
                data.candidates[0].content.parts && 
                data.candidates[0].content.parts.length > 0) {
                botReplyText = data.candidates[0].content.parts[0].text;
            } else if (data.error) {
                botReplyText = `[SYS_ERR] Google API Hatası: ${data.error.message}`;
            } else {
                botReplyText = currentLang === 'tr' ? 'Cevap alınamadı.' : 'No reply received.';
            }

            // Bot Response HTML
            const botResponseHTML = `
                <div class="chat-message bot">
                    <div class="message-avatar">
                        <img src="images/ai_avatar.png" alt="Galaverse AI Avatar">
                    </div>
                    <div class="message-wrapper">
                        <div class="message-content">
                            <p>${formatReplyText(botReplyText)}</p>
                        </div>
                        <span class="message-time"><span>${systemLabel}</span> • ${getCurrentTimeString()}</span>
                    </div>
                </div>
            `;

            chatBody.insertAdjacentHTML('beforeend', botResponseHTML);
            scrollToBottom();

        } catch (error) {
            console.error('Fetch error:', error);

            // Remove loading indicator
            const indicatorEl = document.getElementById('loading-indicator');
            if (indicatorEl) {
                indicatorEl.remove();
            }

            let errorText = "";
            if (error.name === 'AbortError') {
                errorText = currentLang === 'tr'
                    ? 'Bağlantı Zaman Aşımı: Güvenli tünel yanıt vermedi. [ERR_CONN_TIMEOUT]'
                    : 'Connection Timeout: Secure tunnel failed to respond. [ERR_CONN_TIMEOUT]';
            } else {
                errorText = currentLang === 'tr'
                    ? 'Bağlantı tüneli koptu. Lütfen daha sonra tekrar deneyin.'
                    : 'Secure connection interrupted. Please try again later.';
            }

            // Error Message HTML (Amber/Red themed)
            const errorResponseHTML = `
                <div class="chat-message bot error-msg">
                    <div class="message-avatar">
                        <img src="images/ai_avatar.png" alt="Galaverse AI Avatar">
                    </div>
                    <div class="message-wrapper">
                        <div class="message-content" style="border-color: #ef4444; background: rgba(239, 68, 68, 0.05); color: #f87171; font-family: var(--font-mono); font-size: 12px; line-height: 1.4;">
                            <p><strong>[SYS_ERR]</strong> ${errorText}</p>
                        </div>
                        <span class="message-time"><span>${systemLabel}</span> • ${getCurrentTimeString()}</span>
                    </div>
                </div>
            `;

            chatBody.insertAdjacentHTML('beforeend', errorResponseHTML);
            scrollToBottom();
        } finally {
            isChatLoading = false;
            chatInput.disabled = false;
            if (sendBtn) sendBtn.disabled = false;
            chatInput.focus();
        }
    });

    // Helper to format bot responses supporting **bold** and newlines
    function formatReplyText(text) {
        let escaped = escapeHTML(text);
        // Convert **bold** to <strong>bold</strong>
        escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Convert linebreaks
        return escaped.replace(/\n/g, '<br>');
    }

    // Helper to prevent HTML injection in chat
    function escapeHTML(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // ==========================================
    // Theme Toggle Handler
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentActive = document.documentElement.getAttribute('data-theme') || 'light';
            const targetTheme = currentActive === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('galaverse-theme', targetTheme);
        });
    }

    // ==========================================
    // 6. Animated Stat Counters (Scroll Triggered)
    // ==========================================
    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        if (isNaN(target)) return;

        const duration = 1600;
        const start = performance.now();
        el.dataset.animated = 'true';

        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            el.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = target + suffix;
            }
        }
        requestAnimationFrame(tick);
    }

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.dataset.animated !== 'true') {
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.stat-number[data-target]').forEach(el => statObserver.observe(el));

    // ==========================================
    // 7. 3D Card Parallax Tilt & Mouse Spotlight
    // ==========================================
    const tiltCards = document.querySelectorAll('.project-card, .service-card, .assistant-container');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate tilt angle (-6 to +6 deg)
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
            card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });

    // ==========================================
    // 8. Lightbox Image Modal
    // ==========================================
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxOverlay = document.getElementById('lightbox-overlay');

    document.querySelectorAll('.project-img-wrapper').forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            const img = wrapper.querySelector('.project-img');
            const card = wrapper.closest('.project-card');
            const title = card ? card.querySelector('.project-title')?.textContent : '';

            if (img && lightboxModal) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || title;
                if (lightboxCaption) lightboxCaption.textContent = title;
                lightboxModal.classList.add('active');
                lightboxModal.setAttribute('aria-hidden', 'false');
                lightboxModal.removeAttribute('inert');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('active');
        lightboxModal.setAttribute('aria-hidden', 'true');
        lightboxModal.setAttribute('inert', '');
        document.body.style.overflow = '';
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ==========================================
    // 9. Web Audio API Subtle UI Sound FX
    // ==========================================
    let audioCtx = null;
    let soundEnabled = localStorage.getItem('galaverse-sound') === 'enabled';

    const soundToggle = document.getElementById('sound-toggle');
    const soundOnIcon = soundToggle?.querySelector('.sound-on');
    const soundOffIcon = soundToggle?.querySelector('.sound-off');

    function updateSoundUI() {
        if (!soundToggle) return;
        if (soundEnabled) {
            if (soundOnIcon) soundOnIcon.style.display = 'block';
            if (soundOffIcon) soundOffIcon.style.display = 'none';
            soundToggle.classList.add('active');
        } else {
            if (soundOnIcon) soundOnIcon.style.display = 'none';
            if (soundOffIcon) soundOffIcon.style.display = 'block';
            soundToggle.classList.remove('active');
        }
    }
    updateSoundUI();

    if (soundToggle) {
        soundToggle.addEventListener('click', () => {
            soundEnabled = !soundEnabled;
            localStorage.setItem('galaverse-sound', soundEnabled ? 'enabled' : 'disabled');
            updateSoundUI();
            if (soundEnabled) playClickSound(600, 0.05);
        });
    }

    function playClickSound(freq = 480, duration = 0.04) {
        if (!soundEnabled) return;
        try {
            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (audioCtx.state === 'suspended') audioCtx.resume();

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(freq * 0.4, audioCtx.currentTime + duration);

            gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            // AudioContext fallback
        }
    }

    // Attach subtle sound FX to interactive buttons & links
    document.querySelectorAll('.btn, .nav-link, .lang-btn, .theme-toggle, .btn-card, .btn-steam').forEach(btn => {
        btn.addEventListener('mouseenter', () => playClickSound(520, 0.02));
        btn.addEventListener('click', () => playClickSound(380, 0.05));
    });
});


