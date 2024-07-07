function createRect (width, height){
    return {
        getWidth,
        getHeight,
        getArea
    }
    function getWidth(){
        return width;
    }
    function getHeight(){
        return height
    }
    function getArea(){
        return width*height
    }
}
let myRect = createRect(5,3)

console.log(`Лицето на фигурата е ${myRect.getArea()} кв. см.`);
console.log(`Височина: ${myRect.getHeight()} см.`);