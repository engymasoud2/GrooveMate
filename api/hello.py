from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def diffHello():
    return {"message" : "Hello World"}

@app.get("/hello")
def sayHello():
    return{"message" : "Hello world again"}