const button = document.getElementById("sendMessageButton");

// button1 click event listener to apply function
button.addEventListener("click", function() {
event.preventDefault();
                    $('#success').html("<div class='alert alert-danger'>");

                    $('#success > .alert-danger').append($("<strong>").text("Sorry  , it seems that our mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
});
