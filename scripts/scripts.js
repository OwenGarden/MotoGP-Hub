
// All of the linking between pages 
        document.getElementById("logo").addEventListener("click", function() {
            window.location.href = "index.html";
        });
        document.getElementById("homeButton").addEventListener("click", function() {
            window.location.href = "index.html";
        });
        document.getElementById("scheduleButton").addEventListener("click", function() {
            window.location.href = "event_calendar.html";
        });
        document.getElementById("imgButton").addEventListener("click", function() {
            window.location.href = "img_gallery.html";
        });
        document.getElementById("membersButton").addEventListener("click", function() {
            window.location.href = "current_members.html";
        });
        document.getElementById("contactButton").addEventListener("click", function() {
            window.location.href = "contact_us.html";
        });
      
// Home page Login part
        function login() {
            var email = document.querySelector("input[type='email']").value;
            var password = document.querySelector("input[type='password']").value;
            
            if (email.trim() !== "" && password.trim() !== "") {
                alert('You have been logged in!');
            } else {
                alert('Please enter both email and password.');
            }
        }

// Clearing the comment form after send button is pressed
        function sendForm() {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("comments").value = "";
    
            let checkButtons = document.getElementsByName("membershipStatus");
            for (let i = 0; i < checkButtons.length; i++) {
                checkButtons[i].checked = false;
            }
    
            document.getElementById("fileAttachment").value = "";
    
            document.getElementById("form_outcome").innerHTML = "Form has been sent successfully!";
        }

// When you hover over the images it will tell you the riders name
        var galleryImages = document.querySelectorAll('.gallery-img');
        galleryImages.forEach(img => {
            img.addEventListener('mouseover', function() {
                const popup = this.nextElementSibling;
                popup.style.display = "block";
            });
            img.addEventListener('mouseout', function() {
                const popup = this.nextElementSibling;
                popup.style.display = "none";
            });
        });

// Form at the bottom of the schedule
        function submit_event() {
    
            var title = document.forms["events"]["event_title"].value;
            var date = document.forms["events"]["event_date"].value;
            if (title === "") {
                alert("An event must have a title!");
            } else {
        
                if (date === "") {
                    alert("An event must have a date!");
                } else {
                    alert("Event submitted! The society will contact you soon!");
                }
            }
        }
    
