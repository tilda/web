<template>
    <div class="card ~neutral !normal md:flex max-w-lg shadow-2xl">
        <a href="https://www.pixiv.net/en/artworks/78784366" v-tooltip="{ content: 'Art by @ahppple' }">
            <img class="rounded-full content-center mx-auto h-20 w-20 md:mr-6 mb-6" src="../assets/avy.png">
        </a>
        <div class="flex-grow text-center md:text-left mb-0">
            <h4 class="heading my-0"><Rainbow text="tilda"/></h4>
            <p class="mb-3 mt-2">full stack dev</p>
            <div>
                <ChipLink name="github" link="https://github.com/tilda" style="padding-left: 0;"/>
                <ChipLink name="twitter" link="https://twitter.com/imtilda"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
:root {
    --color-background: #2e3440; /* nord0 */
}

.chip-link {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
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