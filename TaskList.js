
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTaskStatus }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} updateTaskStatus={updateTaskStatus} />
      ))}
    </div>
  );
};

export default TaskList;
