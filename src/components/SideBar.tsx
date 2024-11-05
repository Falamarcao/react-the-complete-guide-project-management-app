import { MouseEvent } from 'react';

import Button from './Button';

import { Project, ProjectManagement } from '../models/ProjectManagement';

interface SideBarProps {
  onStartAddProject: (event: MouseEvent<HTMLButtonElement>) => void;
  pm: ProjectManagement;
}

const SideBar = ({ onStartAddProject, pm }: SideBarProps) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {pm.projects.map((project: Project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
