import React from "react";
import Split from "../Split";
import AboutInfo1Data from "../../data/sections/about-info1.json";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      {/* <div className="line bottom left"></div> */}
      <div className="container wow fadeIn">
        <h6 id="aboutTitle">ABOUT US</h6>
        <h3 className="fw-600 text-u ls1 mb-10 color-font-black">Astrolith</h3>
        {AboutInfo1Data.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="row aboutIntroPadding">
              <div className="col-lg-3 col-md-4">
                <div className="sub-title htit sm-mb30">
                  <h4 className="titleIntro">{item.title}</h4>
                </div>
              </div>
              <div className="col-lg-8 offset-lg-1 col-md-8">
                <div className="text-container">
                  <p
                    id="about-p"
                    className="wow txt mb-10 words chars splitting"
                    data-splitting
                  >
                    {item.paragraph1}
                  </p>
                  <p
                    id="about-p"
                    className="wow txt words chars splitting"
                    data-splitting
                  >
                    {item.paragraph2}
                  </p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default AboutIntro;

// const AboutIntro = () => {
//   return (
//     <section className="intro-section section-padding pb-0">
//     {/* <div className="line bottom left"></div> */}
//     <div className="container wow fadeIn">
//     <h6 id="aboutTitle">
//        ABOUT US
//     </h6>
//     <h3 className="fw-600 text-u ls1 mb-10 color-font-black">
//     The Space Miner
//     </h3>
//       {AboutInfo1Data.map((item, index) => (
//         <React.Fragment key={item.id}>
//           <div className="row aboutIntroPadding">
//             <div className="col-lg-12">
//               <div className="sub-title mb-5">
//                 <h4 className="titleIntro">{item.title}</h4>
//               </div>
//             </div>
//             <div className="col-lg-10">
//               <div className="text-container">
//                 <p
//                   id="about-p"
//                   className="wow txt mb-10 words chars splitting"
//                   data-splitting
//                 >
//                   {item.paragraph1}
//                 </p>
//                 <p
//                   id="about-p"
//                   className="wow txt words chars splitting"
//                   data-splitting
//                 >
//                   {item.paragraph2}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </React.Fragment>
//       ))}
//     </div>
//   </section>
//   );
// };

// export default AboutIntro;
