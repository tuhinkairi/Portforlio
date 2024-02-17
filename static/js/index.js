document.addEventListener('DOMContentLoaded', function () {

    // pop_description box
    let dis_box = document.getElementsByClassName('_service_card');

    Array.from(dis_box).forEach((e, index) => {
        e.addEventListener("mouseenter", () => {

            // e.getElementsByClassName('discription_card')[0].classList.toggle('translate-y-[100%]')
            // e.getElementsByClassName('discription_card')[0].classList.toggle('translate-y-0')
            e.getElementsByClassName('discription_card')[0].classList.toggle('opacity-0')
            e.getElementsByClassName('discription_card')[0].classList.toggle('opacity-100')
        })
        e.addEventListener("mouseleave", () => {

            e.getElementsByClassName('discription_card')[0].classList.toggle('opacity-0')
            e.getElementsByClassName('discription_card')[0].classList.toggle('opacity-100')
        })
    })

    // modes
    let mode_btn = document.getElementById('mode')
    let icon_btn = mode_btn.getElementsByTagName('span')[0];

    let head = document.querySelector('head')
    // index.html
    mode_btn.addEventListener('click', () => {
        let inverted_color = document.querySelectorAll('.whitespace-nowrap')

        // console.log(icon_btn.innerText)
        if (icon_btn.innerText == "light_mode") {
            let mode = document.querySelector('#theme')
            mode.remove()
            icon_btn.innerText = 'dark_mode';
            Array.from(inverted_color).forEach(e => {
                e.classList.toggle('mix-blend-difference')
            })
        }
        else {
            let newMode = document.createElement('link');
            newMode.rel = 'stylesheet';
            newMode.href = "static/css/mode.css";
            newMode.id = "theme";
            head.appendChild(newMode);
            icon_btn.innerText = 'light_mode';
            Array.from(inverted_color).forEach(e => {
                e.classList.toggle('mix-blend-difference')
            })
        }
    })

  
});