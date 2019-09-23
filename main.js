// Write your JavaScript code here!
//list
    var planets = [
        ['Pluto', 0.06],
        ['Neptune', 1.148],
        ['Uranus', 0.917],
        ['Saturn', 1.139],
        ['Jupiter', 2.640],
        ['Mars', 0.3895],
        ['Moon', 0.1655],
        ['Earth', 1],
        ['Venus', 0.9032],
        ['Mercury', 0.377],
        ['Sun', 27.9]
          ];
         

        // 8. Reverse the drop down order so that the sun is first.
 // var planets= planets.reverse();
 
 // planets.forEach(list);
  
          // 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`
function list(item) {
  var o = document.createElement("option");
  o.value = item[0];
  document.getElementById("planets").appendChild(o).textContent = item[0];
}

  function calculateWeight(userWeight, planetName) {
    // 2. Write the code to return the correct weight
   var planetName = document.getElementById("planets").selectedIndex;

   var newGravity = planets[planetName][1];
    
  return userWeight * newGravity;
}
  
function handleClickEvent() {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
 var userWeight = document.getElementById("user-weight").value;
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  var planetName = document.getElementById('planets').value;
    // 5. Create a variable called result and assign the value of the new calculated weight.
  var result = 
  calculateWeight(userWeight, planetName);
    // 6. Write code to display the message shown in the screenshot.
    document.getElementById("output").innerHTML = "If you were on " + planetName + ',' + ' you would weigh ' + result + 'lbs!';
  
  
  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
   // object.onclick = function(){'output'};
  }
  // 8. Reverse the drop down order so that the sun is first.
  var planets= planets.reverse();

  planets.forEach(list);
  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)
