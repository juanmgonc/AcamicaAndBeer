var Usuarios=(function(){
  var amigos=[]
  var tickets=[]
   
  function  generarId () {
            if (window.unique) {
              window.unique = window.unique + 1;
            } else {
              window.unique = 1;
            }
    }
   function crearUsuarios () {
            nombre= prompt ("¿ Quien sos ?");
            id= generarId ();
            miGasto= 0;
            balance= 0;
            amigos.push (nombre);
   
    }

return {
  model:{
    tickets,
    amigos
  },

  controller:{
    crearUsuarios,
  }
}

})()      


/* function ingresarTicket: (){
            }
            gasto= prompt ("¿ Que compraste ?");
            //COMPLETAR
            ticket.push(gasto);*/