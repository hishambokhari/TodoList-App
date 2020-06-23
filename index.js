
window.onload = function(){


  const addButton = document.getElementById('add-button');
  const addInput = document.getElementById('add-input');
  const listHead = document.getElementById('list');

  const addItem = (e) => {
    let inputVal = addInput.value;

    if(!inputVal){
      return;
    } 
      
    

    const template = document.getElementById('template');
    const clone = document.importNode(template.content, true);
    clone.querySelector('span').textContent = inputVal;
    listHead.appendChild(clone);

  };

  addButton.addEventListener('click', addItem);

};