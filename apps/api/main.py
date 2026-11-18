from fastapi import FastAPI


app = FastAPI(title="mint API")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


def main():
    print("Hello from corebanking-api!")


if __name__ == "__main__":
    main()
