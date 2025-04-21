import { getTodos, addTodo, deleteTodo } from '../actions/todoActions';

export default async function HomePage() {
  const todos = await getTodos();

  return (
    <div>
      <form action={async (formData) => {
        'use server';
        await addTodo(formData.get('task'));
      }}>
        <input name="task" placeholder="New task" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.task}
            <form action={async () => {
              'use server';
              await deleteTodo(todo._id);
            }}>
              <button type="submit">❌</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
