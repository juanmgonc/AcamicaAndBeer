var Usuarios={
    amigos : [],
    tickets: [],
    generarId: function() {
            if (window.unique) {
              window.unique = window.unique + 1;
            } else {
              window.unique = 1;
            }
    },
    crearUsuarios: function() {
            nombre= prompt ("¿ Quien sos ?");
            id= generarId ();
            miGasto= 0;
            balance= 0;
            amigos.push (nombre);
            ingresarTicket: function(){
            }
            gasto= prompt ("¿ Que compraste ?");
            //COMPLETAR
            ticket.push(gasto);
    }
}            