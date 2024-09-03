document.getElementById("profileForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the default form submission

    // Form validation logic here if needed
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.getElementById("gender").value;
    const college = document.getElementById("college").value;
    const collegeID = document.getElementById("collegeID").files[0];

    if(name && email && phone && pincode && gender && college && collegeID){
        alert("Form submitted successfully!");
        // Further processing can be done here
    } else {
        alert("Please fill in all fields.");
    }
});

