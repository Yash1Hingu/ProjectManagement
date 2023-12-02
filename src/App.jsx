import { useState } from 'react';
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  });

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: id
      }
    })
  }

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: null
      }
    })
  }

  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
      }
    })
  }

  function handleAddProject(project) {
    const projectId = Math.random();
    const newProject = {
      ...project,
      id: projectId
    };
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: projectId,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const currProject = projectState.projects.find(project => project.id === projectState.selectedProject);
  let content = <SelectedProject project={currProject}/>;
  if (projectState.selectedProject === null) {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onClick={handleStartAddProject} />
  }

  console.log(projectState);
  return (
    <main className="h-screen my-8 flex">
      <ProjectSidebar
        onAddProject={handleStartAddProject}
        projects={projectState.projects}
        onProjectSelect={handleSelectProject}
        selectedProject={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
