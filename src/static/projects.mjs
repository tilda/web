export default [
    {
        name: 'lolbot',
        link: 'https://github.com/lolbot-project',
        date: 'January 2017 - February 2022',
        skills: [
            'git',
            'nginx',
            'Python (discord.py, asyncio, Flask/Quart)',
            'systemd',
            'Ubuntu',
        ],
        description: `my first "serious" programming project, a Discord chatbot using the discord.py library. its purpose was enhancing conversations (somewhat) by bridging fun internet services like cat(girl) pictures into Discord.
        it reached a peak of around 700 servers, following the maturity of discord.py itself as a project, before its forced demise due to Discord making many sweeping changes, including a "verification" program requiring ID (which i could not do at the time).
        i learned many managerial, operational, and technical lessons from this project - and it's also how i made quite a few friends.
        for all intents and purposes, it's the reason i'm the person you're currently seeing, even if the code was *really* bad.`,
    },
    {
        name: 'nom-sheet',
        link: 'https://github.com/tilda/nom-sheet',
        date: 'June 2024',
        skills: [
            'Google Workspace (Sheets)',
            'JavaScript (Apps Script)',
            'osu! API',
            'OAuth2',
            'Project Management'
        ],
        description: `one of the many things a "Beatmap Nominator" on <i>osu!</i> needs is a way to keep track of their duties. oftentimes, you'll get a Trello board or a notepad-style list somewhere.
        neither of those truly felt maintainable for me, so i went to automate a spreadsheet instead.
        80 percent of Apps Script is knowing some JavaScript, the other 20 percent is reading Google's documentation to figure out what obscure proprietary function you need for something.
        (much of this was influenced by [too](https://osu.ppy.sh/users/12196931), who did something similar when they were BN and led me down a rabbit hole)`
        // used <i> tag instead of */_ because markdown-it converts those to <em>
    },
    {
        name: 'fluorite',
        link: 'https://github.com/tilda/web',
        date: 'June 2026',
        skills: [
            'JavaScript (Vue.js, Vite)',
            'HTML/CSS (Tailwind CSS)',
            'Netlify'
        ],
        description: `the website you're looking at; my first project with Vue 3 and Vite.
        i wanted something that could really show who i am, which ended up being beyond the scope of the previous Vue 2 site.
        it took over a year to gain the motivation to finally fulfill my vision. i'm very happy with it!`
    }
]
