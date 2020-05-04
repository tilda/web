<template>
    <a :href="link" class="chip-link">
        <span class="chip ~info mb-1 px-2 py-1">{{ name }}</span>
    </a>
</template>

<script>
export default {
    props: {
        name: String,
        link: String
    }
}
</script>