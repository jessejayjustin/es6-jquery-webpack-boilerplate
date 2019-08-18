const selectList = document.querySelectorAll('select');
const inputList = document.querySelectorAll('input');
const helpId = document.getElementById('enterAllFields');

var calc = {

  add : function() {
    return 5;
  },

  calculateDiff : function() {
    const calcTyp = document.getElementById('calcTyp'); // Calculation type
    const ic = document.getElementById('ic'); // Interest Compounded
    const res = document.getElementById('result');
    const tA = document.getElementById('totalAmount');
    const p = (!isNaN(document.getElementById('sum').value))  ? document.getElementById('sum').value : null; // Principal or Sum of amount
    const r = (!isNaN(document.getElementById('rate').value)) ? document.getElementById('rate').value : null; // % Rate per annum
    const n = (!isNaN(document.getElementById('year').value)) ? document.getElementById('year').value : null; // Time Span in years
    const rpa = (this.rateCheck(r, res, tA)) ? this.rateCheck(r, res, tA) : null;
    switch (calcTyp.value) {
      case ("Compound Interest"):
        return this.calcCI(ic, res, tA, p, rpa, n);
        break;
      case (""):
        break;
      case ("Select"):
      res.value = '';
      tA.value = '';
      default:
        return false;
        break;
    }
  },

  rateCheck : function(rte, res, tA) {
    const rErr = document.getElementById('rateErr');
    if(rte >= 0 && rte <= 100) {
      if (rErr != null)
        // Remove any warnings that may exist
      while (rErr.childNodes[0]){
        rErr.removeChild(rErr.childNodes[0]);
      }
      return rte;
    } else {
      if (rErr != null)
      // We need to show a warning
      // Remove any warnings that may exist
      while (rErr.childNodes[0]){
        rErr.removeChild(rErr.childNodes[0]);
      }
      // Add new warning
      rErr.appendChild(document.createTextNode('Enter Rate of interest up to 100(%)'));
      document.getElementById('rate').style.backgroundColor = "#B0C4DE";
      res.value = null;
      tA.value = null;
      return false;
    } 
  },

  calcCI : function(ic, res, tA, p, rpa, n) {
    switch (ic.value) {
      case ("Annually"):
        const result = Math.pow(1 + ((rpa/1)/100), 1 * n);
        const c = p * result; 
        const e = c-p*100/100; //turned into a decimal by dividing by 100
        res.value = e.toFixed(2);
        tA.value = c.toFixed(2);
        break;
      case (""):
        break;
      default:
        return false;
        break;
    }
  },

  emptyFields : function() {
    inputList.forEach(function(el,i) {
      el.value = '';
      if(i == 3) {
        el.disabled = true;
        el.style.cursor = 'pointer';
        el.style.backgroundColor = '#B0C4DE';
        el.style.borderWidth = '1px';
        el.style.borderColor = '#FF6347';
      }
    });
  }
}

calc.calculateDiff();

/*** Style Section ***/

selectList.forEach(function(element,index){
  element.addEventListener('focus', function () {
    element.style.backgroundColor = "white";
  });
  element.addEventListener('blur', function () {
    element.style.backgroundColor = "#F0F0E7";
  });
  if(index == 0) {
    element.addEventListener('change', function() {
      const res = document.getElementById('result');
      if(element.value === 'Compound Interest') {
        res.disabled = true;
        res.style.borderWidth = '1px';
        res.style.borderColor = '#FF6347';
        res.style.cursor = 'pointer';
        res.style.backgroundColor = '#B0C4DE';
      } else {
        res.disabled = false;
        res.style.borderWidth = null;
        res.style.borderColor = null;
        res.style.cursor = 'pointer';
        res.style.backgroundColor = '#F0F0E7';
      }
    });
  }
});

inputList.forEach(function(elem,i){
  elem.addEventListener('focus', function () {
    elem.style.backgroundColor = "#E0FFFF";
  });
  elem.addEventListener('blur', function () {
    elem.style.backgroundColor = "#F0F0E7";
  });
  elem.addEventListener('keyup', function () {
    return utilFunc(elem,i,helpId);
  });
});

/*** Validation ***/

function utilFunc(elm,i,helpId) {
  if(i == 0) {
    return isSumOk(elm,helpId);
  } else if(i == 1) {
    return isRateOk(elm,helpId);
  } else if(i == 2) {
    return isYearOk(elm,helpId);
  }
}

function isFieldEmpty(input,helpId) {
  if (input.value == '') {
    if (helpId != null)
    // We need to show a warning
    // Remove any warnings that may exist
    while (helpId.childNodes[0]){
      helpId.removeChild(helpId.childNodes[0]);
    }
    // Add new warning
    helpId.appendChild(document.createTextNode('Enter all the fields'));
  } else {

    if (helpId != null)

      // Remove any warnings that may exist
    while (helpId.childNodes[0]){
      helpId.removeChild(helpId.childNodes[0]);
    }
  }
}

function isSumOk(input,helpId) {
  input.value = input.value.replace(/[^\d.]/g,'');
  if(input.value.split('.').length>2){ // The split() method splits a String object into an array of strings by separating the string into substrings
    input.value = input.value.replace(/\.+$/,'');
  }
  return isFieldEmpty(input,helpId);
}

function isRateOk(input,helpId) {
  input.value = input.value.replace(/[^\d.]/g,'');
  if(input.value.split('.').length>1){ 
    input.value = '0.';
  }
  return isFieldEmpty(input,helpId);
}

function isYearOk(input,helpId) {
  input.value = input.value.replace(/[^\d.]/g,'');
  if(input.value.split('.').length>2){ 
    input.value = input.value.replace(/\.+$/,'');
  } else if(input.value.length > 5) {
    input.value = '';
  }
  return isFieldEmpty(input,helpId); 
}


