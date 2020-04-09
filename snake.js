function drawRect (param) {
    context.beginPath();
    context.rect(param.x, param.y, param.width, param.height);
    context.fillStyle = param.fillColor;
    context.fill();
};

function clearCanvas() {
    // canvas.width = canvas.width;
    context.clearRect(0, 0, canvas.width, canvas.height);
};

function createGameMap(columns, rows) {
    const map = [];
// массив в массиве = матрица 
    for (let x = 0; x < columns; x++) {
        const row = [];
        
        for (let y = 0; y < rows; y++) {
            row.push({
                x: x,
                y: y,
                snake: false,
                food: false,
            });
            
        }

        map.push(row);
        
    }

    return map;
}

function fetRandomFreeCell(map) {
    const freeCells = [];
    
}