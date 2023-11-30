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

  function handleAddProject(project) {
    const newProject = {
      ...project,
      id: Math.random()
    };
    setProjectState(prevState => {
      return {
        ...prevState,
        projects: [...prevState.projects,newProject]
      }
    })
  }
  let content;
  if (projectState.selectedProject === null) {
    content = <NewProject onAddProject={handleAddProject}/>
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onClick={handleStartAddProject} />
  }

  console.log(projectState);
  return (
    <main className="h-screen my-8 flex">
      <ProjectSidebar onAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
