import React from "react";
import image from "../img/01.jpg"

const List = [
    {img:image,title:"Welcome To TeamVision",subtitle:"Connect, Share &amp; Engage",des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},
    {img:image,title:"Welcome To TeamVision",subtitle:"Connect, Share &amp; Engage",des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},
    {img:image,title:"Welcome To TeamVision",subtitle:"Connect, Share &amp; Engage",des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."}
];

const Home = () => (
    <section className="banner--section">
        <div className="banner--slider owl-carousel" data-owl-dots="true" data-owl-dots-style={2}>
            {
             List.map((value,index)=> (
                 <div key={index} className="banner--item" data-bg-img={value.img} data-overlay="0.75">
                     <div className="vc--parent">
                         <div className="vc--child">
                             <div className="container">
                                 <div className="row">
                                     <div className="col-md-10 col-md-offset-1">
                                         {/* Banner Content Start */}
                                         <div className="banner--content pt--70 pb--80 text-center">
                                             <div className="title">
                                                 <h1 className="h1 text-lightgray">{value.title}</h1>
                                             </div>
                                             <div className="sub-title">
                                                 <h2 className="h2 text-lightgray">{value.subtitle}</h2>
                                             </div>
                                             <div className="desc text-gray fs--16">
                                                 <p>{value.des}</p>
                                             </div>
                                             <div className="action text-uppercase">
                                                 <a href="#" className="btn btn-white">Learn More</a>
                                                 <a href="/registration" className="btn btn-primary">Start Quiz</a>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             ))
            }
        </div>

    </section>

);

export default Home;