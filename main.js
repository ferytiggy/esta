var canvas = new fabric.Canvas('myCanvas');
 //sirve para traer la referencia del canvas
player_x = 10;
//la posición del jugador se pone en x10
player_y = 10;
 //la posición del jugador se pone en y10
block_image_width = 30;
//ancho de los bloques en 30
block_image_height = 30;
 //alto de los bloques en 30
var player_object= "";
//variable para definir el objeto del jugador
var block_image_object= "";
 //variable para definir el objeto de los bloques
function player_update()
//función player update
{
    fabric.Image.fromURL("player.png", function(Img) {
        //define la función para subir una imagen al lienzo
        //fabric es el nombre de la biblioteca que usamos
        //img indica que vamos a subir una imagen
        //fromURL contiene el enlace de tu imagen
        //function es la función que esta mandando a llamar la imagen
    player_object = Img;
    //a esa variable le mandas tu objeto
    player_object.scaleToWidth(150);
    //al objeto se le añade el ancho de tu jugador
    player_object.scaleToHeight(140);
    //al objeto se le añade el alto de tu jugador
    player_object.set({
        //establece las coordenadas del jugador
    top:player_y,
    //cordenada y (asigna lo que contiene mi variable player_y)
    left:player_x
    //coordenadax (asigna lo que contiene mi variable plater_x)
    });
    canvas.add(player_object);
 //añade la imagen al lienzo
    });
}
 
function new_image(get_image)
//función newimage con el atributo get_image
{
    fabric.Image.fromURL(get_image, function(Img) {
        //lo mismo de arriba pero para bloques
    block_image_object = Img;
 
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);
 
    });
 
}
 
window.addEventListener("keydown", my_keydown);
 //cuando se inicialise la ventana se añade el evento keydown
function my_keydown(e)
//se crea la función mykeydown con el evento keydown
{
keyPressed = e.keyCode;
//variable keyPressed igual al evento keycode
//obtiene el valor presionado de la tecla
console.log(keyPressed);
//se pone en la consola la variable keyPressed
if(e.shiftKey == true && keyPressed == '80')
//si se presiona la tecla shift y la tecla p
{
    console.log("Se presiona p y shift al mismo tiempo");
    //se manda a la consola el texto de se presiona p y shift al mismo tiempo
    block_image_width = block_image_width + 10;
    //se le suma 10 pixeles a la variable
    block_image_height = block_image_height + 10;
    //se le suman 10 pixeles a la variable
    document.getElementById("current_width").innerHTML = block_image_width;
    //se manda a llamar el id current width con el ancho que contenga la variable
    document.getElementById("current_height").innerHTML = block_image_height;  
    //lo mismo pero con alto
}
if(e.shiftKey && keyPressed == '77')
//si se presiona shift y m al mismo tiempo
{
    console.log("Se presiona m y shift al mismo tiempo");
    //se manda a la consola el texto de Se presiona m y shift al mismo tiempo
    block_image_width = block_image_width - 10;
    //se le restan a tu variable 10 pixeles
    block_image_height = block_image_height - 10;
    //lo mismo pero con alto
    document.getElementById("current_width").innerHTML = block_image_width;
    //se manda a llamar el id current width y se pone como la variable
    document.getElementById("current_height").innerHTML = block_image_height;
    //lo mismo pero con alto
}
 
    if(keyPressed == '38')
    //si la tecla presionada es igual a 38 (flecha para arriba)
    {
        up();
        //función up
        console.log("up");
        //se manda a la consola el texto de up
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    //lo mismo pero para abajo
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    //lo mismo pero para la izquierda
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    //lo mismo para la derecha
    if(keyPressed == '87')
    //si la tecla presionada es igual a 87 (w)
    {
        new_image('1.jpg');
        //se pone la imagen como wall.png
        console.log("w");
        //se manda a la consola el texto de w
    }
    if(keyPressed == '71')
    {
        new_image('suelo.jpg');
        console.log("g");
    }
    if(keyPressed == '76')
    {
        new_image('lima.png');
        console.log("l");
    }
    if(keyPressed == '84')
    {
        new_image('cafe.jpg');
        console.log("t");
    }
    if(keyPressed == '82')
    {
        new_image('tejas.jpg');
        console.log("r");
    }
    if(keyPressed == '89')
    {
        new_image('ama.wepb');
        console.log("y");
    }
    if(keyPressed == '68')
    {
        new_image('images.jpg');
        console.log("d");
    }
    if(keyPressed == '85')
    {
        new_image('images(1).jpg');
        console.log("u");
    }
    if(keyPressed == '67')
    {
        new_image('cloud.jpg');
        console.log("c");
    }
   
}
function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("altura del bloque = " + block_image_height);
        console.log("Cuando se presiona la flecha hacia arriba, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
 
function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;
        console.log("altura del bloque = " + block_image_height);
        console.log("Cuando se presiona la flecha hacia abajo, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
 
function left()
{
    if(player_x >0)
    {
        player_x = player_x - block_image_width;
        console.log("ancho del bloque = " + block_image_width);
        console.log("Cuando se presiona la flecha izquierda, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
 
function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_image_width;
        console.log("ancho del bloque = " + block_image_width);
        console.log("Cuando se presiona la flecha derecha, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
