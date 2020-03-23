var database = firebase.database();
function addPackage( packname, rupee , info) {

database.ref('packages/').push({
    name: packname,
    price: rupee,
    details: info,
    });    
}
    $("#submitbtn").click(function(){
        var packageName = $("#packagename").val();
        var price = $("#price").val();
        var details = $("#details").val();
        addPackage(packageName,price,details);
        $("#myform").reset(function(event){
            event.preventDefault();
        });
        })
        
        