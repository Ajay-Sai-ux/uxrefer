from fastapi import FastAPI
from supabase_client import Supabase
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://api.uxrefer.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def all_sites():
        responce = Supabase.table("sites").select("*").execute()
        return responce