# genetic-algorithm

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### pseudo code
```
1. setup - create random population
2. calc fitness
3. crossover by fitness (higher fitness - higher propability for crossover)
4. mutation
5. replace old population
6. repeat 2-6 until find phrase 
```

### Important files:
```
App.vue - root vue component - there you can configure params(population size, mutation probability etc).
DNAFactory - represent phrase - has 2 properties genes(chars) and fitness. has function for calcFitness, crossover with another partner and mutation
```
