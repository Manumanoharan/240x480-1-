function startAD(){
    setTimeout(function(){
        document.getElementById('move').style.transform='translateX(-468px)'
        document.getElementById('move').style.transition='all 2s linear'
        document.getElementById('circle-1').style.transform='translateX(30px)'
        document.getElementById('circle-1').style.transition='all 1.8s ease'
    },1000)
    setTimeout(function(){
        document.getElementById('move').style.transform='translateX(-933px)'
        document.getElementById('move').style.transition='all 2s linear'
        document.getElementById('circle-3').style.transform='translateX(30px)'
        document.getElementById('circle-3').style.transition='all 1.8s ease'
    },4000)
    setTimeout(function(){
        document.getElementById('move').style.transform='translateX(-1396px)'
        document.getElementById('move').style.transition='all 2s linear'
        document.getElementById('circle-5').style.transform='translateX(30px)'
        document.getElementById('circle-5').style.transition='all 1.8s ease'
        document.getElementById('logo-2').style.opacity='0'
    },7000)
    setTimeout(function(){
        document.getElementById('move').style.transform='translateX(-1872px)'
        document.getElementById('move').style.transition='all 2s linear'
        document.getElementById('circle-7').style.transform='translateX(30px)'
        document.getElementById('circle-7').style.transition='all 1.8s ease'
    },10000)

}
window.load=startAD();