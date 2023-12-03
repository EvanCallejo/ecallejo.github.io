
function changeToBold() 
{
    //var toBold = document.getElementById("textArea").value;
    //toBold = text.bold();
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    document.getElementById("textArea").style.textDecoration = "underline";
}

function changeToNormal() 
{
    //var toBold = document.getElementById("textArea").value;
    //toBold = text.normal();
    document.getElementById("textArea").style.fontWeight = "normal";
}

function increaseFontSize()
{
    document.getElementById("textArea").style.fontSize = "24px";
}

function toUpperCase()
{
    var userTextElement = document.getElementById("textArea");
    userTextElement.value = userTextElement.value.toUpperCase();
    var valueInText = userTextElement.value;
    var parts = valueInText.split(".");
    userTextElement.value = parts.join("-Moo.");
}
    