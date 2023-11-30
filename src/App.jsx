import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex">
      <ProjectSidebar/>
      <NewProject/>
    </main>
  );
}

export default App;
