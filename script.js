function calculateRequiredGPA() {
    // Get values from input fields
    var cgpa = parseFloat(document.getElementById('cgpa').value);
    var currentSem = parseInt(document.getElementById('currentSem').value);
    var expectedCgpa = parseFloat(document.getElementById('expectedCgpa').value);

    // Check if input values are valid
    if (isNaN(cgpa) || isNaN(currentSem) || isNaN(expectedCgpa)) {
        alert('Please Enter Valid Data.');
        return;
    }

    // Calculate the required GPA
    var requiredGPA = (expectedCgpa * currentSem) - (cgpa * (currentSem - 1));

    // Display the result
    var resultParagraph = document.getElementById('result');

    if (requiredGPA > 10) {
        resultParagraph.innerHTML = '<strong style="text-align: center;">LOL! That\'s not happening this semester atleast...';
        // Make the message disappear after 3 seconds
        setTimeout(function() {
            resultParagraph.innerHTML = '';
        }, 5000);
    } else {
        resultParagraph.innerHTML = '<strong>At least ' + requiredGPA.toFixed(2) + '<strong> GPA is required this semester';
        setTimeout(function() {
            resultParagraph.innerHTML = '';
        }, 5000);
    }
}