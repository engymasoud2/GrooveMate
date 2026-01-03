from sqlalchemy import Column, Integer, String, CHAR
from .database import Base

class User(Base):
    __tablename__ = "GMcredentials"  

    userNo = Column(Integer, primary_key=True, index=True)
    firstName = Column(String(50), nullable=False)
    lastName = Column(String(50), nullable=False)
    username = Column(String(50), unique=True, nullable=False)
    accountPass = Column(CHAR(64), nullable=False)
