<template>
    <div>
        <a :href="method.url" class="text-decoration-important">
            <div class="flex max-w-lg rounded shadow-lg hover:shadow-xl vertical-align-important" :style="{ 'background-color': method.color }">
                <div class="mx-4 p-4 border-r-4 border-white">
                    <svg role="img" class="h-12 w-12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <title>{{ method.name }} icon</title>
                        <path :d="getIcon(method.icon)"/>
                    </svg>
                </div>
                <div class="ml-8 vertical-align-important text-xl">
                    {{ method.name }}
                </div>
            </div>
        </a>
    </div>
</template>
<style scoped>
    .vertical-align-important {
        align-items: baseline !important;
    }
    .text-decoration-important {
        text-decoration: none !important;
    }
</style>
<script>
import * as icons from 'simple-icons'

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