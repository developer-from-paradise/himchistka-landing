function createCircle_1() {
    let section = document.querySelector(".bubble-container-1");
    let circleEl = document.createElement("span");
    let size = Math.random() * 60;
    let duration = Math.random() * 10;
  
    // Максимальная допустимая позиция пузыря по горизонтали
    let maxLeft = window.innerWidth - 100 - size;
  
    // Вычисляем случайное положение пузыря, учитывая максимальную допустимую позицию
    let leftPosition = Math.random() * maxLeft;
  
    circleEl.style.width = 20 + size + "px";
    circleEl.style.height = 20 + size + "px";
    
    // Устанавливаем leftPosition в пределах максимальной допустимой позиции
    circleEl.style.left = Math.min(Math.max(0, leftPosition), maxLeft) + "px";
    
    section.appendChild(circleEl);
    
    

    setTimeout(() => {
      circleEl.remove();
    }, 4000);
  }

setInterval(createCircle_1, 50);

  

function createCircle_2() {
    let section = document.querySelector(".bubble-container-2");
    let circleEl = document.createElement("span");
    let size = Math.random() * 60;
    let duration = Math.random() * 10;
  
    // Максимальная допустимая позиция пузыря по горизонтали
    let maxLeft = window.innerWidth - 100 - size;
  
    // Вычисляем случайное положение пузыря, учитывая максимальную допустимую позицию
    let leftPosition = Math.random() * maxLeft;
  
    circleEl.style.width = 20 + size + "px";
    circleEl.style.height = 20 + size + "px";
    
    // Устанавливаем leftPosition в пределах максимальной допустимой позиции
    circleEl.style.left = Math.min(Math.max(0, leftPosition), maxLeft) + "px";
    
    section.appendChild(circleEl);
  
    setTimeout(() => {
      circleEl.remove();
    }, 4000);
 } 
  
setInterval(createCircle_2, 50);


$('[href="#form-section"]').click(function(){
    $('html, body').animate({ scrollTop: $('#form-section').offset().top }, 'slow');
});
