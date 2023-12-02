import { useState } from 'react';
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  });

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

  let content;
  if (projectState.selectedProject === null) {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onClick={handleStartAddProject} />
  }

  console.log(projectState);
  return (
    <main className="h-screen my-8 flex">
      <ProjectSidebar onAddProject={handleStartAddProject} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
