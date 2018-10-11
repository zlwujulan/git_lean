<template>
    <div id="app">
        {{a}}
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                a: 11
            };
        },
        mounted() {
            console.log('m1');
        }
    };
</script>
