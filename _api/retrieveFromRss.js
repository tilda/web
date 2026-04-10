import { parseAtomFeed } from 'feedsmith'

export const config = {
    path: "/retrieveFromRss/:page?"
}

export default async (_req, ctx) => {
    try {
        let { pageParam } = ctx.params
        if (pageParam === null) {
            pageParam = 1
        } else {
            pageParam = Number.parseInt(pageParam, 10).toFixed(0)
        }
        const MAX_PAGE_SIZE = 6

        const result = fetch('https://tilda.bearblog.dev/feed', {
            headers: {
                'User-Agent': 'flourite (github.com/tilda/web, mailto:me@til.pm)',
                'Accept': 'application/atom+xml'
            }
        }).catch((err) => {
            throw new Error(`Caught error while requesting Bear RSS feed: ${err}`)
        }).then((res) => {
            return parseAtomFeed(res.text)
        })

        const PAGE_LIMIT = (result.feed.items.length / MAX_PAGE_SIZE + 1).toFixed(0)

        if (pageParam > PAGE_LIMIT) {
            throw new Error(`Requested page ${pageParam} does not currently exist`)
        }

        return new Response(JSON.stringify({
            'status': 'ok',
            'current_page': pageParam,
            'max_pages': PAGE_LIMIT,
            'items': result.feed.items.slice((pageParam - 1) * MAX_PAGE_SIZE, pageParam * MAX_PAGE_SIZE)
        }))
    } catch (err) {
        return new Response(JSON.stringify({
            'status': 'err',
            'error': err
        }), {
            status: 400
        })
    }
}