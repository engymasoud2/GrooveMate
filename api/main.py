from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def diffHello():
    return {"message" : "sup this is the new an updated message"}