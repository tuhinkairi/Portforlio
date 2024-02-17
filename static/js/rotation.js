let banner = document.getElementById('_banner')
let counter =50
banner.addEventListener('mouseover',()=>{

    banner.style.background = `linear-gradient(130deg, #0c0c0c ${counter}%, 0, #fff 50%)`;
})
banner.addEventListener('mouseout',()=>{
    banner.style.background = `linear-gradient(130deg, #0c0c0c ${counter}%, 0, #fff 50%)`;
    
    
}) 