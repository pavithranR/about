import "./topbar.scss";
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

// import TimelineDot from '@material-ui/lab/TimelineDot';
 

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Pr
            {/* <img src="assets/logo.png" alt="" /> */}
          </a>
          {/* <div className="itemContainer">
            <Person className="icon" />
            <span>+44 924 12 74</span>
          </div> */}
          {/* <div className="itemContainer">
            <Mail className="icon" />
            <span>pavithran.rajasekaran@gmail.com</span>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
