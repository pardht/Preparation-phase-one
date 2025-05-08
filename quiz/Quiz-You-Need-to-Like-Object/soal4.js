/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
    //code here
    if (arr.length === 0) return [];

    let rute = ["Yogyakarta", "Semarang", "Surabaya", "Denpasar"];
    let transportasi = {
        Pesawat: 275000,
        Kereta: 250000,
        Bis: 225000
    };
    let payment = {
        OVO:  15,
        Dana: 10,
        Gopay: 5,
        Cash: 0
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let name = '';
        let departureCity = '';
        let destinationCity = '';
        let kendaraan = '';
        let totalCost = 0

        let index = 0
        for (; index < arr[i].length; index++) {
            if (arr[i][index] === "-") {
                break;
            }
            name += arr[i][index]
        }
        // console.log(name);
        for (index += 1; index < arr[i].length; index++) {
            if (arr[i][index] === "-") {
                break;
            }
            departureCity += arr[i][index]
        }
        // console.log("aw",departureCity);
        for (index += 1; index < arr[i].length; index++) {
            if (arr[i][index] === "-") {
                break;
            }
            destinationCity += arr[i][index]
        }
        // console.log("dest",destinationCity);
        for (index += 1; index < arr[i].length; index++) {
            if (arr[i][index] === "-") {
                break;
            }
            kendaraan += arr[i][index]
        }
        // console.log("trans",kendaraan);

        let distance = 0;
        let departIndex = -1;
        let destiIndex = -1;
        for (let j = 0; j < rute.length; j++) {
            if (departureCity === rute[j]) {
                departIndex = j + 1;
            }
            if (destinationCity === rute[j]) {
                destiIndex = j + 1;
            }
        }
        distance = Math.abs(departIndex - destiIndex)
        
        // console.log(transportasi[kendaraan])
        totalCost = (transportasi[kendaraan] - ((payment[emoney] / 100) * transportasi[kendaraan])) * distance
        // console.log(cost)

        let nota = {
            name: name,
            departureCity: departureCity,
            destinationCity: destinationCity,
            transport: kendaraan,
            totalCost: totalCost
        }
        result.push(nota)
    }

    let sortedResult = []

    let max = -Infinity;
    for(let i = 0; i < result.length; i++) {
        if(result[i].totalCost > max) {
            max = result[i].totalCost;
            sortedResult.unshift(result[i])
        } else {
            sortedResult.push(result[i])
        }
    }
    return sortedResult;
};

console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log("==================================================================================================");
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], 'Cash')); // [];