import os
from pathlib import Path

from dotenv import load_dotenv
from supabase import Client, create_client
from supabase.lib.client_options import SyncClientOptions

load_dotenv(Path(__file__).resolve().parent / ".env")


def get_supabase() -> Client:
    url = os.environ.get("SUPABASE_URL")
    key = os.environ.get("SUPABASE_SECRET_KEY")
    if not url or not key:
        raise RuntimeError("SUPABASE_URL and SUPABASE_SECRET_KEY are required")

    return create_client(
        url,
        key,
        options=SyncClientOptions(
            auto_refresh_token=False,
            persist_session=False,
        ),
    )
