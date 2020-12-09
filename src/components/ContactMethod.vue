<template>
    <div>
        <a :href="method.url" target="_blank" class="text-decoration-important max-w-xs">
            <div class="flex max-w-xs rounded shadow-md hover:shadow-lg">
                <div class="mr-4 p-4 border-r-4 border-transparent" :style=" { 'background-color': method.color }">
                    <svg role="img" class="h-8 w-8" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <title>{{ method.name }} icon</title>
                        <path :d="getIcon(method.icon)"/>
                    </svg>
                </div>
                <span class="text-xl text-center">
                    {{ method.name }}
                </span>
            </div>
        </a>
    </div>
</template>
<style scoped>
    .text-decoration-important {
        text-decoration: none !important;
    }
</style>
<script>
import icons from 'simple-icons'

export default {
    props: {
        method: Object
    },
    methods: {
        getIcon: function(name) {
            return icons.get(name).path
        }
    }
}
</script>