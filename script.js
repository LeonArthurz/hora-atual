function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var msg2 = document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `<strong>Agora são ${hora} horas e ${minutos} minutos!</strong>`
    if(hora >= 6 && hora <= 17){
        img.src = './imagens/manha.jpg'
        document.body.style.background = '#D49375'
        if(hora >= 6 && hora <= 11){
            msg2.innerHTML = "<strong>Bom dia!</strong>"
        }
        else if(hora >= 12 && hora <= 17){
            msg2.innerHTML = "<strong>Boa tarde!</strong>"
        }

    }
    else if(hora >= 17 && hora < 19){
        img.src = './imagens/tarde.jpg'
        document.body.style.background = '#850200'
        if(hora >= 18 && hora < 19){
            msg2.innerHTML = "<strong>Bom fim de tarde!</strong>"
        }

    }
    else if(hora >= 19 && hora <= 23){
        img.src = './imagens/noite.jpg'
        document.body.style.background = '#192F3C'
        if(hora >=19 && hora <= 23){
            msg2.innerHTML = "<strong>Boa noite!</strong>"
        }
    }
    else if(hora >= 0 && hora < 6){
        img.src = './imagens/noite.jpg'
        document.body.style.background = '#192F3C'
        if(hora >=0 && hora <= 6){
            msg2.innerHTML = "<strong>Bom dia!</strong>"
        }
    }

    }

