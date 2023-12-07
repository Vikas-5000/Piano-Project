const pianoKeys = document.querySelectorAll('.key')

function playsound(newUrl1){
    new Audio(newUrl1).play()

    }

    pianoKeys.forEach((pianoKey, i) => {
        const newUrl1 = '24/key'+ (i+1) + '.mp3'
        pianoKey.addEventListener('click',() => playsound(newUrl1))
        
    })
