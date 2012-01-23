$(document).ready(function() {
    $(".btn.year").click(function(e){
        var target = $(e.target);
        target.toggleClass("primary");

        renderSelection();
    });
    
    $(".btn.story").click(function(e){
        var target = $(e.target);
        target.toggleClass("primary");
        
        renderSelection();
    });
    
    function renderSelection(){
        var stories = [];
        $(".btn.story").each(function(i, e){
            var btn = $(e);
            if(btn.hasClass("primary"))
                stories.push(btn.text().toLowerCase());
        });
        
        var years = [];
        $(".btn.year").each(function(i, e){
            var btn = $(e);
            if(btn.hasClass("primary"))
                years.push(parseInt(btn.text()));
        });
                
        showFiltered(years, stories);
    }
});