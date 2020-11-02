<template>
    <a href="{{ method.url }}">
        <div class="max-w-md" style="background-color: {{ method.color }}">
            <div class="ml-8">
                <Unicon name="{{ method.icon }}" fill="white" icon-style="monochrome"/>
            </div>
            <div class="ml-16">
                <h3>{{ method.name }}</h3>
                <p>{{ method.description }}</p>
            </div>
        </div>
    </a>
</template>
<script>
export default {
    props: {
        method: Object
    }
}
</script>