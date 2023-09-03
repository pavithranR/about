import "./attainment.scss";

export default function Attainment() {
  const data = [
    {
      id: 1,
      name: "Microsoft",
      title: "Azure Certificate",
      img: "assets/ai900.png",
      link:"https://www.credly.com/badges/b7421a20-5bc3-4b51-9fdb-5539074f1656/public_url",
      desc:
        "AI Fundamentals. More azure certificates are underway to keep me updated with the Microsoft tech stack.",
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
        "The Machine learning and computer vision programs that I have done are listed in my GitHub",
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
