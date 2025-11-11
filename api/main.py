from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import hashlib  #SHA2 hashing
from api import database, models

app = FastAPI()

# Allow CORS (React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your frontend URL later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=database.engine)

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Pydantic model for request
class SignInRequest(BaseModel):
    username: str
    password: str

@app.get("/")
def root():
    return {"message": "Backend is running 🚀"}

@app.post("/signin")
def signin(request: SignInRequest, db: Session = Depends(get_db)):
    # Hash password with SHA2 (same as MySQL)
    hashed_password = hashlib.sha256(request.password.encode()).hexdigest()

    # Query for matching user
    user = db.query(models.User).filter(models.User.username == request.username).first()

    if not user or user.accountPass != hashed_password:
        raise HTTPException(status_code=401, detail="Password or username may be invalid. Please try again.")

    return {"message": f"Welcome, {user.firstName}!"}
