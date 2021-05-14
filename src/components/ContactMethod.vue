<template>
    <div>
        <a :href="method.url" target="_blank" :title="icon.name" class="mb-4 mx-auto rounded shadow-md hover:shadow-lg contacts">
                <div class="p-4" :style=" { 'background-color': '#' + icon.hex }">
                    <svg role="img" class="h-8 w-8" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path :d="icon.path"/>
                    </svg>
                </div>
        </a>
    </div>
</template>
<style scoped>
    .contacts {
        text-decoration: none !important;
        max-width: 1rem;
    }
</style>
<script>
import icons from 'simple-icons'

export default {
    props: {
        method: { 
            type: Object,
            required: true,
        }
    },
    data: function() {
        return {
            icon: icons.get(this.method.icon)
        }
    }
}
</script>