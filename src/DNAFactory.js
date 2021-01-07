// dna is just fancy name - represent an array of chars (like cells represent human body)
import { getRandomItemFromArray } from './commonFunction';

function generateRandomChar() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
    return getRandomItemFromArray(chars);
}

function generateRandomArrayChars(length) {
    const result = [];

    for (let i = 0; i < length; i++) {
       result.push(generateRandomChar());
    }
    return result;
 }

const DNAFactory = (genesLength) => {
    const dna = {
        genes: generateRandomArrayChars(genesLength),
        fitness: null
    };

    dna.getPhrase = () => dna.genes.join('');
    dna.fixedFitness = () => Number((dna.fitness * 100).toFixed());
    
    // calc fitness (survival) - check how many letters are correct
    dna.calcFitness = (target) => {
        let score = 0;
        for (let i = 0; i < dna.genes.length; i++) {
           if (dna.genes[i] == target[i]) {
             score++;
           }
        }
        dna.fitness = score / target.length;
    }
    // pregnant
    dna.crossover = (partner) => {
        const child = DNAFactory(dna.genes.length);
        
        // const midpoint = dna.genes.length / 2; 
        const midpoint = Math.floor(Math.random() * dna.genes.length)
        // non sequence chars
    
        for (let i = 0; i < dna.genes.length; i++) {
            if (i > midpoint) child.genes[i] = dna.genes[i];
            else child.genes[i] = partner.genes[i];
        }

        return child;
    }
    // mutate every gene by probability
    dna.mutate = (probability) => {
        for (let i = 0; i < dna.genes.length; i++) {
            if (Math.random() < probability) {
                dna.genes[i] = generateRandomChar();
            }
        }
    }

    return dna;
}

export default DNAFactory;