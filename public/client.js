// client-side js
// run by the browser each time your view template is loaded

$(document).ready(function() {
    $('#calculate-carbs').on('click', function() {
        var weight = $('#weight').val();
        var cardioType = $('#cardio-type').val();
        var distance = $('#distance').val();

        if ($("input:radio[value=imperial]").is(":checked")) {
            // convert weight & distance to metric
            var weight = weight*.45359237;
            var distance = distance*1.609344;
        }

        switch (cardioType) {
          case 'swim-efficient':
            var carbs = (weight*distance*.25)*3;
            break;
          case 'swim-less-efficient':
            var carbs = (weight*distance*.25)*4;
            break;
          case 'bike':
            var carbs = (weight*distance*.25)*.4;
            break;
          case 'bike-avg-130':
            var carbs = (weight*distance*.25*.4)*.9;
            break;
          case 'bike-avg-120':
            var carbs = (weight*distance*.25*.4)*.75;
            break;
          case 'run':
            var carbs = weight*distance*.25;
            break;
          case 'run-avg-130':
            var carbs = (weight*distance*.25)*.9;
            break;
          case 'run-avg-120':
            var carbs = (weight*distance*.25)*.75;
            break;
        }

        $('#results').show();
        $('#carbs').text(Math.round(carbs));
    });
});