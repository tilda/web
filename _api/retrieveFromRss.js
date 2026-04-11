import { parseAtomFeed } from 'feedsmith'

export default async (req) => {
    try {
        const REQUEST_URL = new URL(req.url)
        if (REQUEST_URL.searchParams.get("page")) {
            pageParam = REQUEST_URL.searchParams.get("page")
        } else {
            pageParam = 1
        }

        const MAX_PAGE_SIZE = 6

        const result = await fetch('https://tilda.bearblog.dev/feed/', {
            headers: {
                'User-Agent': 'flourite (github.com/tilda/web, mailto:me@til.pm)',
                'Accept': 'application/atom+xml'
            }
        })
        if (!result.ok) {
            throw new Error(`Caught HTTP error code ${result.status} while requesting from Bear`)
        }
        const BEAR_RESPONSE = await result.text()
        const feed = parseAtomFeed(BEAR_RESPONSE)

        if (feed.entries) {
            const PAGE_LIMIT = Number.parseInt((feed.entries.length / MAX_PAGE_SIZE + 1).toFixed(0), 10)

            if (pageParam > PAGE_LIMIT) {
                throw new Error(`Requested page ${pageParam} does not currently exist`)
            }

            return Response.json({
                'current_page': pageParam,
                'max_pages': PAGE_LIMIT,
                'items': feed.entries.slice((pageParam - 1) * MAX_PAGE_SIZE, pageParam * MAX_PAGE_SIZE)
            }, {
                headers: {
                    'Netlify-Vary': 'query=page',
                    'Netlify-CDN-Cache-Control': 'public, max-age=300, stale-while-revalidate=30, durable',
                }
            })
        } else {
            return Response(null, { status: 204 })
        }
    } catch (err) {
        console.log(err)

        return Response.json({
            'error': err.toString()
        }, {
            status: 400
        })
    }
}