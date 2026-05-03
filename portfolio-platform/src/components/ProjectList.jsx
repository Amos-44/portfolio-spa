import ProjectCard from "./ProjectCard";

function ProjectList({ projects, onDelete }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-10" role="status">
        <div className="mb-4 flex justify-center">
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <h2 className="text-xl font-semibold mb-2">
          No Projects Found
        </h2>

        <p className="text-gray-500">
          Try searching or add a new project.
        </p>
      </div>
    );
  }

  return (
    <section id="projects">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          Projects
        </h2>

        <span className="text-sm bg-gray-200 px-2 py-1 rounded">
          {projects.length}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;