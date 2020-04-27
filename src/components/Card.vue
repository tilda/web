<template>
    <section class="card ~neutral !normal content">
        <img class="rounded-full mx-auto h-20 w-20 md:mr-6 mb-6" src="../assets/avy.png">
        <div class="flex-grow text-center md:text-left mb-0">
            <h4 class="heading my-0"><Rainbow text="tilda"/></h4>
            <p class="mb-3 mt-2">hi, i'm a full stack developer from Denton, TX</p>
            <div>
                <ChipLink name="twitter" link="https://twitter.com/imtilda"/>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import "~a17t/dist/a17t.css";

:root {
    --color-background: #2e3440; /* nord0 */
}

</style>

<script>
import Rainbow from './Rainbow'
import ChipLink from './ChipLink'

export default {
    components: {
        Rainbow, ChipLink
    },
}
</script>