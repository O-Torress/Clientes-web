  let tareas = [];

  let tarea = document.getElementById("InputTexto");
  let boton = document.getElementById("BtnAg");
  let listaTareas = document.getElementById("listaTareas");

  function actualizarTarea (posicion) {
    if ((posicion) => 0) {
      tareas[posicion].completada =! tareas[posicion].completada;

      actualizarLista();
    }else {
      console.log("No hay ningun elemento en la lista de tareas");
    }
  }

  function eliminarTarea(posicion) {
      if (posicion >= 0) {
        tareas.splice(posicion, 1);
        console.log(tareas);
        actualizarLista();
      } else {
        console.log("No se encontro el elemento en la lista de tareas");
      }
    }

  function actualizarLista() {
      listaTareas.innerHTML ="";

      tareas.forEach((elemento, posicion)=>{
        let parrafo = document.createElement("p");

        parrafo.innerHTML = `${elemento.tarea} <button onclick="actualizarTarea(${posicion})">${elemento.completada ? "✅" : "❌"}<button> <button onclick="eliminarTarea(${posicion})">🗑️</button>`;
         listaTareas.appendChild(parrafo);
      });
    }

  boton.addEventListener("click", (evento) => {
      
      let tarea_valor = document.getElementById("InputTexto").value;
      
      let tarea_objeto = {
        tarea: tarea_valor,
        completada: false,
      };
    
      tareas.push(tarea_objeto);
     
      actualizarLista();
    });