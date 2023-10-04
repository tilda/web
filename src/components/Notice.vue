<template>
    <div class="rounded-lg">
        <div class="ml-4">
            <span>{{ this.importanceEmoji }}</span>
            <span>{{ message }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        importance: {
            type: String,
            default: 'info',
            validator: function(level) {
                return (['error', 'info', 'warning'].includes(level))
            }
        },
        message: {
            type: String,
            required: true
        }
    },
    mounted() {
        switch (this.importance) {
            case 'error':
                this.importanceEmoji = '❌'
                break
            case 'info':
                this.importanceEmoji = 'ℹ️'
                break
            case 'warning':
                this.importanceEmoji = '⚠️'
                break
        }
    }
}
</script>