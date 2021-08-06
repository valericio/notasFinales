/* Valericio Carrasco */

/* definimos las variales */
var nombre      = "";
var carrera     = "";
var htmlNota1   = 0;
var htmlNota2   = 0;
var htmlNota3   = 0;
var cssNota1    = 0;
var cssNota2    = 0;
var cssNota3    = 0;
var javaNota1   = 0;
var javaNota2   = 0;
var promedioHtml = 0;
var promedioCss  = 0;
var promedioJava = 0;
var nota    = 0;
var x       = 0;

/* solicitamos por pantalla los datos */
var nombre  = prompt("Indicar nombre y apellido","Jhon Doe");
var carrera = prompt("Indicar carrera", "Desarrollo WEB");

/* solicitamos las notas */
var htmlNota1 = prompt ("Ingresar nota numero 1 [HTML]",1);
var htmlNota2 = prompt ("Ingresar nota numero 2 [HTML]",1);
var htmlNota3 = prompt ("Ingresar nota numero 3 [HTML]",1);

var cssNota1 = prompt ("Ingresar nota numero 1 [CSS]",1);
var cssNota2 = prompt ("Ingresar nota numero 2 [CSS]",1);
var cssNota3 = prompt ("Ingresar nota numero 3 [CSS]",1);

var javaNota1 = prompt ("Ingresar nota numero 1 [JavaScript]",1);
var javaNota2 = prompt ("Ingresar nota numero 2 [JavaScript]",1);

/* pasamos a numeros */
htmlNota1 = parseInt (htmlNota1);
htmlNota2 = parseInt (htmlNota2);
htmlNota3 = parseInt (htmlNota3);

cssNota1 = parseInt (cssNota3);
cssNota2 = parseInt (cssNota2);
cssNota3 = parseInt (cssNota3);

javaNota1 = parseInt (javaNota1);
javaNota2 = parseInt (javaNota2);


/* calculamos los promedios */
var promedioHtml = (htmlNota1+htmlNota2+htmlNota3)/3;
var promedioCss  = (cssNota1+cssNota2+cssNota3)/3;

/*calculo la nota x para pasar con un 4 */

var nota = javaNota1*0.3333333 + javaNota2*0.3333333;
var x = (4-nota)/0.3;

/* Mostramos la tabla por pantalla */
document.write( "<div class='container'>");
document.write( "<h1>Notas finales</h1>" )
document.write( "<div class='row'>");
document.write( "<div class='col-3'>");
document.write( "Nombre:");
document.write( "</div>" );
document.write( "<div class='col-3'>");
document.write(   nombre );
document.write( "</div>" );
document.write( "</div>" );
document.write( "<div class='row'>");
document.write( "<div class='col-3'>");
document.write( "Carrera:");
document.write( "</div>" );
document.write( "<div class='col-3'>");
document.write(  carrera );
document.write( "</div>" );
document.write( "</div>" );
document.write( "</div>" );


document.write( "<div class='container'>" );
document.write( "<table class='table'>");
document.write( "<thead class='thead-dark'>");
document.write( "<tr>");
document.write( "<th scope='col'>Ramo</th>");
document.write( "<th scope='col'>Nota 1</th>");
document.write( "<th scope='col'>Nota 2</th>");
document.write( "<th scope='col'>Nota 3</th>");
document.write( "<th scope='col'>Promedio</th>");
document.write( "<tr>");
document.write( "</thead>");
document.write( "<tbody>");
document.write( "<tr>");
document.write( "<th scope='row'>HTML</th>");
document.write( "<td>" + htmlNota1 + "</td>");
document.write( "<td>" + htmlNota2 + "</td>");
document.write( "<td>" + htmlNota3 + "</td>");
document.write( "<td>" + promedioHtml.toFixed(2) + "</td>");
document.write( "</tr>");
document.write( "<tr>");
document.write( "<th scope='row'>CSS</th>");
document.write( "<td>" + cssNota1 + "</td>");
document.write( "<td>" + cssNota2 + "</td>");
document.write( "<td>" + cssNota3 + "</td>");
document.write( "<td>" + promedioCss.toFixed(2) + "</td>");
document.write( "</tr>");
document.write( "<tr>");
document.write( "<th scope='row'>JavaScript</th>");
document.write( "<td>" + javaNota1 + "</td>");
document.write( "<td>" + javaNota2 + "</td>");
document.write( "<td> - </td>");
document.write( "<td> - </td>");
document.write( "</tr>");
document.write( "</tbody>");
document.write( "</table>");
document.write( "</ br>");
document.write( "Para aprobar el ramo de JavaScript con nota 4, necesitas obtener un " + Math.trunc(x) + " en la nota 3 ");