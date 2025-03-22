function downloadImage(device) {
    // تحديد مسار الصورة التي تريد تحميلها
    // استبدل 'path-to-download-image.jpg' بمسار الصورة الفعلي (مثل الصورة التي أرسلتها)
    let imageUrl = 'path-to-download-image.jpgC:\Users\HTC\OneDrive\Desktop\index\blur.ico'; // حدّد هنا مسار الصورة التي تحتوي على زر التحميل ومعلومات اللعبة

    // إنشاء عنصر رابط مؤقت
    const link = document.createElement('a');
    link.href = imageUrl;

    // اقتراح اسم ملف للتحميل (اختياري)
    link.download = `CAR_Driving_Drift_${device}.jpg`;

    // النقر البرمجي على الرابط لتفعيل التحميل
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}