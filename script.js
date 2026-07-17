document.addEventListener("DOMContentLoaded", () => {
    
    // 1. منطق إظهار النتيجة والكليات
    const showResultBtn = document.getElementById("showResultBtn");
    const resultArea = document.getElementById("resultArea");

    showResultBtn.addEventListener("click", () => {
        // إزالة الكلاس الذي يخفي العنصر ليتم عرضه مع تأثيرات الـ CSS
        resultArea.classList.remove("hidden");
        // تغيير نص الزر أو إخفائه حسب الرغبة
        showResultBtn.style.display = "none";
    });

    // 2. منطق الحركات والـ Animations أثناء السكرول (Intersection Observer)
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("show");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    // تشغيل الدالة مرة عند فتح الموقع لاكتشاف العناصر المرئية في البداية
    handleScrollAnimation();

    // تشغيل الدالة مع كل حركة سكرول
    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });
});
