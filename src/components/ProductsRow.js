
function ProductsRow({singleProduct}) {

  return (
    <tr key={singleProduct.id}>
      <td className={ !singleProduct.inStock ? "red" : ""}>{singleProduct.name}</td>
      <td>{singleProduct.price}</td>
    </tr>
  );
}
//   // if (task._id === id) {
//   //   task.isDone = task.isDone ? false : true;

//   //   // then update `tasksCompleted` state variable
//   //   if (task.isDone) setTasksCompleted(tasksCompleted + 1);
//   //   else if (!task.isDone) setTasksCompleted(tasksCompleted - 1);        
//   // }

//   // setTasks(tasksCopy); // update the state variable 'tasks'
// }); 
// }
// }
export default ProductsRow;
