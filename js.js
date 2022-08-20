
const boneco = document.querySelector(".boneco");
const tubo = document.querySelector(".tubo");
const nuvem = document.querySelector(".nuvem");


const jump = (event) => {
    if(event.keyCode == '32') {
        boneco.classList.add("jump");
    
        setTimeout(() => {
        boneco.classList.remove("jump");
        },500); 
    }
}
const loop = setInterval(() => {
    const tuboPosition = tubo.offsetLeft;
    const bonecoPostion = +window.getComputedStyle(boneco).bottom.replace ('px','');
    if (tuboPosition <= 110 &&  tuboPosition > 0 && bonecoPostion <=60) {
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;


        boneco.style.animation = 'none';
        boneco.style.bottom = `${bonecoPostion}px`;

        boneco.src="imagens/game-over.png";
        boneco.style.width = '68px';
        boneco.style.left = '50px';


        clearInterval(loop);
    }
},10);

document.addEventListener("keydown", jump);