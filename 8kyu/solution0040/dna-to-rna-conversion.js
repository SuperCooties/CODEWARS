//https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let dnasplit = dna.split('');
    let rna = '';
    for (i = 0; i<dna.length; i++) {
      console.log(`dna.length is equal to ${dna.length}`);
      console.log(`dnasplit[${i}] is ${dnasplit[i]}`);
      if (dnasplit[i] === 'T') {
        rna += 'U';
      } else {
        rna += dnasplit[i];
      }
    }
    return rna;
  }