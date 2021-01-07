<template>
  <div class="root">
    <Summary 
        :generation="generation" 
        :phrase="phrase" 
        :best-evolve-phrase="bestEvolvePhrase" 
        :average-fitness="averageFitness"
        :population-size="populationSize" 
        :mutation-probability="mutationProbability"
      />
    <population-list :population="populationPhrases()"/>
  </div>
</template>

<script>
import Summary from './components/Summary';
import PopulationList from './components/PopulationList'
import DNA from './DNAFactory';
import { getRandomItemFromArray } from './commonFunction';

export default {
  name: 'App',
  components: {
    Summary,
    PopulationList
  },
  data() {
    return {
      generation: 1,
      isDone: false,
      phrase: 'Nir abandon us',
      bestEvolvePhrase: '',
      averageFitness: null,
      mutationProbability: 0.01, 
      populationSize: 200,
      population: [],
      populationPropabilities: []
    }
  },
  created() {
    const { phrase, populationSize } = this;

      for (let i = 0; i < populationSize; i++) {
        this.population.push(DNA(phrase.length));
      }
  },
  mounted() {
    setInterval(() => {
      if(!this.isDone){
        this.life();
        this.generation++;
      } else {
        this.bestEvolvePhrase = this.phrase;
      }
    }, 10);
  },
  methods: {
    populationPhrases() {
      return this.population.map(x => x.getPhrase());
    },
    calcBestEvolvePhrase() {
      const maxFitness = Math.max(...this.population.map(x => x.fitness));
      this.bestEvolvePhrase = this.population.find(x => x.fitness === maxFitness).getPhrase();
    },
    calcAverageFitness() {
      const sum = this.population.reduce((total, curr) => total + curr.fixedFitness(), 0);
      this.averageFitness = sum / this.population.length;
    },
    life() {
      this.population.forEach(x => x.calcFitness(this.phrase));
      this.calcBestEvolvePhrase();
      this.calcAverageFitness();

      this.populationPropabilities = this.population.flatMap(x=> {
          return Array(x.fixedFitness()).fill(x);
      });

      for (let i = 0; i < this.population.length; i++) {
          // don't care if same parent
          const parent1 = getRandomItemFromArray(this.populationPropabilities);
          const parent2 = getRandomItemFromArray(this.populationPropabilities);
          const child = parent1.crossover(parent2);
          child.mutate(this.mutationProbability);
          this.population[i] = child;
      }

      this.isDone = this.population.some(x => x.getPhrase() === this.phrase);
    }
  }
}
</script>

<style scoped>
.root {
  display: flex;
}
</style>
