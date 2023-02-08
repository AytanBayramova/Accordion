 //accordion menu

 const accordionBtns = document.getElementsByClassName('accordion')
 console.log(accordionBtns)
 const accordionLength = accordionBtns.length
 for(let i=0; i<accordionLength; i++){
   accordionBtns[i].addEventListener('click', function(){
       let panelDivi = this.nextElementSibling

        if(panelDivi.style.maxHeight){
            panelDivi.style.maxHeight = null
        }

        else{
            panelDivi.style.maxHeight = panelDivi.scrollHeight + "px"
        }
   })
    
 }
