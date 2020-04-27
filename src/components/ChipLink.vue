<template>
    <a :href="link">
        <span class="chip ~info mb-1">{{ name }}</span>
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