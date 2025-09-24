const langSelect = document.getElementById('language');

langSelect.addEventListener('change', () => {
    const value = langSelect.value;

    // перенаправляем на нужный файл
    if (value === "ru") {
        window.location.href = "index.html";       // русская версия
    } else if (value === "en-US") {
        window.location.href = "indexen.html";    // английская версия
    } else if (value === "he") {
        window.location.href = "indexhe.html";    // иврит версия
    }
});