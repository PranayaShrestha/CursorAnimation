document.addEventListener('mousemove', function(event) {
  var fire = document.getElementById('fire');
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  fire.style.left = (mouseX - 50) + 'px'; // Adjust the offset to center the fire with the cursor
  fire.style.top = (mouseY - 50) + 'px'; // Adjust the offset to center the fire with the cursor
});
