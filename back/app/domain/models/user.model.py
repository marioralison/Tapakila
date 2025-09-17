from dataclasses import dataclass
from uuid import UUID, uuid4
from datetime import datetime


@dataclass
class User:
    id: UUID
    firstname: str
    lastname: str
    email: str
    password: str
    created_at: datetime

    @classmethod
    def create(cls, firstname: str, lastname: str, email: str, password: str) -> "User":
        return cls(
            id=uuid4(), 
            firstname=firstname, 
            lastname=lastname, 
            email=email, 
            password= password,
            created_at=datetime.now()
        )