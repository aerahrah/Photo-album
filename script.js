const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const panels = document.querySelectorAll('.panel');

let currentActive = 1;

next.addEventListener('click', ()=>{
    currentActive++;
    if(currentActive > circles.length){
        currentActive= circles.length;
    }
    updateCircle();
    updatePanel();
})
prev.addEventListener('click', ()=>{
    currentActive--;
    if(currentActive < 1){
        currentActive=1;
    }
    updateCircle();
    updatePanel();
   
})

function updateCircle(){
    circles.forEach((circle, idx)=>{
        if(idx < currentActive){
            circle.classList.add('active');
            console.log('plus');
        }else{
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((((actives.length-2))/(circles.length-1))*100)+'%';
    console.log(actives.length);

    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}
function updatePanel(){
    panels.forEach((panel, idx)=>{
        if(idx < currentActive){
            removeActiveList();
            panel.classList.add('active');
            console.log('asdf');
        }else{
            panel.classList.remove('active');
        }
    })

}
function removeActiveList(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}