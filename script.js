const matriz=[["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];
function encriptar()
{
    var texto=document.getElementById("caja-texto").value;
    for(let i=0;i<matriz.length;i++)
    {
        if(texto.includes(matriz[i][0]))
        {
            texto=texto.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    var resultado=document.getElementById("caja-resultado");
    resultado.value=texto;
}
function desencriptar()
{
    var texto=document.getElementById("caja-texto").value;
    for(let i=0;i<matriz.length;i++)
    {
        if(texto.includes(matriz[i][1]))
        {
            texto=texto.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }
    var resultado=document.getElementById("caja-resultado");
    resultado.value=texto;
}


function copiar()
{
    var texto=document.getElementById("caja-resultado").value;
    navigator.clipboard.writeText(texto);
}


