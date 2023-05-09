function Estado(boxId) {
    var box = document.getElementById(boxId);
    var statusText = box.querySelector('.text');
    
    if(box.classList.contains('ocupado')) {
      box.classList.remove('ocupado');
      box.classList.add('manutencao');
      statusText.textContent = 'Manutenção';
    } else if(box.classList.contains('manutencao')) {
      box.classList.remove('manutencao');
      box.classList.add('desocupado');
      statusText.textContent = 'Desocupado';
    } else {
      box.classList.remove('desocupado');
      box.classList.add('ocupado');
      statusText.textContent = 'Ocupado';
    }
  }
  
  function setInitialStatus() {
    var boxes = document.getElementsByClassName('box');
    for(var i = 0; i < boxes.length; i++) {
      var status = Math.floor(Math.random() * 3) + 1;
      if(status === 1) {
        boxes[i].classList.add('ocupado');
        boxes[i].querySelector('.text').textContent = 'Ocupado';
      } else if(status === 2) {
        boxes[i].classList.add('manutencao');
        boxes[i].querySelector('.text').textContent = 'Manutenção';
      } else {
        boxes[i].classList.add('desocupado');
        boxes[i].querySelector('.text').textContent = 'Desocupado';
      }
    }
  }
  
  setInitialStatus();
