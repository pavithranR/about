import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#skill">Skills</a>
        </li>
        {/* <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li> */}
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#timelinePR">Timeline</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#aboutId">About</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#attainment">Attainments</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
