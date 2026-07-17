// دالة التحقق من رقم الجلوس وعرض النتيجة
function checkResult() {
    const seatNumber = document.getElementById('seatNumber').value;
    const errorMsg = document.getElementById('error-msg');
    const resultArea = document.getElementById('resultArea');
    const heroSection = document.querySelector('.hero');

    if (seatNumber === "265948") {
        // إخفاء رسالة الخطأ إن وجدت
        errorMsg.innerText = "";
        
        // تقليل حجم قسم البحث
        heroSection.style.height = "30vh";
        heroSection.style.transition = "height 0.5s ease";
        
        // إظهار قسم النتيجة
        resultArea.classList.remove('hidden');
        
        // تفعيل الأنيميشن للعناصر الظاهرة فوراً
        setTimeout(initScrollAnimations, 100);
        
        // التمرير التلقائي للأسفل قليلاً
        window.scrollBy({ top: 300, behavior: 'smooth' });

    } else {
        errorMsg.innerText = "رقم الجلوس غير صحيح. الرجاء التأكد من الرقم (265948).";
        resultArea.classList.add('hidden');
        heroSection.style.height = "60vh";
    }
}

// دالة تفعيل الأنيميشن عند التمرير (Scroll) باستخدام Intersection Observer
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 }); // يظهر العنصر عندما يظهر 10% منه على الشاشة

    elements.forEach(el => observer.observe(el));
}
