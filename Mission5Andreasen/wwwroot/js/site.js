// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

$(document).ready(function () {
    $("#calculateButton").click(function () {
        // Get the number of hours entered by the user
        var hours = parseFloat($("#hours").val());

        // Check if the input is correct and display if not
        if (isNaN(hours) || hours < 0) {
            $("#hoursError").text("Please enter a valid positive number.");
            return;
        } else {
            $("#hoursError").text("");
        }

        var hourlyRate = 20;

        var totalCost = hours * hourlyRate;

        // Display the total cost
        $("#totalCost").val("$" + totalCost.toFixed(2));
    });
});