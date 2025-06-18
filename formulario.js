let form = document.getElementById("form");
let input_edad = document.getElementById("edad");
let input_cp = document.getElementById("codigo_postal"); 
form.addEventListener("submit", function(e)
{
    e.preventDefault();

    if(isNaN(input_edad.value) == true)
        console.log("La edad no es numérica")
    else
        console.log("La edad es numérica");

    if(input_cp.value.length == 5)
        console.log("EL código postal es valido");
    else
        console.log("El código postal no es valido");
})