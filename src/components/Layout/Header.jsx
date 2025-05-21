export default function Header() {
  return (
    <header id="page-header">
      <div className="container d-flex content-between align-center">
        <img src="/dc-logo.png" alt="DC Logo" />
        <nav className="nav d-flex align-center">
          <ul className="d-flex align-center">
            <li className="nav-link">
              <a href="#">Characters</a>
            </li>
            <li className="nav-link active">
              <a href="#">Comcis</a>
            </li>
            <li className="nav-link">
              <a href="#">Movies</a>
            </li>
            <li className="nav-link">
              <a href="#">TV</a>
            </li>
            <li className="nav-link">
              <a href="#">Games</a>
            </li>
            <li className="nav-link">
              <a href="#">Collectibles</a>
            </li>
            <li className="nav-link">
              <a href="#">Videos</a>
            </li>
            <li className="nav-link">
              <a href="#">Fans</a>
            </li>
            <li className="nav-link">
              <a href="#">News</a>
            </li>
            <li className="nav-link">
              <a href="#">Shop</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
