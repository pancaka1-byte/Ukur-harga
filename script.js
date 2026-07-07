const ruler = document.getElementById("ruler");

let hargaAwal = 2950;

// Membuat garis dan angka harga
function gambarRuler() {

    ruler.innerHTML = "";

    for (let y = 0; y <= 700; y += 20) {

        const line = document.createElement("div");
        line.className = "line";
        line.style.top = y + "px";

        const price = document.createElement("div");
        price.className = "price";
        price.style.top = y + "px";

        // Harga dari bawah ke atas
        price.innerHTML = 3300 - y;

        ruler.appendChild(line);
        ruler.appendChild(price);
    }

}

gambarRuler();

document.getElementById("set").onclick = function(){

    hargaAwal =
    Number(document.getElementById("awal").value);

    document.getElementById("awalText").innerHTML =
    hargaAwal;

    document.getElementById("akhirText").innerHTML =
    hargaAwal;

    document.getElementById("poin").innerHTML = 0;

    document.getElementById("persen").innerHTML = "0%";

};