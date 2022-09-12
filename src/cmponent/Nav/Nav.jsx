import { NavLink } from 'react-router-dom';
export default function Nav() {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>{' '}
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
    </ul>
  );
}
