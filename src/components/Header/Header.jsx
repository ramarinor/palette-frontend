import CustomLink from "./CustomLink/CustomLink";
import "./Header.css";
function Header({ user, setUser }) {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-bar-list">
          <li className="nav-bar-item">
            <CustomLink to="/paints" className="nav-bar-link">
              PAINTS
            </CustomLink>
          </li>
          <li className="nav-bar-item">
            <CustomLink to="/samples" className="nav-bar-link">
              SAMPLES
            </CustomLink>
          </li>
        </ul>
      </nav>
      <CustomLink to="/" className="logo-link">
        <h1 className="logo">PALETTE</h1>
      </CustomLink>

      <nav className="nav-bar">
        <ul className="nav-bar-list">
          <li className="nav-bar-item">
            <CustomLink to="/calculator" className="nav-bar-link">
              CALCULATOR
            </CustomLink>
          </li>
          {user === null ? (
            <li className="nav-bar-item">
              <CustomLink to="/login" className="nav-bar-link">
                LOG IN
              </CustomLink>
            </li>
          ) : (
            <li className="nav-bar-item">
              <CustomLink
                to="/login"
                className="nav-bar-link"
                onClick={() => {
                  setUser(null);
                }}
              >
                LOG OUT
              </CustomLink>
            </li>
          )}
          {user !== null && (
            <li className="nav-bar-item">
              <CustomLink to="/cart" className="nav-bar-link">
                CART (
                {user.cart.reduce(
                  (total, cartItem) => total + cartItem.quantity,
                  0
                )}
                )
              </CustomLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
