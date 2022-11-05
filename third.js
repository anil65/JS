function clickbutton()
{
    const a = document.getElementsByClassName('abc');
    let txt = "";
    for(let b = 0; b < a.length;b++)
    {
        txt += a.item(b)+"<br>";
    }
    document.getElementById('demo').innerHTML = txt;
}