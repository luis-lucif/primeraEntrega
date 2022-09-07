let option;

let tareas = [
    {
        id:1,
        dia:1,
        tarea:"ir a visitar al cliente",
        estado:"visitar"
    },
    {
        id:2,
        dia:2,
        tarea:"reprogramar visita",
        estado:"en proceso de venta",
    },
    {
        id:3,
        dia:6,
        tarea:"ya se le vendio",
        estado:"vendido",
    },

   
    
]

const clientes = [
    "fravega",
    "garbarino",
    "coto",
    "easy",
    "jumbo",
    "wallmart",
    "cetrohogar",
];

const estados = [
    "visitar",
    "en proceso de venta",
    "vendido",
];


while(option !==0 ) {
    option = Number(prompt("ingrese una opcion:\n1. visitar a cliente\n2. ver tareas\n3. borrar tarea\n0. salir"));

    switch (option){
        case 1:
            const dia = Number(prompt("ingrese cliente a visitar  : \n 1.fravega\n 2. garbarino\n 3. coto\n 4. easy\n 5. jumbo\n 6. wallmart\n 7. cetrohogar"));
            const tareas = prompt("ingrese la tarea a realizar con este cliente");
            const estado = Number (prompt("ingrese el estado de la tarea:\n 1. visitar\n 2. en proceso de venta\n 3. vendido"));
            const crearId = getLastID() + 1;
                crearTarea(crearId, dia, tareas, estado)
            break;
        case 2:
            getAllTareas();
            break;
        case 3:
            let borrarId =Number(prompt("ingrese el numero de la tarea que quiera borrar"))
            borrarTareas(borrarId);
            break;    
        case 0:
            alert( "gracias vuelva pronto !!");
            break;
        default:
            alert("la opcion ingresada no es correcta, vuelva a intentar");
            break;
    }
}

function crearTarea(id, dia, tarea, estado){
    tareas.push({
        id,
        dia,
        tarea,
        estado : estados [ estado -1]
    });

   
}

function getAllTareas(){
    console.log("\n--------------------------\n")
    tareas.forEach ((tarea) => console.log(tarea.id + " - " + clientes[tarea.dia - 1] + " - " + tarea.tarea + " - " + tarea.estado));
    alert(tareas)
}


function borrarTareas(id){
    tareas = tareas.filter(tarea => tarea.id != id);
    alert("tarea borrada exitosamente")
}


function getLastID(){
   const ids = tareas.map (tarea => tarea.id);
   return Math.max(...ids);

}
