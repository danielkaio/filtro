let campo = document.querySelector('#nome')
let li = document.querySelectorAll("li")



campo.addEventListener('input', () => {
    let filtro = campo.value;

    for (let i = 0; li.length; i++) {
        let item = li[i].textContent

        if (item.indexOf(filtro) > -1) {
            li[i].style.display = ""

        } else {
            li[i].style.display = "none"
        }

    }

})