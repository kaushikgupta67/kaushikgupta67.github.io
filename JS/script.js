function fun(id)
{
    // alert("Hello");
    var elmntToView = document.getElementById((id+"Scroll"));

    if(elmntToView.style.display=="block")
        elmntToView.style.display="none";
    else
        elmntToView.style.display="block";

    elmntToView.scrollIntoView(); 

}
