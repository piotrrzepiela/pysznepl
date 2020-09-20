const idBtn = document.getElementById("id-btn")


idBtn.addEventListener("click", takeOrder)

function takeOrder(){
    sprawdzanieSosow("sosy")
    const pomidorowy = document.getElementById('pomidorowy')
    // console.log(pomidorowy.checked)

}
function sprawdzanieSosow(nazwaKlasy){
    const pobraneWszystkieSosyZInputu = document.getElementsByClassName(nazwaKlasy)
    // const zamowioneSosy = pobraneWszystkieSosyZInputu.map(item => {
    //     item.checked
    // })
    for(i = 0; i < pobraneWszystkieSosyZInputu.length; i++){
        // console.log(pobraneWszystkieSosyZInputu[i])
        if(pobraneWszystkieSosyZInputu[i].checked == true){

        }
    }
}