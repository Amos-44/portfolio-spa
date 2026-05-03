function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="p-8 rounded-3xl max-w-3xl mx-auto shadow-2xl">
      <div className="relative">
        <svg 
          className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder=" Search by title, description or technologies..."
          className="pl-8 p-2 w-full border"
          aria-label="Search projects"
        />
      </div>
    </div>
  );
}

export default SearchBar;