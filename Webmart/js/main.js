//Page Top Scroll

var scrollbtn = document.getElementById('pageup');
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() 
    {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
        {
            scrollbtn.style.display = "block";
        } 
        else 
        {
            scrollbtn.style.display = "none";
        }
    }

    function topFunction() 
    {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

//Tab

function openService(cityName) 
{
    var i;
    var x = document.getElementsByClassName("tab");
    var y = document.getElementsByClassName("tab-btn");

    for (i = 0; i < x.length; i++)
    {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block"; 
}