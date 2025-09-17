# Back End Tapakila

## Description

## Project Structure

```
my_fastapi_project/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── api/
│   │   ├── v1/
│   │   │   ├── endpoints/
│   │   │   │   ├── users.py
│   │   │   │   └── items.py
│   ├── core/
│   │   ├── config.py
│   │   └── dependencies.py
│   ├── domain/
│   │   ├── models/
│   │   │   ├── user.py
│   │   │   └── item.py
│   │   ├── services/
│   │   │   ├── user_service.py
│   │   │   └── item_service.py
│   ├── infrastructure/
│   │   ├── database.py
│   │   ├── repositories/
│   │   │   ├── user_repository.py
│   │   │   └── item_repository.py
│   ├── schemas/
│   │   ├── user_schema.py
│   │   └── item_schema.py
├── tests/
│   ├── test_users.py
│   ├── test_items.py
├── requirements.txt
├── README.md
└── .env
```


## Requirement to start development

- **Python3**: `3.10.12`
- **MySQL server**: 
- **env file**: check schema [here]()

## Start development


