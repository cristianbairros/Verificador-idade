function verificar(){
    var fotos = [src ='homem-crianca.png',src ='homem-jovem.png',src ='homem-adulto.png',src ='homem-idoso.png'];
    fotos.push(src ='mulher-crianca.png');
    fotos.push(src ='mulher-jovem.png');
    fotos.push(src ='mulher-adulta.png');
    fotos.push(src ='mulher-idosa.png');
    var data = new Date()
    var ano = data.getFullYear()
    var anof = parseInt(document.querySelector('#txtano').value)
    var res = document.querySelector('.paragrafo-resultado')
    var sexo = document.getElementsByName('sexo')
    var corpo = document.querySelector('.corpo')
    
    if(anof.value == 0 || anof > ano ){
    window.alert = ('erro')
    }else{
    var idade = ano - anof
    var genero = ''  
    var img = document.querySelector('#foto') 
    if(sexo[0].checked){
        genero = 'HOMEM'
        if(idade >= 0 && idade <=10 ){
            img.src = fotos[0]
            res.innerHTML = ` Detectamos um ${genero} de ${idade} anos `
            corpo.style.background = '#79aef2'
        }else if(idade < 21){
            img.src = fotos[1] 
            res.innerHTML = ` Detectamos um ${genero} de ${idade} anos `
            corpo.style.background = '#5080bf'
        }else if(idade < 50){
            img.src = fotos[2]
            res.innerHTML = ` Detectamos um ${genero} de ${idade} anos `
            corpo.style.background = '#30588c'
        } else{
            img.src = fotos[3] 
            res.innerHTML = ` Detectamos um ${genero} de ${idade} anos `
            corpo.style.background = '#274873'
        }

      } else if(sexo[1].checked){
        genero = 'MULHER'
        if(idade >= 0 && idade <=10 ){
            img.src = fotos[4]
            res.innerHTML = ` Detectamos uma ${genero} de ${idade} anos `
            corpo.style.background = '#FEA3B5'
        }else if(idade < 25){
            img.src = fotos[5]
            res.innerHTML = ` Detectamos uma ${genero} de ${idade} anos ` 
            corpo.style.background = '#FE7893' 
        }else if(idade < 50){
            img.src = fotos[6]
            res.innerHTML = ` Detectamos uma ${genero} de ${idade} anos `
            corpo.style.background = '#C5626E' 
        } else{
            img.src = fotos[7]
            res.innerHTML = ` Detectamos uma ${genero} de ${idade} anos `
            corpo.style.background = '#B84050' 
        }


      }
     













    }
}





















