var MODEL = (function(){

    var _updateView = function(pageName){

        if(pageName != "") {
            $.get(`pages/${pageName}/${pageName}.html`, function(data){
                $("#app").html(data);
            });
        }else {
            $.get(`pages/home/home.html`, function
            (data){
                $("#app").html(data);
            });
        }
    };

    // var _nameId = function(idName){

    //     if(idName != "") {
    //         $.get(".button " + "id")
    //     };
    // };
        return{
            updateView: _updateView,
        };

}) ();