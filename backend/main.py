from fastapi import FastAPI
from supabase_client import Supabase
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://uxrefer.com",
        "https://www.uxrefer.com",
        "https://api.uxrefer.com",
        "https://your-vercel-domain.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def all_sites():
        responce = Supabase.table("sites").select("*").execute()
        return responce