import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
