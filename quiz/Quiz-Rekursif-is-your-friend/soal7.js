/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
    //code here
    let angkaStr = equation.toString();
    let angka = angkaStr[0];
    let zero = '';
    let sisaAngka = angkaStr.slice(1);

    if (angkaStr.length === 1 || parseInt(sisaAngka) === 0) {
        return angkaStr;
    }

    for (let i = 0; i < angkaStr.length - 1; i++) {
        zero += '0'
    }

    return `${angka}${zero}+${parseNumber(sisaAngka)}`;
};

console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3