'use server';

import { revalidatePath } from "next/cache";
import { connectDB } from "../../lib/mongodb";
import Todo from '../../model/Todo'

export async function getTodos() {
    await connectDB();
    const todos = await Todo.find().lean();
  
    return todos.map(todo => ({
      ...todo,
      _id: todo._id.toString(),
    }));
  }
export async function addTodo(task) {
    await connectDB();
    const newTodo = await Todo.create({ task });
    revalidatePath("/")
    return newTodo;
}

export async function deleteTodo(id) {
    await connectDB();
    await Todo.findByIdAndDelete(id);
    revalidatePath("/")
}