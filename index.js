window.onload = function() {
    // Get a reference to the id_card element
    var card = document.querySelector('.id_card');
    // Get a reference to the id_card_image element
    var image = document.querySelector('.id_card_image');
    // Get a reference to the heading element
    var heading = document.querySelector('.heading');
    // Get a reference to the stuff element
    var stuff = document.querySelector('.stuff');
    
    // Set the initial position of the elements
    card.style.transform = 'translate(0%, 0)';
    image.style.transform = 'translate(0%, 0)';
    heading.style.transform = 'translate(0%, 0)';
    stuff.style.transform = 'translate(0%, 0)';
    
    // Trigger the transition by adding a class to the body element
    document.body.classList.add('hovered');
  };


  function typeText(element, text, index) {
    if (index < text.length) {
      element.innerHTML += text[index];
      setTimeout(function() {
        typeText(element, text, index + 1);
      }, 100);
    }
  }
  
  // Get the element you want to apply the typing effect to
  var element = document.getElementById(".heading");
  
  // Set the text you want to type out
  var text = "This is the text I want to type out.";
  
  // Start the typing effect
  typeText(element, text, 0);
  
  