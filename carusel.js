const fleet1 = document.querySelector(".fleet__wrapper-1 .fleet__images");
const fleet2 = document.querySelector(".fleet__wrapper-2 .fleet__images");

const fleet1Content = Array.from(fleet1.children);
const fleet2Content = Array.from(fleet2.children);

fleet1Content.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    fleet1.appendChild(duplicateNode);
});

fleet2Content.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    fleet2.appendChild(duplicateNode);
});

