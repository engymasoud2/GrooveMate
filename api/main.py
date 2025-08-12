from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def diffHello():
    return {"message" : "Hello World"}