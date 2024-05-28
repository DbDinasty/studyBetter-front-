import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Головна
      </Link>
      <div className="links-wrapper"> 
        <ul>
          <CustomLink to="/math">Вища математика</CustomLink>
          <CustomLink to="/discretemath">Дискретна математика</CustomLink>
          <li className="dropdown">
            <span>Лекції</span>
            <div className="dropdown-content">
              <CustomLink to="/mathlectures">Лекції з вищої математики</CustomLink>
              <CustomLink to="/discretelectures">Лекції з дискретної математики</CustomLink>
            </div>
          </li>
        </ul>
      </div> 
    </nav>
  )
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}