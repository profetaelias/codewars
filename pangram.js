
function isPangram(texto) {
    return [..."abcdefghijklmnopqrstuvwxyz"].every(letra => {
        return texto.toLowerCase().includes(letra); 
    })
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))

// function isPangram(texto) {
//     const alfabeto = [...'abcdefghijklmnopqrstuvwxyz'];

//     let isPangram = true;
//     for (i = 0; i <= alfabeto.length - 1; i++) {
//         if (!texto.toLowerCase().includes(alfabeto[i])) {
//             isPangram = false;
//         }
//     }

//     return isPangram;
// }