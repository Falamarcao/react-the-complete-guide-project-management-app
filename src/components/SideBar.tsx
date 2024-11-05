import { MouseEvent } from 'react';

import Button from './Common/Button';

import { Project, ProjectManagement } from '../models/ProjectManagement';

interface SideBarProps {
  onStartAddProject: (event: MouseEvent<HTMLButtonElement>) => void;
  onSelectProject: (id: string) => void;
  selectedProjectId: string | undefined | null;
  pm: ProjectManagement;
}

const SideBar = ({
  onStartAddProject,
  onSelectProject,
  selectedProjectId,
  pm,
}: SideBarProps) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {pm.projects.map((project: Project) => {
          let className =
            'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

          if (project.id === selectedProjectId) {
            className += ' bg-stone-800 text-stone-200';
          } else {
            className += ' text-stone-400';
          }

          return (
            <li key={project.id}>
              <button
                className={className}
                onClick={onSelectProject.bind(null, project.id)}
                // onClick={() => onSelectProject(project.id)}  // similar to `bind()`.
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
