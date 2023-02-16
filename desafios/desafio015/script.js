function load() {
var img = window.document.getElementById('image')
var msg = window.document.getElementById('msg')
var body = window.document.getElementById('body')
var head = window.document.getElementById('head')
var good = window.document.getElementById('good')
var date = new Date()
//var time = date.getHours()
var time = 22
msg.innerHTML = `Agora são ${time} horas!`
if (time > 5 && time < 12) {
    //bom dia
    img.src = 'images/day.png'
    good.innerHTML = 'Tenha um Bom Dia!'
} else if (time > 12 && time < 18){
    //boa tarde
    img.src = 'images/afternoon.png'
    body.style.background = 'orange'
    good.innerHTML = 'Tenha uma Boa Tarde!'
} else {
    //boa noite
    img.src = 'images/night.png'
    body.style.background = '#2c2863'
    good.innerHTML = 'Tenha uma Boa Noite!'
}
}
