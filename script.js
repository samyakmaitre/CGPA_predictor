function calculateRequiredGPA() {
        
    var cgpa = parseFloat(document.getElementById('cgpa').value);
    var currentSem = parseInt(document.getElementById('currentSem').value);
    var expectedCgpa = parseFloat(document.getElementById('expectedCgpa').value);

        
    if (isNaN(cgpa) || isNaN(currentSem) || isNaN(expectedCgpa)) {
        alert('Please Enter Valid Data.');
        return;
    }

    
    var requiredGPA = (expectedCgpa * currentSem) - (cgpa * (currentSem - 1));

        
    var resultParagraph = document.getElementById('result');

    if (requiredGPA > 10) {
        resultParagraph.innerHTML = '<strong style="text-align: center;">LOL! That\'s not happening this semester atleast...';
            
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