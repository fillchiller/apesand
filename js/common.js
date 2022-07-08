$(document).ready(function () {
    $("#header").load("./header.html");
    $("#footer").load("./footer.html");

    //menu
    $(document).on("mouseover", ".sub_menu > ul", function(){
        const index = $(this).index();
        $("nav > ul > li").eq(index).addClass("active");
    })
    $(document).on("mouseout", ".sub_menu > ul", function(){
        const index = $(this).index();
        $("nav > ul > li").eq(index).removeClass("active");
    })


});