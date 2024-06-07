import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, updateTaskStatus }) => {
  const handleChange = (e) => {
    updateTaskStatus(task.id, e.target.value);
  };

  const getStatusColor = () => {
    switch (task.status) {
      case 'completed':
        return '#4CAF50'; // Green
      case 'in-progress':
        return '#FFA500'; // Orange
      case 'pending':
        return '#FF0000'; // Red
      default:
        return '#FFFFFF'; // White
    }
  };

  const getPriorityStyle = () => {
    switch (task.priority) {
      case 'high':
        return { color: '#FF0000', fontWeight: 'bold' }; // Red
      case 'medium':
        return { color: '#FFA500', fontWeight: 'bold' }; // Orange
      case 'low':
        return { color: '#00FF00', fontWeight: 'bold' }; // Green
      default:
        return { color: '#000000' }; // Black
    }
  };

  const getDueDateStyle = () => {
    const dueDate = new Date(task.dueDate);
    const now = new Date();
    const isOverdue = dueDate < now;
    return isOverdue ? { color: '#FF0000', fontStyle: 'italic' } : { color: 'yellow' }; // Red if overdue, Black otherwise
  };

  const getTitleStyle = () => {
    return { color: 'white', fontWeight: 'bold' }; // Blue and bold
  };

  const getDescriptionStyle = () => {
    return { color: 'white' }; // Grey
  };

  return (
    <div className="task-item" style={{ borderColor: getStatusColor() }}>
      <h2 style={getTitleStyle()}>{task.title}</h2>
      <p style={getDescriptionStyle()}>{task.description}</p>
      <p style={getDueDateStyle()}>Due: {task.dueDate}</p>
      <p style={getPriorityStyle()}>Priority: {task.priority}</p>
      <select value={task.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default TaskItem;
