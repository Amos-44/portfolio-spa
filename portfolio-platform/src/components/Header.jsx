function Header() {
  return (
    <header className=" bg-orange-500 sticky top-0 z-50 shadow-2xl">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            
            <div>
              <h1 className="text-3xl font-black ">
                Portfolio Platform
              </h1>
              
            </div>
          </div>
          
          <a 
            href="#projects" 
            className="btn-secondary text-lg"
          >
            View Projects
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;