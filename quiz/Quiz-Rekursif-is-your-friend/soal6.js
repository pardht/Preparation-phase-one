/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/


function palindromeRecursive(sentence) {
    //code here - saran bikin fungsi rekursif didalam sini
    function reverse(kalimat) {
        if(kalimat.length === 0) {
            return '';
        }
    
        let huruf = kalimat[0];
        let sisaHuruf = kalimat.slice(1);
        let balik = reverse(sisaHuruf) + huruf;
    
        return balik;
    }

    let reversed = reverse(sentence);

    //lalu bandingkan dengan sentence
    return reversed === sentence;
}

// TEST CASES
console.log(palindromeRecursive('katak')); // true
console.log(palindromeRecursive('blanket')); // false
console.log(palindromeRecursive('civic')); // true
console.log(palindromeRecursive('kasur rusak')); // true
console.log(palindromeRecursive('mister')); // false