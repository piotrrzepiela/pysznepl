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

function takeOrder(){
    sprawdzanieSosow("sosy")
    const pomidorowy = document.getElementById('pomidorowy').checked
    const czosnkowy = document.getElementById('czosnkowy').checked
    const ostryPomidorowy = document.getElementById('ostryPomidorowy').checked
    order.sosy.push(pomidorowy)
    order.sosy.push(czosnkowy)
    order.sosy.push(ostryPomidorowy)

    console.log(order.sosy)

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
    
    console.log(order)
}
function sprawdzanieSosow(nazwaKlasy){
    const pobraneWszystkieSosyZInputu = document.getElementsByClassName(nazwaKlasy)
   
    for(i = 0; i < pobraneWszystkieSosyZInputu.length; i++){
        if(pobraneWszystkieSosyZInputu[i].checked){

        }
    }
}

