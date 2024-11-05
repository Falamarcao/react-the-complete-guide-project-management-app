import { useRef } from 'react';

import Button from './Button';
import Input from './Input';

import { Project } from '../models/ProjectManagement';
import Modal, { ModalRef } from './Modal';

interface NewProjectProps {
  onAdd: (data: Project) => void;
}

const validateDate = (date: Date) => {
  let today = new Date();
  today = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
  );

  return !isNaN(date.getTime()) && date >= today;
};

const NewProject = ({ onAdd }: NewProjectProps) => {
  const modalRef = useRef<ModalRef>(null);

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    // Get Data
    const title = titleRef.current?.value.trim();
    const description = descriptionRef.current?.value.trim();
    const dueDate = dueDateRef.current?.value;

    console.log(dueDate);

    const dueDateAsDate = new Date(dueDate ? dueDate + 'T00:00:00Z' : '');

    // Validation
    if (!(title && description && validateDate(dueDateAsDate))) {
      modalRef.current?.showModal();
      return;
    }

    // Add Project
    onAdd({
      id: Math.random().toString(), // OK for a demo
      title: title,
      description: description,
      dueDate: dueDateAsDate.toISOString(),
    });
  };

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Please, fill all the fields and check if the Due Date is valid.
        </p>
      </Modal>
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
          <Input
            ref={descriptionRef}
            label="Description"
            fieldType="textarea"
          />
          <Input
            ref={dueDateRef}
            type="date"
            label="Due Date"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>
    </>
  );
};

export default NewProject;
