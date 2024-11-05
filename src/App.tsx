import { useState } from 'react';

import Home from './components/Home';
import NewProject from './components/NewProject';
import SideBar from './components/SideBar';
import { ProjectManagement, Project } from './models/ProjectManagement';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectManagement, setProjects] = useState<ProjectManagement>({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleSelectProject = (id: string) => {
    setProjects((prevState) => ({ ...prevState, selectedProjectId: id }));
  };

  const handleStartAddProject = () => {
    setProjects((prevState) => ({ ...prevState, selectedProjectId: null }));
  };

  const handleCancelAddProject = () => {
    setProjects((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleAddProject = (newProject: Project) => {
    setProjects((prevState: ProjectManagement) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    }));
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectManagement.selectedProjectId}
        pm={projectManagement}
      />
      {projectManagement.selectedProjectId === null ? (
        <NewProject
          onAdd={handleAddProject}
          onCancel={handleCancelAddProject}
        />
      ) : projectManagement.selectedProjectId === undefined ? (
        <Home onStartAddProject={handleStartAddProject} />
      ) : (
        <SelectedProject
          project={
            projectManagement.projects.find(
              (project) => project.id === projectManagement.selectedProjectId
            )!
          }
        />
      )}
    </main>
  );
}

export default App;
