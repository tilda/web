<template>
    <div class="card ~neutral !normal md:flex max-w-lg">
        <img class="rounded-full content-center mx-auto h-20 w-20 md:mr-6 mb-6" src="../assets/avy.png">
        <div class="flex-grow text-center md:text-left mb-0">
            <h4 class="heading my-0"><Rainbow text="tilda"/></h4>
            <p class="mb-3 mt-2">full stack dev</p>
            <div>
                <ChipLink name="github" link="https://github.com/tilda"/>
                <ChipLink name="twitter" link="https://twitter.com/imtilda"/>
                <ChipLink name="osu!" link="https://osu.ppy.sh/users/tilda"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
:root {
    --color-background: #2e3440; /* nord0 */
}

.chip {
    padding-left: 5px;
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