# DevPath Backend

Minimal Express backend foundation. The MongoDB connection helper is prepared
but is not called by the server; starting the health-check endpoint does not
connect to a database.

## Run locally

```sh
npm install
npm run dev
```

The server listens on `http://localhost:5000` by default. Check
`http://localhost:5000/api/health` for its health status.

Use `npm start` to run without watch mode. Configure `PORT` and `MONGODB_URI`
in `.env` as needed. `MONGODB_URI` is only used if the exported
`connectDatabase` helper is explicitly called.
