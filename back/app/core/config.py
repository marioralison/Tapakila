from pydantic import BaseModel


class Settings(BaseModel):
    PROJECT_NAME: str = "Tapakila"
    DATA_BASE_URL: str = ""


setting = Settings()