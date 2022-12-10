let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

function mapa(){
    var mapa = document.getElementById('mapa').value;
    var mapinha = document.getElementById('mapinha')

    if (mapa == 'selecione'){
        mapinha.innerHTML = ''
    }
    else if(mapa == 'alegria'){
        mapinha.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.44104161389!2d-51.32514438436281!3d-30.13880414263346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95198043b6495555%3A0xf00e7f43d22c86!2zUmVtb8Onw6NvIGRlIEVudHVsaG9zIGUgRGVtb2xpw6fDtWVzLCBUZWxlIEVudHVsaG8!5e0!3m2!1spt-BR!2sbr!4v1667745237520!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

    }
    else if(mapa == 'alvorada'){
        mapinha.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.6148717800834!2d-51.32216238436282!3d-30.1338320424016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519804726fecf79%3A0x1bcc6651910eb5ce!2sVida%20Desenvolvimento%20Ecol%C3%B3gico%20Unidade%20Guaiba!5e0!3m2!1spt-BR!2sbr!4v1667745460214!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
    else if (mapa == 'centro'){
        mapinha.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.515745684629!2d-51.321850884363386!3d-30.108052241199672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197e0a7c6a86ab%3A0x5c388428772eca33!2sGUA%C3%8DBA%20ENTULHOS%20-%20Loca%C3%A7%C3%A3o%20de%20Ca%C3%A7amba%20em%20Gua%C3%ADba%20RS%20-%20Aluguel%20de%20Ca%C3%A7ambas%20para%20Entulho%20em%20Gua%C3%ADba%20RS!5e0!3m2!1spt-BR!2sbr!4v1667745513901!5m2!1spt-BR!2sbr" width="400" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.483465127077!2d-51.32601568436342!3d-30.108976341242787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197f8b7a148155%3A0xaa728a99123ed6b3!2sTrans%20Santos%20Entulhos!5e0!3m2!1spt-BR!2sbr!4v1667745721097!5m2!1spt-BR!2sbr" width="400" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">'
    }
    else if (mapa == 'columbia_city'){
        mapinha.innerHTML = ''
        window.alert("Desculpe, infelizmente o bairro selecionado ainda não possui ecoponto cadastrado! Tente buscar por bairros próximos.")
    }
    else if (mapa == 'coronel_nassuca'){
        mapinha.innerHTML = ''
        window.alert("Desculpe, infelizmente o bairro selecionado ainda não possui ecoponto cadastrado! Tente buscar por bairros próximos.")
    }
    else if (mapa == 'ermo'){
        mapinha.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27605.010139787362!2d-51.364568460928695!3d-30.13350606306385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951981959ef3f8bf%3A0x5d7a02071613ca34!2sGua%C3%ADba%20Entulho!5e0!3m2!1spt-BR!2sbr!4v1667744771069!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
    else if (mapa == 'florida'){
        mapinha.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.1394158740904!2d-51.33454578436243!3d-30.147429843035898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95198065c6401dcd%3A0xec1b2e6f8102a43d!2sReciclagem%20Compro%20Sucata%20Mmj!5e0!3m2!1spt-BR!2sbr!4v1667745340641!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
    else if (mapa == 'industrial_guaiba'){
        mapinha.innerHTML = ''
        window.alert("Desculpe, infelizmente o bairro selecionado ainda não possui ecoponto cadastrado! Tente buscar por bairros próximos.")
    }
    else if (mapa == 'jardim_dos_lagos'){
        mapinha.innerHTML = ''
        window.alert("Desculpe, infelizmente o bairro selecionado ainda não possui ecoponto cadastrado! Tente buscar por bairros próximos.")
    }
    else if (mapa == 'moradas_da_colina'){
        mapinha.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.6477427959435!2d-51.3279317843628!3d-30.132891742357724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951981ae3c64071d%3A0x15da5727e188ebd3!2sEcoponto%20-%20Colina!5e0!3m2!1spt-BR!2sbr!4v1667743877672!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
    else if (mapa == 'parque_35'){
        mapinha.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.355553193404!2d-51.33125718436324!3d-30.112637841413267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197f7ccae2a689%3A0xe96014767afd67a0!2sTele%20Entulho%20Neugebauer!5e0!3m2!1spt-BR!2sbr!4v1667746180775!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
    else if (mapa == 'passo_fundo'){
        mapinha.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7102.054605518849!2d-51.35363766474759!3d-30.153232235912824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951981cf8b04f4a9%3A0x354e9982f21ca4af!2sReciclagem%20Primavera!5e0!3m2!1spt-BR!2sbr!4v1667745155312!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
    else if (mapa == 'pedras_brancas'){
        mapinha.innerHTML = ''
        window.alert("Desculpe, infelizmente o bairro selecionado ainda não possui ecoponto cadastrado! Tente buscar por bairros próximos.")
    }
    else if (mapa == 'santa_rita'){
        mapinha.innerHTML = '<<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1565389402326!2d-51.321807384363915!3d-30.08970284034476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197fbc356e8253%3A0xf6bdf288e3c855b2!2sEco%20Ponto!5e0!3m2!1spt-BR!2sbr!4v1667744289653!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
    else if (mapa == 'sao_francisco'){
        mapinha.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7746.2714817503365!2d-51.36889367879352!3d-30.135087624266177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951a2ab647d18d13%3A0x6392ee60a23583b0!2sEcol%C3%B3gica%20Coleta!5e0!3m2!1spt-BR!2sbr!4v1667744490858!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
    else if (mapa == 'vila_iolanda'){
        mapinha.innerHTML = ''
        window.alert("Desculpe, infelizmente o bairro selecionado ainda não possui ecoponto cadastrado! Tente buscar por bairros próximos.")
    }

}

window.addEventListener("load", start)