const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask() {
  rl.question('Ingrese una descripción para la tarea: ', (description) => {
    const task = {
      id: tasks.length + 1,
      description,
      completed: false
    };
    tasks.push(task);
    console.log(`Tarea "${description}" añadida.`);
    showMenu();
  });
}

function deleteTask() {
  rl.question('Ingrese el número de tarea que desea eliminar: ', (taskNumber) => {
    const taskIndex = parseInt(taskNumber) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      const deletedTask = tasks.splice(taskIndex, 1)[0];
      console.log(`Tarea "${deletedTask.description}" eliminada.`);
    } else {
      console.log('Número de tarea inválido.');
    }
    showMenu();
  });
}

function completeTask() {
  rl.question('Ingrese el número de tarea que desea marcar como completada: ', (taskNumber) => {
    const taskIndex = parseInt(taskNumber) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      tasks[taskIndex].completed = true;
      console.log(`Tarea "${tasks[taskIndex].description}" marcada como completada.`);
    } else {
      console.log('Número de tarea inválido.');
    }
    showMenu();
  });
}

function listTasks() {
  console.log('\nLista de tareas:');
  tasks.forEach((task, index) => {
    const status = task.completed ? 'Completada' : 'No completada';
    console.log(`${index + 1}. Descripción: ${task.description}, Estado: ${status}`);
  });
  showMenu();
}

function showMenu() {
  console.log('\n--- Menú ---');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Marcar tarea como completada');
  console.log('4. Listar tareas');
  console.log('5. Salir');

  rl.question('Elija una opción: ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        deleteTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        listTasks();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción inválida.');
        showMenu();
        break;
    }
  });
}

showMenu();