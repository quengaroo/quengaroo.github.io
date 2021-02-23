function bigger() 
{
    document.getElementById('text').style.fontSize = '24em';
}
function fancyschamncy() 
{
    document.getElementById("text").style.fontWeight = 'bold';
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}
function boringbetty() 
{
    document.getElementById("text").style.fontWeight = 'initial';
    document.getElementById("text").style.color = "initial";
    document.getElementById("text").style.textDecoration = "initial";
}
function moo() 
{
    document.getElementById('text').style.textTransform = 'uppercase'
    var str = document.getElementById('text').value;
    var parts = str.split(" ");
    str = parts.join("Moo");
}