
firebase.database().ref('/packages/').once('value').then(function(snapshot) {
   if (snapshot.exists()){
        snapshot.forEach(function(childSnapshot) {
        $("#displayPackages").append(
            `<div class="col-4 p-3 mx-auto">
                <div class="card mx-auto border-0" style="width: 18rem;">
                    <div class="card-body mx-auto">
                        <h4 class="card-title text-center" style="text-transform: uppercase;">`+childSnapshot.val().name+`</h4>
                        <h5>Price : <span>`+childSnapshot.val().price+`</span></h5>
                        <h5 class="card-subtitle mb-2 text-muted">Details :</h5>
                        <p class="card-text">`+childSnapshot.val().details+`</p>
                    </div>
                 </div>
            </div>`)
        });
    }
   else
      $("#hide").hide();
});
