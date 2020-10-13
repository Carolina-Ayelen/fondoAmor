let elemento = document.getElementById('matrix');
let i = elemento.getContext('2d');
let width = document.body.clientWidth;
let height = document.body.clientHeight;

//expandemos el canvas al tamaño client
elemento.width = width;
elemento.height = height;

let position = Array(300).join(0).split('');

function initMatrix(){
    i.fillStyle = "#13038C";
    i.fillRect(0, 0, width, height);
    i.fillStyle = "#FF00EA";

    i.font = "11pt arial";

    position.map(function(y, index){
        let texto = String.fromCharCode(84, 69, 32, 65, 77, 79, 9829);
        let x = (index * 15) + 15;

        matrix.getContext('2d').fillText(texto, x, y);

        if(y > 100 + Math.random()* 1e5){
            position[index] = 0;
        }else{
            position[index] = y + 15;
        }
    })

}

setInterval(initMatrix, 50);