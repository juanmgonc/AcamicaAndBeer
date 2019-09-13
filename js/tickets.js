var tiketera = (function () {
    
    function crearTicket(importe,concepto){
        return{
            id: generarId(),
            concepto: concepto,
            importe: importe
            }
    }; 

    return {
        model: {
            
        },
        controller: {
            crearTicket,
        },
    }
})();