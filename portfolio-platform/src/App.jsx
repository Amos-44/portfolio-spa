import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AddProjectForm from "./components/AddProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("portfolio-projects") || "[]");
    } catch {
      return [];
    }
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("portfolio-projects", JSON.stringify(projects));
  }, [projects]);

  const filteredProjects = projects.filter((project) =>
    project.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tech?.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const addProject = useCallback((newProject) => {
    setProjects((prev) => [
      {
        id: Date.now(),
        ...newProject,
        tech: newProject.tech || []
      },
      ...prev
    ]);
    setShowForm(false);
  }, []);

  const deleteProject = useCallback((id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* HERO */}
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl lg:text-6xl font-black ">
            Personal Project Showcase App
          </h1>
        </div>

        
        <div className="flex justify-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            {showForm ? "✕ Close Form" : "➕ Add Project"}
          </button>
        </div>

      
        {showForm && <AddProjectForm addProject={addProject} />}

        
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <ProjectList
          projects={filteredProjects}
          onDelete={deleteProject}
        />
      </main>
    </div>
  );
}

export default App;