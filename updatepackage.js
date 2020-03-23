var database = firebase.database().ref('packages/');

function addPackage( packname, rupee , info){

    database.push({
        name: packname,
        price: rupee,
        details: info,
        });    
};

$("#submitbtn").click(function(){
    var packageName = $("#packagename").val();
    var price = $("#price").val();
    var details = $("#details").val();
    addPackage(packageName,price,details);
    $("#myform").reset(function(event){
        event.preventDefault();
    });
});

function removePackage(y){
    firebase.database().ref("packages/" + y).remove();
}

$("#removebtn").click(function(){
    var rempack =  $("#rempackage").val();
     database.orderByChild('name').equalTo(rempack).on("value", function(snapshot) {
    // console.log(snapshot.val());
    //     var key = snapshot.val();
    //     removePackage(key);
    snapshot.forEach(function(data) {
        console.log(data.key);
        var key = data.key;
        removePackage(key);
    });
});
});




        
