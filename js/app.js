
function generarId(){
    if (window.unique){
        window.unique=window.unique + 1;
    } else{
        window.unique = 1;
    } return window.unique;
}