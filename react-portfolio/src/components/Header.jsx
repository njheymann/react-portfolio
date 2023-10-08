import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div class="header">
      <h1>Nils Heymann</h1>
      <div class="header-links">
        <Link key={1} to="/">
          About Me
        </Link>

        <Link key={2} to="/work">
          My Work
        </Link>

        <Link key={3} to="/contact">
          Contact Me
        </Link>

        <Link key={4} to="/resume">
          Resume
        </Link>
      </div>
    </div>
  );
}
