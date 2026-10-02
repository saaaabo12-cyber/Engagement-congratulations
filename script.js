document.addEventListener("DOMContentLoaded", () => {
    const giftOverlay = document.getElementById("gift-overlay");
    const scene1 = document.getElementById("scene-1");
    const scene2 = document.getElementById("scene-2");
    const scene3 = document.getElementById("scene-3");

    // 1. فتح الهدية في البداية
    setTimeout(() => {
        giftOverlay.classList.add("open");
        setTimeout(() => {
            giftOverlay.classList.add("fade-out");
            startScene1(); // بدء المشهد الأول
        }, 1100);
    }, 800);

    // --- المشهد 1: القلب والأجنحة ---
    function startScene1() {
        scene1.classList.add("active");
        const container = scene1.querySelector(".winged-heart-container");
        
        // هبوط القلب بالأجنحة
        setTimeout(() => {
            container.classList.add("fly-in");
        }, 100);

        // الثبات لقرائته ثم الطيران للأعلى
        setTimeout(() => {
            container.classList.remove("fly-in");
            container.classList.add("fly-away");

            setTimeout(() => {
                scene1.classList.remove("active");
                startScene2(); // الانتقال للمشهد الثاني
            }, 1200);
        }, 4500); // مدة كافية لقراءة التهنئة الأولى
    }

    // --- المشهد 2: القلوب الثلاثة والإنفجار ---
    function startScene2() {
        scene2.classList.add("active");
        const container = scene2.querySelector(".three-hearts-container");

        // دخول القلوب الثلاثة من الاتجاهات
        setTimeout(() => {
            container.classList.add("enter");
        }, 100);

        // ثبات لقراءة التهنئة ثم الاندماج والإنفجار
        setTimeout(() => {
            container.classList.add("merge");

            setTimeout(() => {
                triggerConfettiExplosion(); // إطلاق الأشرطة
            }, 700);

            setTimeout(() => {
                scene2.classList.remove("active");
                startScene3(); // الانتقال للمشهد الثالث والأخير
            }, 1800);
        }, 4500);
    }

    // دالة إنشاء انفجار شرائط الاحتفال
    function triggerConfettiExplosion() {
        const burstContainer = document.getElementById("confetti-burst");
        const colors = ['#ffd700', '#ffb6c1', '#db7093', '#e6e8fa', '#bf953f'];

        for (let i = 0; i < 40; i++) {
            const ribbon = document.createElement("div");
            ribbon.classList.add("confetti-ribbon");
            ribbon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // زوايا ومسافات الانفجار العشوائية
            const angle = Math.random() * Math.PI * 2;
            const distance = 120 + Math.random() * 150;
            const dx = `${Math.cos(angle) * distance}px`;
            const dy = `${Math.sin(angle) * distance}px`;

            ribbon.style.setProperty('--dx', dx);
            ribbon.style.setProperty('--dy', dy);
            
            burstContainer.appendChild(ribbon);
        }
    }

    // --- المشهد 3: شلال الحبال واسم فاطمة عادل ---
    function startScene3() {
        scene3.classList.add("active");
        const wishText = "أسأل الله أن يبارك خطوبتكما ويجعلها فاتحة خير وسعادة دائمين";
        const words = wishText.split(" ");
        const textContainer = document.getElementById("waterfallText");
        const brideName = document.getElementById("brideName");

        // نزول الكلمات بالحبال كلمة كلمة
        words.forEach((word, index) => {
            const span = document.createElement("span");
            span.innerText = word;
            span.classList.add("hanging-word");
            span.style.animationDelay = `${index * 0.3}s`;
            textContainer.appendChild(span);
        });

        // نزول الاسم المهيب في النهاية
        const totalWaterfallTime = words.length * 300 + 600;
        setTimeout(() => {
            brideName.classList.add("show-majestical");
        }, totalWaterfallTime);
    }
});
