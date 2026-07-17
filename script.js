document.addEventListener("DOMContentLoaded", function() {
    // تحديد جميع العناصر التي تحتوي على كلاس scroll-anim
    const animatedSections = document.querySelectorAll('.scroll-anim');

    // إعداد الـ Intersection Observer
    const observerOptions = {
        root: null, // مراقبة بناءً على نافذة العرض (Viewport)
        threshold: 0.2, // تشغيل الأنيميشن عندما يظهر 20% من العنصر
        rootMargin: "0px"
    };

    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // إذا كان العنصر مرئياً على الشاشة
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // إيقاف مراقبة العنصر بعد ظهوره لمرة واحدة
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // تطبيق المراقب على كل قسم
    animatedSections.forEach(section => {
        sectionObserver.observe(section);
    });
});
