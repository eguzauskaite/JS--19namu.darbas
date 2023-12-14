// Duomenis pasiimsime iš: https://polar-chartreuse-silverfish.glitch.me/

// 1. Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
// 2. Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
// 3. Pridėkite prie lentelės (tarp id ir name) nuotrauką.
// 4.Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
// 5. Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi.

// [{"id":1,"name":"Alice Johnson","city":"New York","fav_color":"Blue","vip":true,"image":"https://robohash.org/Alice Johnson?size=200x200"},{"id":2,"name":"Bob Smith","city":"Los Angeles","fav_color":"Green","vip":false,"image":"https://robohash.org/Bob Smith?size=200x200"},{"id":3,"name":"Charlie Brown","city":"Chicago","fav_color":"Red","vip":true,"image":"https://robohash.org/Charlie Brown?size=200x200"},{"id":4,"name":"Diana Ross","city":"Houston","fav_color":"Purple","vip":false,"image":"https://robohash.org/Diana Ross?size=200x200"},{"id":5,"name":"Ethan Hunt","city":"Phoenix","fav_color":"Yellow","vip":true,"image":"https://robohash.org/Ethan Hunt?size=200x200"},{"id":6,"name":"Fiona Gallagher","city":"Miami","fav_color":"Orange","vip":false,"image":"https://robohash.org/Fiona Gallagher?size=200x200"},{"id":7,"name":"George Lucas","city":"San Francisco","fav_color":"Black","vip":true,"image":"https://robohash.org/George Lucas?size=200x200"},{"id":8,"name":"Hannah Abbott","city":"Seattle","fav_color":"Pink","vip":false,"image":"https://robohash.org/Hannah Abbott?size=200x200"},{"id":9,"name":"Ian Malcolm","city":"Boston","fav_color":"Brown","vip":true,"image":"https://robohash.org/Ian Malcolm?size=200x200"},{"id":10,"name":"Julia Roberts","city":"Austin","fav_color":"White","vip":false,"image":"https://robohash.org/Julia Roberts?size=200x200"}]


const data = [{"id":1,"name":"Alice Johnson","city":"New York","fav_color":"Blue","vip":true,"image":"https://robohash.org/Alice Johnson?size=200x200"},{"id":2,"name":"Bob Smith","city":"Los Angeles","fav_color":"Green","vip":false,"image":"https://robohash.org/Bob Smith?size=200x200"},{"id":3,"name":"Charlie Brown","city":"Chicago","fav_color":"Red","vip":true,"image":"https://robohash.org/Charlie Brown?size=200x200"},{"id":4,"name":"Diana Ross","city":"Houston","fav_color":"Purple","vip":false,"image":"https://robohash.org/Diana Ross?size=200x200"},{"id":5,"name":"Ethan Hunt","city":"Phoenix","fav_color":"Yellow","vip":true,"image":"https://robohash.org/Ethan Hunt?size=200x200"},{"id":6,"name":"Fiona Gallagher","city":"Miami","fav_color":"Orange","vip":false,"image":"https://robohash.org/Fiona Gallagher?size=200x200"},{"id":7,"name":"George Lucas","city":"San Francisco","fav_color":"Black","vip":true,"image":"https://robohash.org/George Lucas?size=200x200"},{"id":8,"name":"Hannah Abbott","city":"Seattle","fav_color":"Pink","vip":false,"image":"https://robohash.org/Hannah Abbott?size=200x200"},{"id":9,"name":"Ian Malcolm","city":"Boston","fav_color":"Brown","vip":true,"image":"https://robohash.org/Ian Malcolm?size=200x200"},{"id":10,"name":"Julia Roberts","city":"Austin","fav_color":"White","vip":false,"image":"https://robohash.org/Julia Roberts?size=200x200"}]

fetch('https://polar-chartreuse-silverfish.glitch.me/')

.then(response => response.json())
.then(data => processData(data))


function processData(data) {
const tableBody = document.querySelector('#dataTable tbody')

data.forEach(person => {
  
    const [firstName, lastName] = person.name.split(' ')
 
    const row = document.createElement('tr')
    row.innerHTML = `
        <td>${person.id}</td>
        <td><img src="${person.photo}" alt="${firstName}"></td>
        <td>${firstName} ${lastName}</td>
        <td>${person.city}</td>
        <td>${person.fav_color}</td>
    `

    tableBody.appendChild(row)
    console.log('Inserted row with photo:', person.photo)
})

const photoHeader = document.getElementById('photoHeader')
const firstPhoto = tableBody.querySelector('tr img')
if (firstPhoto) {
    photoHeader.innerHTML = 'Photo'
    console.log('Photo header updated')
}
}

const vipCheckbox = document.getElementById('vipCheckbox')
vipCheckbox.addEventListener('change', filterVIP)

function filterVIP() {

const rows = document.querySelectorAll('#dataTable tbody tr')
rows.forEach(row => {
    const isVIP = row.querySelector('td:nth-child(3)').textContent.includes('VIP')
    row.style.display = vipCheckbox.checked ? (isVIP ? '' : 'none') : ''
});

console.log('VIP filter applied')
}

function filterTable() {

const searchInput = document.getElementById('searchInput')
const searchValue = searchInput.value.toLowerCase()

const rows = document.querySelectorAll('#dataTable tbody tr')
rows.forEach(row => {
    const fullName = row.querySelector('td:nth-child(3)').textContent.toLowerCase()
    row.style.display = fullName.includes(searchValue) ? '' : 'none'
})

console.log('Table filtered by search:', searchValue)
}  