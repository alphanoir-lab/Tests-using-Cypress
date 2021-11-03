# Tests-using-Cypress
Technical challenge using Cypress, Node.js and JavaScript.<br>

<i>Installing Cypress</i><br>
Use the command <b>npm install cypress --save-dev</b> inside the project folder.<br>
Here we have the first test asking Cypress to visit Google homepage, the command is <b>cy.visit('https://wwww.google.com.br/')</b><br>
<br>
<i>Starting to build the test:</i><br>
We start by adding the function <b>cy.get('.gLFyf') .type ('Magazine Luiza')</b> which can be configured in the own Playground with just a few clicks and it's ready to be pasted into the IDE.<br>
  <b>cy.get('.gLFyf'):</b> go to the search bar <br>
  <b>.type ('Magazine Luiza'):</b> type ‘Magazine Luiza’<br>
We can add an {enter} button to test the search bar responsiveness.<br>
<br>
<i>Testing APIs:</i><br>
We start by testing the API Poke which is like a Pokedex made for testing.<br>
We ask Cypress to request the parameters contained in the code like a method, URL, body and headers with a timeout of 60000. To know that everything is okay with our test we get a status of response <b>200</b>.<br>
<br>
<br>
If we try to change it to another value different from 200 our test will fail but in a test environment it's necessary to check some specific statuses.
