from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

# --- Configuración de CORS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todos los dominios. En producción, usa una lista como ["https://tudominio.com"]
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos los métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permite todas las cabeceras
)

CMC_URL = "https://coinmarketcap.com"
CMC_API_KEY = "e4cd8dedba6942a1ad3628f74274d38a"

@app.get("/proxy-crypto")
async def get_crypto_map():
    headers = {
        "Accepts": "application/json",
        "X-CMC_PRO_API_KEY": CMC_API_KEY,
    }
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(CMC_URL, headers=headers)
            response.raise_for_status()
            return response.json()
        except httpx.HTTPStatusError as e:
            raise HTTPException(status_code=e.response.status_code, detail=f"Error en CMC: {e.response.text}")
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)