/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
    //code here
    if (sentences.length < 1) {
        return 0;
    }

    let huruf = sentences[0];
    let sisaHuruf = sentences.slice(1);
    let vowels = ['a', 'i', 'u', 'e', 'o'];
    let count = 0;
    let isConsonant = true;

    for (let i = 0; i < vowels.length; i++) {
        if ((huruf.toLowerCase() === vowels[i]) 
            || (huruf === ' ') 
            || (huruf >= 0 && huruf <= 9)) 
            {
            isConsonant = false;
            break;
        }
    }

    if (isConsonant) {
        count = 1
    }
    return count + consonantCounterRecursive(sisaHuruf);
}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3