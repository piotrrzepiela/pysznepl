const idBtn = document.getElementById("id-btn")

let order = {
    pizza: '',
    sosy: [],
    name: '',
    adres: '',
    email: '',
    tel: '',
    msg: ''

}

idBtn.addEventListener("click", takeOrder)

function takeOrder() {
    sprawdzanieSosow("sosy")
    const pomidorowy = document.getElementById('pomidorowy').checked
    const czosnkowy = document.getElementById('czosnkowy').checked
    const ostryPomidorowy = document.getElementById('ostryPomidorowy').checked
    order.sosy.push(pomidorowy)
    order.sosy.push(czosnkowy)
    order.sosy.push(ostryPomidorowy)

    console.log(order.sosy)

    const pizzaSelect = document.getElementById('pizza').value
    if (pizzaSelect == "0") {
        alert("Wybierz Pizzę, którą chcesz zamówić")
    }
    else {
        order.pizza = pizzaSelect
    }

    console.log("Wybrana pizza: ", pizzaSelect)

    //pobieranie imienia, email, adresu, telefonu
    const nameC = document.getElementById('nameC').value
    order.name = nameC
    console.log("Imie: ", nameC)
    const email = document.getElementById('email').value
    order.email = email
    console.log("Email: ", email)
    const tel = document.getElementById("tel").value
    order.tel = tel
    console.log("Telefon: ", tel)
    const adres = document.getElementById("adres").value
    order.adres = adres
    console.log("Adres: ", adres)
    const msg = document.getElementById("msg").value
    order.msg = msg
    console.log("Wiadomosc: ", msg)


    
    if (order.adress !== '' && order.email !== '' &&
        order.name !== "" && order.sosy.length > 0 && order.tel !== '') 
        {
        console.log(order)
    } else {
        alert('Uzupełnij zamówienie')
    }

}

function sprawdzanieSosow(nazwaKlasy) {
    const pobraneWszystkieSosyZInputu = document.getElementsByClassName(nazwaKlasy)

    for (i = 0; i < pobraneWszystkieSosyZInputu.length; i++) {
        if (pobraneWszystkieSosyZInputu[i].checked === true) {
            
        }
    }
}

