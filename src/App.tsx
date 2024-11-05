import { useState } from 'react';

import Home from './components/Home';
import NewProject from './components/Project/NewProject';
import SideBar from './components/SideBar';
import { ProjectManagement, Project } from './models/ProjectManagement';
import SelectedProject from './components/Project/SelectedProject';

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

  const handleDeleteProject = () => {
    setProjects((prevState: ProjectManagement) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project: Project) => project.id !== prevState.selectedProjectId
      ),
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
          onDelete={handleDeleteProject}
        />
      )}
    </main>
  );
}

export default App;
