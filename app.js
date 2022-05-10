window.addEventListener('load', (event) => {
   document.getElementById("naac_stuff").style.display = "none";
});

document.getElementById("naac_button").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("naac_stuff").style.display = "block";
}

document.getElementById("iqac_button").addEventListener("click", myFunction2);

function myFunction2() {
    document.getElementById("naac_stuff").style.display = "none";
}
