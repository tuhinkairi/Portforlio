document.addEventListener('DOMContentLoaded', function () {
    const specificButton = document.querySelector('#mode');

    window.addEventListener('keydown', function (event) {
        if (event.shiftKey && event.key === 'B') {
            specificButton.click();
        }
    });
    const small_menu = document.querySelector('#small_nav')
    const menu_btn = document.querySelector('#toggle_menu')
    tog =true
    menu_btn.addEventListener('click',()=>{
        // small_menu.classList.toggle('h-14')
        small_menu.classList.toggle('border-b')
        if (tog) {
            
            small_menu.style.height = '60px';
            tog =false;
        }
        else{
            small_menu.style.height = '0px';
            tog =true;

        }
    })
    
})