function fun()
{
    // alert("Hello");
    var elmntToView = document.getElementById("startersScroll");

    if(elmntToView.style.display=="block")
        elmntToView.style.display="none";
    else
        elmntToView.style.display="block";

    elmntToView.scrollIntoView(); 

}
