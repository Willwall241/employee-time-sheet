 

var config = {
    apiKey: "AIzaSyDfXsUEODQ9iw2F87rPR4g4UQH9Zgu46_Y",
    authDomain: "testproject-47b0e.firebaseapp.com",
    databaseURL: "https://testproject-47b0e.firebaseio.com",
    projectId: "testproject-47b0e",
    storageBucket: "testproject-47b0e.appspot.com",
    messagingSenderId: "3342049710"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


database.ref().on("child_added",function(snapshot)
{
    console.log(snapshot.val().nameVar);
    var newtable = $("<tr>");
    var newName = $("<td>" + snapshot.val().nameVar + "</td>");
    var newRole = $("<td>" + snapshot.val().roleVar + "</td>");
    var startDate = new Date();
    var stringDate = snapshot.val().startDateVar;
    startDate.setMonth(parseInt(stringDate.split("/")));
    var day = stringDate.split("/");
    console.log(day);
    //startDate.setDay(parseInt());
    startDate.setYear(parseInt(stringDate));
    console.log(startDate);
    console.log(snapshot.val().startDateVar);
    //d.setMonth(d.getMonth() - 3);
    var totalMonthsWorked = $("<td>" + snapshot.val().startDateVar + "</td>");
    var newStartingDate = $("<td>" + snapshot.val().startDateVar + "</td>");
    //var monthlyRate = $("<td>" + snapshot.val().monthlyRateVar + "</td>");
    //var monthlyRate = $("<td>" + snapshot.val().monthlyRateVar + "</td>");
    //var monthlyRate = $("<td>" + snapshot.val().monthlyRateVar + "</td>");
    newtable.append(newName);
    newtable.append(newRole);
    newtable.append(newStartingDate);
   // newtable.append(monthlyRate);
    $(".table").append(newtable);

});

// database.ref.orderbyChild("dateAdded").limitToLast(1).on("child_added",function{

// })


$("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("push starting");
    // Get the input values
    var name = $("#employee-name").val().trim();
    var role = ($("#role").val().trim());
    var startDate = ($("#start-Date").val().trim());
    var monthlyRate = parseInt($("#monthly-rate").val().trim());
   
      // Save the new price in Firebase. This will cause our "value" callback above to fire and update
      // the UI.
      database.ref().push({
        nameVar: name,
        roleVar: role,
        startDateVar: startDate,
        monthlyRateVar: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
   
   });