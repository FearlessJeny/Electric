// fetch("gallery/gallery.html")
//     .then(response => response.text())
//     .then(html => {
//         document.getElementById("gallery-box").innerHTML = html;
//     })
//     .catch(err => console.error("Ошибка загрузки галереи:", err));


fetch("gallery/gallery.html")
    .then(response => response.text())
    .then(html => {
        const box = document.getElementById("gallery-box");
        box.innerHTML = html;

        // Находим все скрипты в загруженном HTML
        box.querySelectorAll("script").forEach(oldScript => {
            const newScript = document.createElement("script");
            if (oldScript.src) {
                newScript.src = oldScript.src; // внешний скрипт
            } else {
                newScript.textContent = oldScript.textContent; // встроенный скрипт
            }
            document.body.appendChild(newScript); // запускаем
        });
    })
    .catch(err => console.error("Ошибка загрузки галереи:", err));