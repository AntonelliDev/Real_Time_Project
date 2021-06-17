    var interval = setInterval(() => {carregar()
    },1000);

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `It's ${hora}:${minuto}:${segundo} right now!`
    if (hora >= 0 && hora < 12) {
        //Good Morning
        img.src = 'fotomanha.png'
        document.body.style.background = '#fcf4a3'
    }
    else if (hora >= 12 && hora <= 18) {
        //Good Evening
        img.src = 'fototarde.png'
        document.body.style.background = '#ff9d5c'
    }
    else {
        //Good Night
        img.src = 'fotonoite.png'
        document.body.style.background = '#7c5295'
    }
}

