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

  let content;
  if (projectState.selectedProject === null) {
    content = <NewProject />
  } else {
    content = <NoProjectSelected onClick={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex">
      <ProjectSidebar onAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
