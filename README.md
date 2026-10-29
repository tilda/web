# `fluorite`

til.pm's 2nd iteration (as far as the domain is concerned).  Vue 3/Vite with vue-router & pinia.

## Development

The only real required step is adding an `.env` with the following variables for the blog tab to work:
    - `VITE_GHOST_URL`
    - `VITE_GHOST_CONTENT_KEY`
    - `VITE_GHOST_VERSION`

Setting up a dedicated Ghost instance for testing is not necessary. For demo instance details, see [Ghost Content API docs](https://docs.ghost.org/content-api/javascript#working-example).

After that: `npm i`, and then `npm run dev` (or `vite`)

## License

Apache 2
