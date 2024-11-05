import { useState } from 'react';

import Home from './components/Home';
import NewProject from './components/NewProject';
import SideBar from './components/SideBar';
import { ProjectManagement, Project } from './models/ProjectManagement';

function App() {
  const [projects, setProjects] = useState<ProjectManagement>({
    selectedProjectId: undefined,
    projects: [],
  });

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
      <SideBar onStartAddProject={handleStartAddProject} pm={projects} />
      {projects.selectedProjectId === null ? (
        <NewProject
          onAdd={handleAddProject}
          onCancel={handleCancelAddProject}
        />
      ) : projects.selectedProjectId === undefined ? (
        <Home onStartAddProject={handleStartAddProject} />
      ) : null}
    </main>
  );
}

export default App;
