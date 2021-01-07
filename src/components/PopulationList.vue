<template>
    <div class="phrases">
        <span v-for="(phrase, index) in population" :key="index">{{phrase}}</span>
    </div>
</template>

<script>
export default {
    name: 'PopulationList',
    props: {
        population: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>
.phrases {
    display: flex;
    flex-direction: column;
    width: 50%;
}
</style>