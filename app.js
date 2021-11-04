const btnNav = document.querySelector('.navigationIcon');
const containerMenu = document.querySelector('.containerMenu');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const menuItem = document.querySelectorAll('.menuItem');
let toggle = 0;


btnNav.addEventListener('click', () => {

    if (toggle===0){
        toggle++;
        TweenMax.to(b2, 0.01, {display: 'none'});
        TweenMax.to(b1, 0.2, {top:1.5, rotation: '135deg'});
        TweenMax.to(b3, 0.2, {top:-1.5, rotation: '-135deg'});
        TweenMax.to(containerMenu, 0.8, {top : '50vh',transform: "translate(-50%,-50%)" , ease: Power2.easeOut})
    }else{
        toggle--;
        TweenMax.to(b2, 0.01, {delay:0.25, display: 'block'});
        TweenMax.to(b1, 0.1, {top:-6, rotation: '0deg'});
        TweenMax.to(b3, 0.1, {top:6, rotation: '0deg'});
        TweenMax.to(containerMenu, 0.5, {top : "-100%",transform: "translate(-50%,0%)" , ease: Power2.easeIn})
    }
})

menuItem.forEach(item => item.addEventListener('mouseenter', (e) => {

    // console.log(e.target.childNodes);
    let lettreFromItem = Array.from(e.target.childNodes[1].querySelectorAll('span'));
    // console.log (lettreFromItem);

    for (i = 0; i < lettreFromItem.length; i++){
        TweenMax.to(lettreFromItem[i],0.5,{
            x: Math.floor(Math.random() * 100- 50),
            y: Math.floor(Math.random() * 50 - 25),
            z: Math.floor(Math.random() * 100 - 50),
            rotation: Math.floor(Math.random() * 250 - 125),
            opacity: 0.3,
            ease: Circ.easeOut
        })
    };

    menuItem.forEach(item => item.addEventListener('mouseleave', () => {
        window.setTimeout(reset, 500);
        function reset(){
            for (k = 0; k < lettreFromItem.length; k++){
                TweenMax.to(lettreFromItem[k],0.3,{
                    x: 0,
                    y: 0,
                    z: 0,
                    rotation: 0,
                    opacity: 1,
                    ease: Circ.easeIn
                })
            }
        }
    }));

}));

menuItem.forEach(item => item.addEventListener('click', () => {

    toggle--;
    TweenMax.to(b2, 0.01, {delay:0.25, display: 'block'});
    TweenMax.to(b1, 0.1, {top:-6, rotation: '0deg'});
    TweenMax.to(b3, 0.1, {top:6, rotation: '0deg'});
    TweenMax.to(containerMenu, 0.5, {top : "-100%",transform: "translate(-50%,0%)" , ease: Power2.easeIn});

}));

