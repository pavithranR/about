import "./attainment.scss";

export default function Attainment() {
  const data = [
    {
      id: 1,
      name: "Microsoft",
      title: "Azure Certificate",
      img: "assets/ai900.png",
      link:"https://learn.microsoft.com/api/credentials/share/en-us/pavithranr/A388E31445EFCBE8?sharingId=CF8D0FF4FCCC6DF3",
      desc:
        "Microsoft Certified: Azure Data Scientist Associate (DP-100). Pursuing additional Azure certifications.",
    },
    {
      id: 2,
      name: "RSWordXML",
      title: "nuget package",
      // icon: "assets/youtube.png",
      img:"assets/nugetml.png",
      link:"https://www.nuget.org/packages/RSWordXML/",
      desc:
        "I developed this nuget package using OpenXML and .Net framework 4.6.1, it can be used to create and manipulate microsoft word documents programmatically.",
        featured: true,
    },
    {
      id: 3,
      name: "Code chunks",
      title: "ML / CV projects",
      // icon: "assets/youtube.png",
      img:"assets/github.png",
      link:"https://github.com/pavithranR",
      desc:
        "I occasionally share my machine learning and computer vision work on GitHub.",
        featured: false,
    }
  ];
  return (
    <div className="attainment" id="attainment">
      <h1>Attainments</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            
            <div className="bottom">
            <a href={d.link} target="example" rel="noopener">
              <h3>{d.name}</h3></a>
              <a href={d.link} target="example" rel="noopener">
              <h4>{d.title}</h4></a>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
