// Attach event listeners to buttons
document.getElementById('uploadBtn').addEventListener('click', function () {
    animatePlane('upload');
  });
  
  document.getElementById('downloadBtn').addEventListener('click', function () {
    animatePlane('download');
  });
  
  function animatePlane(action) {
    const plane = document.getElementById('paperPlane');
    
    // Ensure the plane is visible and reset any previous animation
    plane.style.opacity = 1;
    plane.style.animation = 'none';
  
    // Trigger a reflow to allow the animation to restart
    void plane.offsetWidth;
  
    // Choose the appropriate animation based on the action
    if (action === 'upload') {
      plane.style.animation = 'uploadAnim 2s forwards';
    } else if (action === 'download') {
      plane.style.animation = 'downloadAnim 2s forwards';
    }
  
    // Optional: Hide the plane after the animation completes
    plane.addEventListener('animationend', function handler() {
      // Delay hiding slightly if needed
      setTimeout(() => {
        plane.style.opacity = 0;
      }, 200);
      plane.removeEventListener('animationend', handler);
    });
  }
  