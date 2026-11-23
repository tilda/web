<template>
    <div>
        <p>
            i'm an early-career IT professional, pursuing an associate's in cybersecurity from
            <a href="https://nctc.edu">North Central Texas College</a>
            (estimated graduation in december 2026).
            for as long as i can remember, computers have been my favorite thing on
            the planet (having been basically born into them); my career's mission statement is making a net positive
            change in the world using my work.<br>
            <span class="text-sm">
                note: considering i put this website on my resume, you might know me by a different name beginning with
                "S."<br>
                if you do... hi, and i hope you enjoy this side of me too!
            </span>
        </p>
        <h2>things i like working with</h2>
        <ol class="list-disc">
            <li>
                <b>frontend design:</b> to me, working with frontend feels like getting into painting without actually
                having to work with messy inks or clean up anything. seeing visual ideas come to life in the browser
                feels magical at times. my current preferred framework: <a href="https://vuejs.org">Vue.js</a>!<br>
                <span class="text-sm">
                    this also had the downstream effect of making me enjoy actual design work at some points, in many
                    forms of media -- not just on the screen
                </span>
            </li>
            <li>
                <b>linux systems:</b> i started working with linux at around nine years old (long story), fell in love
                with it, and it hasn't left my brain since then. in that time period, i've worked to build on desktop
                and server workloads on multiple distros -- diving into Debian, Fedora, SUSE, Ubuntu, and a few others.
                i've maintained <abbr title="Arch User Repository">AUR</abbr> packages before, then built a little
                homelab once, then moved on and built another one... the list goes on.
            </li>
            <li>
                <b>my local community:</b> this is in another sense compared to the other two, but i love helping others
                in my local community (and beyond) achieve their goals, using my own strengths! this is also part of my
                belief in open-source software, being that many pieces of freely available code have helped me develop
                my own skills into something real & valuable.
            </li>
        </ol>
        <h2>hobbies</h2>
        <ol class="list-disc">
            <li><b>computers</b> (first and foremost)</li>
            <li>anime, mainly slice of life</li>
            <li>electronic music</li>
            <li>non-fiction writing</li>
            <li>occasional amateur photography</li>
            <li>rhythm games</li>
        </ol>
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
                        <a href="https://priconne-redive.jp/"><i>Princess Connect! Re: Dive</i></a>,
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
            *: Konami's arcade rhythm games. as of May 2026, i have played <i>beatmania IIDX</i>, <i>jubeat</i>,
            <i>pop'n music</i>, and <i>SOUND VOLTEX</i>. out of those four, <i>IIDX</i> remains my favorite.<br>
            **: pretending they <em>aren't</em> gacha games, as that part is a little unfortunate<br>
            fun fact: i do not know japanese
        </p>
        <h2>my professional career</h2>
        <ol class="list-disc">
            <li>
                currently, i don't hold formal experience in IT, so I am currently looking for <b>entry-level</b>
                roles.<br>
                if you're scouting to fill a role and think i'd be a good fit: please
                <router-link to="/contact">get in touch!</router-link>
            </li>
            <li>
                certifications i currently hold:
                <ol class="list-disc indent-4">
                    <li><i>CompTIA Security+</i> (August 2025)</li>
                    <li><i>CompTIA A+</i> (August 2026)</li>
                </ol>
            </li>
            <li>
                certifications i am planning to take:
                <ol class="list-disc indent-4">
                    <li><i>CompTIA Network+</i> (voucher in hand, need to study!)</li>
                </ol>
            </li>
        </ol>
    </div>
</template>

<script setup>
const anilist = (id, type = 'anime') => {
    return `https://anilist.co/${type}/${id}`
}
</script>
