<!-- biome-ignore-all lint/a11y/useValidAnchor: biomejs/biome#10661 -->
<template>
    <div>
        <p>
            welcome to my portfolio of sorts! for as long as i can remember, computers have been my favorite thing on
            the planet (having been basically born into them); my career's mission statement is making a net positive
            change in the world using my work.<br>
            i'm currently pursuing an associate's in cybersecurity at
            <a href="https://nctc.edu">North Central Texas College</a>, with an estimated graduation date in december 2026.
        </p>
        <h2>my favorite...</h2>
        <table class="indent-2">
            <tbody>
                <tr>
                    <th>rhythm games</th>
                    <td>
                        <a href="https://osu.ppy.sh"><i>osu!</i></a>, <i>BEMANI</i> titles*
                    </td>
                </tr>
                <tr>
                    <th>story/narrative games</th>
                    <td><i>Half-Life</i> and <i>Portal</i> series</td>
                </tr>
                <tr>
                    <th>multimedia franchises**</th>
                    <td>
                        <a href="https://priconne-redive.jp/"><i>Princess Connect!</i></a>,
                        <a href="https://umamusume.com"><i>Umamusume</i></a>
                    </td>
                </tr>
                <tr>
                    <th>anime</th>
                    <td>
                        <a :href="anilist(98444)"><i>Laid-Back Camp</i></a>,
                        <a :href="anilist(99900)"><i>Pompo: The Cinéphile</i></a>,
                        <a :href="anilist(97986)"><i>Made in Abyss</i></a>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="text-sm">
            *: Konami's arcade rhythm games. as of May 2026, i have played <i>beatmania IIDX</i>, <i>jubeat</i>, and
            <i>SOUND VOLTEX</i>. out of those three, <i>IIDX</i> remains my favorite.<br>
            notably, <i>pop'n music</i> has a new release with cabinets in the US (which is great!), but it'll be a
            while before i get to try it.<br>
            **: Cygames' gacha games that would be better if they <em>weren't</em> gacha games.
        </p>
        <h2>hobbies</h2>
        <ol class="list-disc">
            <li>
                i cannot understate how much i like computers as a creative outlet. i think they're wonderful
                things.<br>
                my interest has been persistently kept in Linux system administration (desktop & server). i also enjoy
                programming at some points, mostly engaging in full-stack development with Python and Vue.js. it's been
                a lot of fun!
            </li>
            <li>
                if you can't tell from the above favorites list, i'm a self-professed <a
                    href="https://en.wiktionary.org/wiki/weeaboo#English">weeb</a>.<br>
                growing up, we didn't have cable tv. of course i still caught glimpses of spongebob episodes and such, but
                the internet has... a lot of anime culture. i got used to it and stuck with it to this very day.
            </li>
            <li>
                in the future, i'd like to try things like amateur photography and (more) writing.<br>
                other people doing them brought untold amounts of joy to me; i think it's only fair to give back at some
                point!
            </li>
        </ol>
    </div>
</template>

<script setup>
const anilist = (id, type = 'anime') => {
    return `https://anilist.co/${type}/${id}`
}
</script>