function displayAlert(elemento_a) {
    console.log(elemento_a); //<a href="#" onclick="displayAlert(this)" >Burbank</a>

    var location = elemento_a.innerText; //location = Burbank

    alert("Cargando informe meteorológico "+location);
}

function changeTemperature(elemento_select) {
    var fOc = elemento_select.value; //Value es el valor que el usuario ingreso
    console.log(fOc);

    for(var i=1; i<=8; i++){
        var elemento_temp = document.querySelector('#temp'+i); //#temp1 -> <span id="temp1" class="maxTemp">24</span>
        var temperatura = elemento_temp.innerText; //"24"
        temperatura = parseInt(temperatura); // parseInt transforma el texto en numero entero


        var new_temp = 0;

        if(fOc === "C") { 
            //F -> C
            new_temp = Math.round((temperatura-32) * 5 / 9);
        } else {
            //C -> F
            new_temp = Math.round((temperatura * 9 / 5) + 32);
        }

        elemento_temp.innerText = new_temp;

    }

}



