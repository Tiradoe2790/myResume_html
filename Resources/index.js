document.addEventListener('DOMContentLoaded', function() {
    var projectCards = document.querySelectorAll('.project-card');
    var projectButtons = document.querySelectorAll('.project-btn');

    projectButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // toggle project details
            var parent =button.parentElement;
            parent.classList.toggle('expanded');
        })
    })
  
});  