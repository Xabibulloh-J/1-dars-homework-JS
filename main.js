var userAbout = alert("Eslatma, o'zingiz haqingizda barcha ma'lumotlarni to'ldiring");

var userName = prompt("Ismingizni kiriting:");

var userSurname = prompt("Familiyangizni kiriting:");

var userAge = prompt("Yoshingizni kiriting:");

var userNation = prompt("Millatingizni kiriting:", "o'zbek");

var userEmail = prompt("Email manzilingizni kiriting:", "example@gmail.com");

var userPhoneNumber = prompt("Telefon raqamingizni kiriting:", "+998 (12) 345-67-89");

var userLive = prompt("Hozirda yashayotgan davlatingizni kiriting:", "O'zbekiston" )

var userLocation = prompt("Yashash manzilingizni kiriting:");

var userJob = confirm("Ishlaysizmi?");

var userJobLocation = prompt("Agar ishlasangiz ishlash joyingizni kiriting:");

var userKnowledge = prompt("Bilim darajangizni kiriting:");

var userMarried = confirm("Uylanganmisiz?");

console.log("Foydalanuvchi haqida ma'lumot ↓. " + userAbout + "\nIsmi: " + userName + "\nFamiliyasi: " + userSurname + "\nYoshi: " + userAge + "\nMillati: " + userNation + "\nEmail manzili: " + userEmail + "\nTelefon raqami: " + userPhoneNumber + "\nHozirda yashayotgan davlati: " + userLive + "\nYashash manzili: " + userLocation + "\nIshlash yoki ishlamasligi: " + userJob + "\nIshlash manzili: " + userJobLocation + "\nBilim darajasi: " + userKnowledge + "\nTurmush qurgan yoki qurmaganligi: " + userMarried);