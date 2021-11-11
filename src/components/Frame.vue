<template>
    <div class="frame shadow-md hover:shadow-xl">
        <slot></slot>
    </div>
</template>
<style scoped>
    .frame {
        min-height: 330px;
        max-height: 330px;
        overflow: auto;
        padding-top: 5px;
    }
</style>