document.getElementById("naac_button").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("naac_stuff").style.display = "block";
    document.getElementById("iqac_button").style.display = "block";
    document.getElementById("iqac_name").style.display = "block";
}

document.getElementById("iqac_button").addEventListener("click", myFunction2);

function myFunction2() {
    document.getElementById("naac_stuff").style.display = "none";
    document.getElementById("iqac_button").style.display = "none";
    document.getElementById("iqac_name").style.display = "none";
}
