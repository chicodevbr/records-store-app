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
          <Link to={'/genre/pop'}>Pop</Link>
        </li>
        <li>
          <Link to={'/genre/rock'}>Rock</Link>
        </li>
        <li>
          <Link to={'/genre/hip-hop'}>Hip-Hop</Link>
        </li>
        <li>
          <Link to={'/genre/soul'}>Soul</Link>
        </li>

        <li>
          <Link to={'/genre/indie'}>Indie</Link>
        </li>

        <li>
          <Link to={'/genre/brasil'}>Brazilian Music</Link>
        </li>
      </ul>
    </div>
  );
};

export default Genre;
