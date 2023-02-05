import { Link } from 'react-router-dom';

const Genre = () => {
  return (
    <div className="dropdown dropdown-hover">
      <label tabIndex={0}>Genre</label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to={'/genre/pop'}>
            <a>Pop</a>
          </Link>
        </li>
        <li>
          <Link to={'/genre/rock'}>
            <a>Rock</a>
          </Link>
        </li>
        <li>
          <Link to={'/genre/hip-hop'}>
            <a>Hip-Hop</a>
          </Link>
        </li>
        <li>
          <Link to={'/genre/soul'}>
            <a>Soul</a>
          </Link>
        </li>

        <li>
          <Link to={'/genre/brazilian'}>
            <a>Brazilian Music</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Genre;
