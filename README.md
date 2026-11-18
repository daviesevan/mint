# mint

mint is an open-source core banking system in development for
microfinance institutions in Kenya. The monorepo contains a Next.js frontend
and a FastAPI backend.

The project is at the starter stage and is not ready for production or handling
financial transactions. The repository does not yet include a license.

## Requirements

- Node.js 20.9 or later and npm
- Python 3.13
- [uv](https://docs.astral.sh/uv/)

## Setup

```sh
npm --prefix apps/web ci
uv sync --directory apps/api
```

In separate terminals, start the frontend and backend:

```sh
npm run dev:web
npm run dev:api
```

The frontend runs at <http://localhost:3000>. The API runs at
<http://127.0.0.1:8000>, with interactive documentation at
<http://127.0.0.1:8000/docs> and a health endpoint at
<http://127.0.0.1:8000/health>.

## UI components

The web app uses [UIArc](https://uiarc.dev/docs/installation). Its foundation
is imported in the root layout, and the Button is available at
`@/components/arc/button/button`. Add other components from the web directory:

```sh
cd apps/web
npx shadcn@latest add @uiarc/dialog
```

## Checks

```sh
npm run lint:web
npm run build:web
npm run test:api
```

The frontend and API are independent starters; no banking functionality,
database, authentication, or frontend-to-API integration is configured yet.

## Collaborate

Building for microfinance in Kenya? Ideas, feedback, and contributions are
welcome. Share an issue or pull request, or connect with the project creator:

- [GitHub](https://github.com/daviesevan)
- [X](https://x.com/daviesevan_)
- [Instagram](https://www.instagram.com/thelifewelivin/)
