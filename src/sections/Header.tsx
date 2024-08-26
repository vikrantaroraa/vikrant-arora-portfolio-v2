const Header = () => {
  return (
    <div className="fixed top-3 flex w-full items-center justify-center">
      <nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
        <a href="" className="nav-item">
          Home
        </a>
        <a href="" className="nav-item">
          Projects
        </a>
        <a href="" className="nav-item">
          About
        </a>
        <a
          href=""
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export { Header };
