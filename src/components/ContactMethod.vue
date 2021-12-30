<template>
    <div>
        <a :href="method.url" target="_blank" :title="icon.title" class="mb-4 mx-auto rounded contacts">
                <div class="p-4 shadow-m hover:shadow-lg flex flex-row" :style=" { 'background-color': '#' + icon.hex }">
                    <svg role="img" class="h-8 w-8" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path :d="icon.path"/>
                    </svg>
                    <span class="md:hidden text-xl pl-4">{{ icon.title }}</span>
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

export default {
    props: {
        method: { 
            type: Object,
            required: true,
        }
    },
    data: function() {
        return {
            icon: require(`simple-icons/icons/${this.method.icon}`)
        }
    }
}
</script>