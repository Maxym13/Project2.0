// Додав функцію для відображення модального вікна "Контакти"
function showContacts() {
    document.getElementById("contacts-modal").style.display = "block";
}

// Додав функцю для закриття модального вікна "Контакти"
function closeContacts() {
    document.getElementById("contacts-modal").style.display = "none";
}

// Додав функцію для відображення модального вкна "Про мене"
function showAboutMe() {
    window.location.href = "index1.html";
}

// Функція для закриття модального вікна "Про мене"
function closeAboutModal() {
    document.getElementById("about-modal").style.display = "none";
}

// Функція для відображення модалного вікна "Замовити послугу"
function showOrderForm() {
    document.getElementById("order-modal").style.display = "block";
}

// Функція для закриття модального вікна "Замовити послугу"
function closeOrderForm() {
    document.getElementById("order-modal").style.display = "none";
}

// Додав обробника події для кнопки "Про мене"
document.getElementById('about').addEventListener('click', showAboutMe);

// Додав обробника події для кнопки "Контакти"
document.getElementById('contacts').addEventListener('click', showContacts);

// Додав обробника події для кнопки "Головна"
document.getElementById('home').addEventListener('click', function() {
    window.location.href = "index.html";
});

// Додав обробник події для кнопки відкриття модального вікна "Замовити послугу"
document.getElementById('openOrderFormButton').addEventListener('click', showOrderForm);

// Додав обробник події для зображення профілю
document.getElementById('profileImage').addEventListener('click', showOrderForm);

// Додав обробник події для додаткового зображення
document.querySelector('.extra-img').addEventListener('click', showOrderForm);

// Додав обробник події для кожної послуги
document.querySelectorAll('.service-img').forEach(item => {
    item.addEventListener('click', showOrderForm);
});
