const Genre = () => {
  return (
    <div className="dropdown dropdown-hover">
      <label tabIndex={0}>Genre</label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Pop</a>
        </li>
        <li>
          <a>Rock</a>
        </li>
        <li>
          <a>Hip-Hop</a>
        </li>
        <li>
          <a>R&B</a>
        </li>
        <li>
          <a>Brazilian Music</a>
        </li>
      </ul>
    </div>
  );
};

export default Genre;
