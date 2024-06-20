const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kalkulasiValue = document.getElementById("kalkulasi");

//variabel diatas get kolom nya aja belum termasuk nilai yang ada didalam kolom nya 

function celciusfahrenheit(celcius) {
   return (celcius * 1.8) + 32;
}

function fahrenheitcelcius(fahrenheit){
   return (fahrenheit - 32) / 1.8;
}

// Gunakan event listener untuk menanggapi klik tombol "Konversi"
document.getElementById("konversi").addEventListener("click", konversiButton);
document.getElementById("reset").addEventListener("click", resetButton);
document.getElementById("reverse").addEventListener("click", reverseButton);

function konversiButton() {
    // Melakukan pengecekan apakah kolom input celcius terisi atau tidak
    if (celciusInput.value != "") {
        let celciusValue = parseFloat(celciusInput.value);
        fahrenheitInput.value = celciusfahrenheit(celciusValue).toFixed(2);
        kalkulasiValue.value = " (" + celciusInput.value + '\u2103' + " * (9/5)) + 32 = " + fahrenheitInput.value + '\u2109';
        //.value ngambil nilai dari kolom input 
    }
    // Melakukan pengecekan apakah kolom input fahrenheit terisi atau tidak
    if (fahrenheitInput.value != "") {
        let fahrenheitValue = parseFloat(fahrenheitInput.value);
        celciusInput.value = fahrenheitcelcius(fahrenheitValue).toFixed(2); 
        kalkulasiValue.value = "(" + fahrenheitInput.value + '\u2109' + " - 32) * 5/9 = " + celciusInput.value + '\u2103';
    }
}

function resetButton() {
    document.getElementById('celcius').value = "";
    document.getElementById('fahrenheit').value = "";
    document.getElementById('kalkulasi').value = "";
}

function reverseButton() {
    let celciusInput = document.getElementById('celcius');
    let fahrenheitInput = document.getElementById('fahrenheit');
    celciusInput.value = celciusInput.value.split('').reverse().join('');
    fahrenheitInput.value = fahrenheitInput.value.split('').reverse().join('');
}