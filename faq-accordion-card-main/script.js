let qnas = document.querySelectorAll('.q-a')

qnas.forEach(item => {
  item.addEventListener('click', ()=>{
      if (item.classList.contains('show')){
          item.classList.remove('show')
      }else{
          item.classList.add('show')
      }
      
  })  
})

