function toogleTab(evt, tabname, tabbtn, tabcontent)
{
    var tabbutton, tabcontent, i;
    tabcontent = document.getElementsByClassName(tabcontent)
    for(i = 0; i< tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none"
    }
    tabbutton = document.getElementsByClassName(tabbtn)
    for(i = 0; i< tabbutton.length; i++)
    {
        tabbutton[i].className =  tabbutton[i].className.replace(" active", "")
    }
    setLocal(evt.currentTarget.id)
    document.getElementById(tabname).style.display = "block"
    evt.currentTarget.className += " active"
}


function setLocal(value)
{
    return localStorage.setItem("tab_button", JSON.stringify(value))
}

function getLocal(key)
{
    return JSON.parse(localStorage.getItem(key))
}      

function autoClick(defaultbtn)
{

    var buttonname;
    if(getLocal("tab_button") === null)
    {
        buttonname = defaultbtn
    }
    else
    {
        buttonname = getLocal("tab_button")
    }
    document.querySelector("#"+buttonname).click()

}

autoClick("homebtn")
