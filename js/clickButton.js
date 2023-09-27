// Ambil semua elemen dengan kelas yang sesuai
const tambahButtons = document.querySelectorAll(".tambah");
const kurangButtons = document.querySelectorAll(".kurang");
const angkaElements = document.querySelectorAll(".angka");

// Fungsi untuk menambah angka pada elemen tertentu
function tambahAngka(index) {
    angka[index]++;
    updateAngka(index);
}

// Fungsi untuk mengurangi angka pada elemen tertentu
function kurangAngka(index) {
    if (angka[index] > 0) {
        angka[index]--;
        updateAngka(index);
    }
}

// Fungsi untuk memperbarui tampilan angka pada elemen tertentu
function updateAngka(index) {
    angkaElements[index].textContent = angka[index];
}

// Event listener untuk setiap tombol tambah
tambahButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        tambahAngka(index);
    });
});

// Event listener untuk setiap tombol kurang
kurangButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        kurangAngka(index);
    });
});

// Inisialisasi nilai angka untuk setiap elemen
const angka = Array.from({ length: tambahButtons.length }, () => 0);

// Inisialisasi tampilan awal
angka.forEach((value, index) => {
    updateAngka(index);
});
