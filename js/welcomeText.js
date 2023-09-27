function replaceName() {
    let visitor = prompt("Masukan nama Anda", "Budi Hartono")
    document.getElementById("visitor").innerText = visitor;
    document.getElementById("visitor").style.color = "orange";
    document.getElementById("visitor").style.fontStyle = "underline";
}

replaceName();