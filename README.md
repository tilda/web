# web
its my website

# about the api used in the about section
the api known as `copiumapi` isn't planned to be open sourced at this time, since i feel like there would be no point.
it is basically just a few http requests wrapped into 1 endpoint hosted on a cf worker, since doing these requests client-side would be very much unsafe. particularly for services like steam's web api and lastfm that require api keys to get the information used.

# dev notes
install deps: `npm install`

dev server: `npm run dev` or `npm run serve`

build: `npm run build`

lint: `npm run lint`

this project uses vue cli

# license
MIT