$(document).ready(function () {
  $("#feedback-form").submit(function (event) {
    event.preventDefault();

    const formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      rating: $("#rating").val(),
      comments: $("#comments").val(),
    };

    $.ajax({
      type: "POST",
      url: "https://us-central1-fbcafe.cloudfunctions.net/feedbackFunction", // Replace with your Google Cloud Function URL
      data: JSON.stringify(formData),
      contentType: "application/json",
      success: function (response) {
        alert("Feedback submitted successfully!");
        $("#feedback-form")[0].reset();
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error:", errorThrown);
        alert("An error occurred while submitting feedback. Please try again.");
      },
    });
  });
});

