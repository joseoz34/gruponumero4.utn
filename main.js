 let listElements = document.querySelectorAll(".list__button--click");

 listElements.forEach(listElement => {
    listElement.addEventListener("click", ()=>{

        let height = 0;
        let menu = listElement.nextElementSibling;
        if (menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }
    
        menu.style.height=`${height}px` ;

    })
 })


 function ventanaSecundaria (URL){ 
    window.open("imagenes/ramas.tpweb.pdf","ventana1","width=700,height=700,left=100,scrollbars=NO") 
 } 

 function ventanaSecundaria (URL){ 
    window.open("imagenes/opiniones.tpweb.pdf","ventana1","width=700,height=700,left=100,scrollbars=NO") 
 } 
 