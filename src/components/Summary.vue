<template>
    <div class="summary">
        <span>generation: {{generation}}</span>
        <span>best in current generation: {{bestEvolvePhrase}}</span>
        <span>average fitness: {{averageFitness}}%</span>
        <span>target phrase: {{phrase}}</span>
        <span>population size: {{populationSize}}</span>
        <span>mutation probability: {{mutationProbability}}</span>
    </div>
</template>

<script>
export default {
    name: 'Summary',
    props: {
        generation: { 
            type: Number,
            default: null
        },
        populationSize: { 
            type: Number,
            default: null
        },
        phrase: { 
            type: String,
            default: null
        },
        bestEvolvePhrase: { 
            type: String,
            default: null
        },
        averageFitness: { 
            type: Number,
            default: null
        },
        mutationProbability: { 
            type: Number,
            default: null
        },
    }
}
</script>

<style scoped>
.summary {
    display: flex;
    flex-direction: column;
    width: 50%;
}
</style>