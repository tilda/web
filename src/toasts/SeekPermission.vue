<template>
    <div>
        <p>
            Would you like to allow this website to collect analytics?
            <a
                href="https://github.com/milesmcc/shynet#metrics"
                target="_blank"
            >Learn more.</a>
        </p>
        <span
            class="button ~positive !high mb-1"
            v-on:click="permit()"
            @click="emit()"
        >Okay!</span>
        <span
            class="button ~neutral !normal mb-1"
            v-on:click="decline()"
            @click="emit()"
        >No thanks.</span>
        <br />
        <small>
        Analytics are completely optional. This popup will only appear once. Powered by
        <a
            href="https://github.com/milesmcc/shynet"
            target="_blank"
        >Shynet</a>.
        </small>
  </div>
</template>

<style scoped>
.button {
    margin-right: 0.5rem;
}
a:link,
a:visited {
    text-decoration: underline;
}
</style>

<script>
import injectAnalytics from '../utils/analytics'
import PermissionGranted from "./PermissionGranted";
import PermissionDenied from "./PermissionDenied";

export default {
    methods: {
        emit: function() {
            this.$emit('close-toast')
        },
        permit: function() {
            injectAnalytics()
            window.localStorage.setItem("analytics", true);
            this.$toast.success(PermissionGranted, {
                position: "bottom-center"
            });
        },
        decline: function() {
            window.localStorage.setItem("analytics", false);
            this.$toast.success(PermissionDenied, {
                position: "bottom-center"
            });
        }
    }
}
</script>