function DNAStrand(dna){
    const spreadDNA = [...dna];

    DNAStrand.pares = {
        'A': 'T',
        'T': 'A', 
        'C': 'G', 
        'G': 'C'
    }

    const complementaryDNA = spreadDNA.map(d => {
        return DNAStrand.pares[d];
    });

    return complementaryDNA.join('')
}

console.log(DNAStrand('GTAT'));

// function DNAStrand(dna){
//     const spreadDNA = [...dna];

//     let complementaryDNA = '';
//     for (i = 0; i <= spreadDNA.length; i++) {
//         if (spreadDNA[i] === 'A') {
//             complementaryDNA = complementaryDNA + 'T';
//         }

//         if (spreadDNA[i] === 'T') {
//             complementaryDNA = complementaryDNA + 'A';
//         }

//         if (spreadDNA[i] === 'C') {
//             complementaryDNA = complementaryDNA + 'G';
//         }

//         if (spreadDNA[i] === 'G') {
//             complementaryDNA = complementaryDNA + 'C';
//         }
//     }

//     return complementaryDNA;
// }

