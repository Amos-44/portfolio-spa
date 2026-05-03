import { useState } from "react";

function AddProjectForm({ addProject }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tech: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    
    addProject({
      title: formData.title,
      description: formData.description,
      tech: formData.tech.split(",").map(t => t.trim()).filter(Boolean)
    });
    
    setFormData({ title: "", description: "", tech: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-10 rounded-3xl max-w-2xl mx-auto animate-slide-up space-y-6">
      <div className="flex items-center gap-3">
        
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Add New Project
        </h2>
      </div>

      <input
        type="text"
        placeholder="Project Title *"
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
        className="input-field"
        required
      />
      
      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
        className="input-field"
      />
      
      <input
        type="text"
        placeholder="Technologies (React, Vue, Node.js)"
        value={formData.tech}
        onChange={(e) => setFormData({...formData, tech: e.target.value})}
        className="input-field"
      />

      <button type="submit" className="px-4 py-2 border rounded">
         Create & Add Project
      </button>
    </form>
  );
}

export default AddProjectForm;