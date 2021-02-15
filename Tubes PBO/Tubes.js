var prompt = require('prompt-sync')();              //Deklarasi Prompt Sync untuk menerima inputan

class Barang {                                      //Deklarasi Class Barang untuk insialisasi barang
  constructor (nama, harga, jml) {
    this.nama = nama
    this.harga = harga
    this.jml = jml
  }

  printData() {                                     //Method untuk mencetak data
    console.log('Nama Barang\t\t: '+this.nama)
    console.log('Harga Barang\t: '+this.harga)
    console.log('Jumlah Barang\t: '+this.jml)
  }
}

const daftarBarang = []                             //Inisialisasi Array untuk menyimpan daftar barang

function menu() {                                   //Function untuk menampilkan menu beserta isinya dengan memanggil function lainnya
  console.log('1. Tambah Barang')
  console.log('2. Tampilkan Barang')
  console.log('3. Hapus Barang')
  console.log('4. Finish Program')
  console.log()
  let choice = prompt('Masukkan pilihan anda\t: ')
  console.log()
  switch (choice) {
    case '1' :
      addBarang();
      break;
    case '2' :
      showBarang();
      break;
    case '3' :
      removeBarang();
      break;
    case '4' :
      opt1 = true
      break;
  }
}

function addBarang() {                            //Function untuk menambah barang kedalam array daftarBarang
  const nama = prompt('Nama Barang\t\t: ')
  const harga = prompt('Harga Barang\t: ')
  const jml = prompt('Jumlah Barang\t: ')

  daftarBarang.push(new Barang(nama, harga, jml))
  console.log()
  console.log('Barang berhasil ditambahkan')
  console.log()
  console.log('================================')
}

Array.prototype.remove = function() {             //Method untuk menghapus array barang berdasarkan inputan user
  let what, a = arguments, L = a.length, ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

function removeBarang() {                         //Function untuk menghapus data dengan memanggil method remove()
  const nama = prompt('Masukkan nama barang\t: ')
  for (let barang of daftarBarang) {
    if (barang.nama === nama) {
      daftarBarang.remove(barang)
      console.log('Barang ini telah dihapus')
      console.log()
      return
    }
  }
  console.log('Barang tidak ditemukan')
  console.log()
}

function showBarang() {                                 //Function untuk menampilkan array daftarBarang
  for (let barang of daftarBarang)
    barang.printData()
  console.log()
}

function login() {                                      //Function untuk menambahkan fitur login kedalam Program
  let login = false

  do {
    let user = prompt('User\t: ')
    let pass = prompt('Pass\t: ')

    if (user == 'admin' && pass == 'admin') {
      login = true
      console.log()
      console.log('Login Success')
      console.log()
      console.log('================================')
      console.log()
    } else {
      console.log()
      console.log('Login Failed')
      console.log()
    }
  } while (login != true)

}

console.log('================================');
console.log('==========Item Register=========');
console.log('================================');
console.log();

//Pemanggilan function yang telah dibuat sebelumnya

login()

let opt1 = false

do {
  menu()
}while (opt1 != true)
