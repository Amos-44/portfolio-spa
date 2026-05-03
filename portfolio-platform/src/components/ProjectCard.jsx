function ProjectCard({ project, onDelete }) {
  return (
    <div className="p-4 border rounded-lg bg-white">
      <h3 className="text-lg font-bold mb-2">
        {project.title || "Untitled Project"}
      </h3>

      <p className="text-gray-600 mb-3">
        {project.description || "No description available."}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(project.tech || []).map((tech, index) => (
          <span
            key={index}
            className="text-sm bg-gray-200 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button className="btn-secondary text-sm">
          View
        </button>

        <button
          onClick={() => onDelete(project.id)}
          className="text-red-500 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;