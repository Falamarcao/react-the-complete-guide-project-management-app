import { useRef } from 'react';

import Button from './Button';
import Input from './Input';

import { Project } from '../models/ProjectManagement';

interface NewProjectProps {
  onAdd: (data: Project) => void;
}

const NewProject = ({ onAdd }: NewProjectProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    // Get Data
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    const dueDate = dueDateRef.current?.value;

    // Validation
    if (!(title && description && dueDate)) return;

    // Conversion
    const dueDateAsDate = new Date(dueDate);

    if (isNaN(dueDateAsDate.getTime())) return;

    // Add Project
    onAdd({
      id: Math.random().toString(), // OK for a demo
      title: title,
      description: description,
      dueDate: dueDateAsDate,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <Button
            className="bg-stone-800 text-stone-50 hover:bg-stone-600 hover:text-stone-100"
            onClick={handleSave}
          >
            Save
          </Button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label="Title" />
        <Input ref={descriptionRef} label="Description" fieldType="textarea" />
        <Input ref={dueDateRef} type="date" label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
