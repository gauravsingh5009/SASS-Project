
$(function(){
    $(".btnmob").click(function(){
        $(this).toggleClass("active");
        $(".menu").slideToggle()
     });
    

     $(".wrap-4-1 .tabs").click(function(e){
        e.preventDefault();
        $(".wrap-4-1 .tabs").removeClass("active");
        $(this).addClass("active");

        if($(this).text()=="DESCRIPTION"){
            $(".wrap-4-1 .tab1").fadeIn();
            $(".wrap-4-1 .tab2, .wrap-4-1 .tab3, .wrap-4-1 .tab4, .wrap-4-1 .tab5").fadeOut(0);
        }
        else if($(this).text()=="VIDEO"){
            $(".wrap-4-1 .tab2").fadeIn();
            $(".wrap-4-1 .tab1, .wrap-4-1 .tab3, .wrap-4-1 .tab4, .wrap-4-1 .tab5").fadeOut(0);
        }
        else if($(this).text()=="SIZE & SPECS"){
            $(".wrap-4-1 .tab3").fadeIn();
            $(".wrap-4-1 .tab1, .wrap-4-1 .tab2, .wrap-4-1 .tab4, .wrap-4-1 .tab5").fadeOut(0);
        }
        else if($(this).text()=="DELIVERY & RETURNS"){
            $(".wrap-4-1 .tab4").fadeIn();
            $(".wrap-4-1 .tab1, .wrap-4-1 .tab2, .wrap-4-1 .tab3, .wrap-4-1 .tab5").fadeOut(0);
        }
        else if($(this).text()=="REVIEWS"){
            $(".wrap-4-1 .tab5").fadeIn();
            $(".wrap-4-1 .tab1, .wrap-4-1 .tab2, .wrap-4-1 .tab3, .wrap-4-1 .tab4").fadeOut(0);
        }
    });
});