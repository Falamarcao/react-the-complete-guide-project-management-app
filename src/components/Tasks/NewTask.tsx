import { ChangeEvent, useState } from 'react';

interface NewTaskProps {
  onAdd: (task: string) => void;
}

const NewTask = ({ onAdd }: NewTaskProps) => {
  const [taskName, setTaskName] = useState<string>('');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleClick = () => {
    if (taskName.trim().length > 0) {
      onAdd(taskName);
      setTaskName('');
    }
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleOnChange}
        value={taskName}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
