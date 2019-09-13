// var  personas = [
//   {
//   nombre: "gonzalo",
//   id: 2,
//   balance: 150,
//   gastoTotal: 300, 
//   gastos:
//     [
//       {
//         monto: 25,
//         concepto: "coca"
//       },
//       {
//         monto: 250,
//         concepto: "lomo"
//       },
//       {
//         monto: 150,
//         concepto: "flan"},
//     ],
//   }, 
//   {
//     nombre: "maria",
//     id: 3,
//     balance: 150,
//     gastoTotal: 300, 
//     gastos: [
//       {
//         monto: 70,
//         concepto: "birra"
//       },
//       {
//         monto: 250,
//         concepto: "pizza"
//       },
//       {
//         monto: 150,
//         concepto: "helado"
//       },
//     ], //consultar como hacen los gastos (objeto { concepto: y monto:} )
//   }
// ];
          
        
var Operaciones = (function () {
   
  
  var consultarGasto = function (personas) {
    var gastosDeCadaUsuario = [];
    
    for (var i=0; i < personas.length; i++) {
      var gastoUsuario = 0;
      for (var j=0; j < personas[i].gastos.length; j++){
        
        
        gastoUsuario = gastoUsuario + personas[i].gastos[j].monto;
        console.log(personas[i].nombre + " gastó " + gastoUsuario);
      }
      gastosDeCadaUsuario.push(gastoUsuario);
    }
    
    return gastosDeCadaUsuario;
    
  }
  
  var GastosTotales = function (personas) {
    var gastosDeCadaUsuario = consultarGasto(personas);
    var gastoTotal = 0;
    for (var i=0; i < gastosDeCadaUsuario.length; i++) {
      gastoTotal = gastoTotal + gastosDeCadaUsuario[i];
    }
    gastosTotales = {
      gastoTotal: gastoTotal,
      cantidadUsuarios: i,
      
    }
    
    return gastosTotales;
       
  }
  
  var propina = function (personas, calidadDeServicio) {
    var gastosTotales = GastosTotales(personas);
    function calculoDePago (propinaElegida) {
      if (propinaElegida == 0) {
        gastosTotales.propina = 0;
        // return gastosTotales;
      } else {
        var propina = ((gastosTotales.gastoTotal / 100) * propinaElegida);
        console.log("deberías dejar $" + propina);
        gastosTotales.propina = propina;
        // return gastosTotales;
      }
    }
    
    switch (calidadDeServicio ) { 
      case 1: 
      console.log("servicio malo");
      calculoDePago(0);
      break;
      case 2: 
      console.log("servicio bueno");
      calculoDePago(10);
      break;
      case 3:
      console.log("servicio muy bueno");
      calculoDePago(15);
      break;
      case 4: 
      console.log("servicio excelente");
      calculoDePago(20);
      break;
      default: 
      console.log("no anda");
      break;
      
    }
    
    return gastosTotales;
    

  };
  
  var gastoUsuarioMasPropina = function (personas, calidadDeServicio) {
    var gastosDeCadaUsuario = consultarGasto(personas);
    var gastosTotales = propina(personas, calidadDeServicio);
    var guitaTotal = [];
    
    for (var i=0; i < gastosDeCadaUsuario.length; i++) {
      var guitaGastada = gastosDeCadaUsuario[i] + gastosTotales.propina;
      guitaTotal[i] = {
        nombre: personas[i].nombre,
        guitaGastada: guitaGastada,
      }
      
      
    };
    return guitaTotal;
  }
  
  return {
    model: {
      
    },
    controller: {
      consultarGasto,
      GastosTotales,
      propina,
      gastoUsuarioMasPropina
    }
  }
  
  
})();

// Operaciones.controller.consultarGasto(personas);
// Operaciones.controller.GastosTotales(personas);
// Operaciones.controller.propina(personas,1);
// Operaciones.controller.gastoUsuarioMasPropina(personas, 1);
