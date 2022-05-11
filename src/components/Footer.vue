<template>
    <footer class="mt-12">
        <span class="text-xs mx-auto">
            thanks for visiting! &hearts;
            <br/>made using <a href="https://vuejs.org">vue.js</a> & <a href="https://tailwindcss.com">tailwindcss</a>
        </span>
        <br/><span class="text-xs mx-auto">blog engine provided by <a href="https://buttercms.com" target="_blank"><img :src="butterCmsLogo" alt="ButterCMS" style="display: inline;" width="80" height="30"></a></span>
    </footer>
</template>
<script>
export default {
    computed: {
        butterCmsLogo: function() {
            return (this.$store.state.dark ? 'https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo' : 'https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH')
        }
    }
}
</script>