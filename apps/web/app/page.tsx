export default function Home() {
  return (
    <main>
      <header className="header">
        <span className="wordmark">mint<span>.</span></span>
        <span className="label">Application workspace</span>
      </header>

      <section className="intro" aria-labelledby="title">
        <p className="eyebrow">A place to begin</p>
        <h1 id="title">Hello, mint.</h1>
        <p className="description">
          Your application is ready to build. Start with the frontend, or explore
          the local API documentation when the backend is running.
        </p>
        <a className="link" href="http://127.0.0.1:8000/docs">
          Local API docs <span aria-hidden="true">&rarr;</span>
        </a>
      </section>

      <footer>
        <span>Next.js / FastAPI</span>
        <span>Built to grow</span>
      </footer>
    </main>
  );
}
