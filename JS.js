$(document).on("mobileinit", function(){
    
});

$(document).ready(function (){
    var page;
    $(document).on("pagechange",function(ev,data){
        page=data.toPage.attr("id");
        if(page!="home" && page!="info"){
            localStorage.lastPage = page;
        }
    });
    $("#startTut").on("click",function(ev){
        if(page!=null){
            ev.preventDefault();
            $(this).attr("href","#" + localStorage.lastPage);
            page=null;
        } else if (localStorage.lastPage==="s6"){
            $(this).attr("href","#s1");
        }
    });
});