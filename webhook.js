// On document ready...
$(document).ready(function() {

    // Create an event listener for the form submission
    document.getElementById("dataform").addEventListener("submit", function(event) {

        // Get the form with id "dataform"
        const form = document.getElementById("dataform");

        // Get the contents of the form inputs
        const email = document.getElementById("exampleInputEmail1");
        const password = document.getElementById("exampleInputPassword1");
        const checkbox = document.getElementById("exampleCheck1");

        // get the email value
        const emailValue = email.value;

        // get the password value
        const passwordValue = password.value;

        // get the checkbox value
        const checkboxValue = checkbox.value;

        // Create a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Submit a POST request to the server
        xhr.open("POST", "https://api.github.com/repos/davorg/actions-webhook-demo/dispatches", true);

        // Add emailValue, passwordValue, and checkboxValue to the data object
        const data = {
            event_type: "action_test",
            client_payload: {
                email: emailValue,
                password: passwordValue,
                checkbox: checkboxValue
            }
        };

        // Add headers to the request
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/vnd.github.everest-preview+json");
        xhr.setRequestHeader("Authorization", "Bearer " + githubToken);

        // Add the data object to the request body
        xhr.send(JSON.stringify(data));
    });
});

