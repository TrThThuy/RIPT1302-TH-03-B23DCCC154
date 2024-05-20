from fastapi import FastAPI
from typing import Union

app = FastAPI()

@app.get("/add")
async def add(a: Union[int, float], b: Union[int, float]):
    return {"result": a + b}

@app.get("/subtract")
async def subtract(a: Union[int, float], b: Union[int, float]):
    return {"result": a - b}

@app.get("/multiply")
async def multiply(a: Union[int, float], b: Union[int, float]):
    return {"result": a * b}

@app.get("/divide")
async def divide(a: Union[int, float], b: Union[int, float]):
    if b == 0:
        return {"error": "Cannot divide by zero"}
    return {"result": a / b}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
