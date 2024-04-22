const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")


buttons.forEach((button)=> {
    button.addEventListener('click', ((e) => {
        console.log(e.target.id);

        if (e.target.id ==="a") {
            body.style.backgroundColor = '#a0d2eb';
            
        }
        if (e.target.id ==="b") {
            body.style.backgroundColor = 'purple';
            
        }
        if (e.target.id ==="c") {
            body.style.backgroundColor = '#651ee7';
            
        }
        if (e.target.id ==="d") {
            body.style.backgroundColor = '#8458B3';
            
        }
         if (e.target.id ==="e") {
            body.style.backgroundColor = '#494d5f';
            
        }
    }))
})
 