import React, { useState, useEffect } from 'react';

function TaskEdit({ task, onUpdate, onCancel }) {
  const [editedText, setEditedText] = useState(task.text);

  useEffect(() => {
    setEditedText(task.text);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedText.trim()) {
      onUpdate({ ...task, text: editedText });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form edit-form">
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        className="task-input"
        autoFocus
      />
      <div className="edit-actions">
        <button type="submit" className="save-btn">
          Save
        </button>
        <button type="button" onClick={onCancel} className="cancel-btn">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default TaskEdit;