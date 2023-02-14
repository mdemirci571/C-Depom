//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

const Content = () => {
  //? Local Style Object
  const pStyle = {
    fontFamily: "Tahoma",
    fontSize: "1.3rem",
    lineHeight: "1.5",
  }

  return (
    <div>
      {/* JSX */}
      {/* Inline Styling */}
      <h2 style={{ color: "white", backgroundColor: "red" }}>React JS</h2>

      {/* Local or global variables */}
      <p style={pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, aperiam.
      </p>

      <img
        src="https://cdn.pixabay.com/photo/2014/12/04/14/46/magnolia-trees-556718__340.jpg"
        alt="spring-img1"
      />

      <img src="" alt="" />
    </div>
  )
}

export default Content
