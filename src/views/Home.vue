<template>
    <div class="home">
        <div class="md:flex md:mt-16 mb-8 items-center justify-between">
            <section class="md:w-full">
                <a class="content-center">
                    <img src="../assets/avy.png" title="Art by @ahppple (Twitter)" alt="Fan art of Rin Shima from Yuru Camp looking at viewer" class="rounded-full content-center mx-auto h-48 w-48">
                </a>
            </section>
        </div>
        <div class="md:flex md:mt-8 mb-24 items-center justify-between">
            <section class="md:w-full">
                <h1 class="heading text-lg md:text-3xl">
                    Hi, I'm <span class="rainbow">tilda</span>.
                </h1>
                <h2 class="subheading text-lg md:text-xl">
                    Welcome to my home on the internet.<br/>
                    If you're new here, try the<br/>
                    <router-link to="/about">About</router-link> page ;)
                </h2>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
    }
}
</script>
