// drop-down menu
let arrowDwn = document.querySelectorAll('.nav-item__img'),
    dropDownList = document.querySelectorAll('.nav-item__ul');


for (let i = 0; i < arrowDwn.length; i++) {
    arrowDwn[i].addEventListener('click', function(evt) {
        arrowDwn[i].classList.toggle('nav-item__img-down');
        dropDownList[i].classList.toggle('nav-item__ul-block')
    }); 
}

// datepicker
$( function() {
  $( "#datepicker-in, #datepicker-out" ).datepicker({
    showButtonPanel: true
  });
});

// selectmenu
$( function() {
  $( "#speed" ).selectmenu();
} );

// choice of guests
let arrowGuests = document.querySelector('.guests-down'),
    guestsChoice = document.querySelector('.choice-number__quantity');
    
    arrowGuests.addEventListener('click', function(evt) {
      arrowGuests.classList.toggle('guests-over');
      guestsChoice.classList.toggle('choice-number__quantity-on')
    });  

// counter
let minusAdultsButton = document.querySelector('.minus.adults'),
    plusAdultsButton = document.querySelector('.plus.adults'),
    inputAdults = document.querySelector('#adults'),
    minusChildrenButton = document.querySelector('.minus.children'),
    plusChildrenButton = document.querySelector('.plus.children'),
    inputChildren = document.querySelector('#children'),
    minusBabiesButton = document.querySelector('.minus.babies'),
    plusBabiesButton = document.querySelector('.plus.babies'),
    inputBabies = document.querySelector('#babies');

// Counter Adults
function counterPlusAdults() {
  let valueAdults = inputAdults.value;
  let min = inputAdults.attributes.min.value;
  let max = inputAdults.attributes.max.value;
  
  valueAdults++;

  if (valueAdults >= min && valueAdults <= max) {
    return valueAdults;
  } else {
    return max;
  }  
}

plusAdultsButton.addEventListener('click', function(evt) {
    inputAdults.value = counterPlusAdults();
});

function counterMinusAdults() {
  let valueAdults = inputAdults.value;
  let min = inputAdults.attributes.min.value;
  let max = inputAdults.attributes.max.value;

  valueAdults--;

  if (valueAdults >= min && valueAdults <= max) {
    return valueAdults;
  } else {
    return min;
  }      
}

minusAdultsButton.addEventListener('click', function(evt) {
    inputAdults.value =counterMinusAdults();
});

function sum () {
  let guests = 0;
  guests = parseInt(inputAdults.value) + parseInt(inputChildren.value) + parseInt(inputBabies.value);
  return guests;
}

let guestsNumber = document.getElementById('guests-number'),
    applyButton = document.querySelector('.apply-button');

    applyButton.addEventListener('click', function(){
      guestsNumber.innerHTML = sum();
    });

// Counter Children:
function counterPlusChildren() {
  let valueChildren = inputChildren.value;
  let min = inputChildren.attributes.min.value;
  let max = inputChildren.attributes.max.value;
  
  valueChildren++;

  if (valueChildren >= min && valueChildren <= max) {
    return valueChildren;
  } else {
    return max;
  }  
}

plusChildrenButton.addEventListener('click', function(evt) {
    inputChildren.value = counterPlusChildren();
});

function counterMinusChildren() {
  let valueChildren = inputChildren.value;
  let min = inputChildren.attributes.min.value;
  let max = inputChildren.attributes.max.value;

  valueChildren--;

  if (valueChildren >= min && valueChildren <= max) {
    return valueChildren;
  } else {
    return min;
  }      
}

minusChildrenButton.addEventListener('click', function(evt) {
    inputChildren.value =counterMinusChildren();
});

// Counter Babies:
function counterPlusBabies() {
  let valueBabies = inputBabies.value;
  let min = inputBabies.attributes.min.value;
  let max = inputBabies.attributes.max.value;
  
  valueBabies++;

  if (valueBabies >= min && valueBabies <= max) {
    return valueBabies;
  } else {
    return max;
  }  
}

plusBabiesButton.addEventListener('click', function(evt) {
    inputBabies.value = counterPlusBabies();
});

function counterMinusBabies() {
  let valueBabies = inputBabies.value;
  let min = inputBabies.attributes.min.value;
  let max = inputBabies.attributes.max.value;

  valueBabies--;

  if (valueBabies >= min && valueBabies <= max) {
    return valueBabies;
  } else {
    return min;
  }      
}

minusBabiesButton.addEventListener('click', function(evt) {
    inputBabies.value =counterMinusBabies();
});