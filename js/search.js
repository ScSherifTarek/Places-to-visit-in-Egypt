$(document).ready(function(){    
    $(".filtermenu li").click(function() {
        $(".filtermenu li").removeClass("active");
        $(this).addClass("active");
        $value = $(this).attr('data-filter');
        $(".container .post").filter(function() {
            if($value=="all")
            {
                $(this).show(400);
            }
            else if($(this).hasClass($value))
            {
                $(this).show(400);
            }
            else
            {
                $(this).hide(400);
            }
        });
        
    });
});


