$( document ).ready(function() 
{
    $(".grid-item").mouseover(function(event)
    {
        var n = this.id;
        $(this).css("background-color","orange");
        $(this).css("color","black");
        switch(n)
        {
            case "cell1":
                $("#centralImage").attr("src","images/top-left.jpg");
                break;
            case "cell2":
                $("#centralImage").attr("src","images/top-middle.jpg");
                break;
            case "cell3": 
                $("#centralImage").attr("src","images/top-right.jpg");
                break;
            
            case "cell4":
                $("#centralImage").attr("src","images/middle-left.jpg");
                break;
            case "cell6":
                $("#centralImage").attr("src","images/middle-right.jpg");
                break;
    
            case "cell7": 
                $("#centralImage").attr("src","images/lower-left.jpg");
                break;    
            case "cell8":
                $("#centralImage").attr("src","images/lower-middle.jpg");
                break;
    
            case "cell9": 
                $("#centralImage").attr("src","images/lower-right.jpg");
                break;   
            default:
            $("#centralImage").attr("src","images/central.jpg");
            break;

        }
    
    });

    $(".grid-item").mouseout(function(event)
    { 
            $(this).css("background-color","white");
            $(this).css("color","grey");
            $("#centralImage").attr("src","images/central.jpg");
    });




});