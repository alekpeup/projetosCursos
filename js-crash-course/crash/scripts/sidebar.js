document.getElementById('menu-icon').addEventListener('click', function(){
  let sideBar = document.getElementById('sidebar'); 

  if (sideBar.style.display == 'none') { 
    sideBar.style.display = 'block';
  }else { 
    sideBar.style.display = 'none';
  }
})