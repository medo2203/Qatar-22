$(function(){

    $(".tm").click(function(){
        $(this).toggleClass("selected")
    })

    const slct = document.getElementsByClassName("selected")
    const teams = document.getElementsByClassName("tm")

    if(teams.classList.contains("selected")){
        console.log("selected")
    }
});