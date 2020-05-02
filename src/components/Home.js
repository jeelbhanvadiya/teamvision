import React from "react";
import image from "../img/logo.jpg"
import image1 from "../img/IMG-20191023-WA0000_1.png"
import image2 from "../img/IMG_7532_1.png"
import image3 from "../img/IMG_20200430_224758.JPG"
import Slider from "react-slick";

const List = [
    {
        img: image,
        title: "Welcome To Team Vision",
        subtitle: "About Us",
        des: "We are work as a helping hand to needy people and also try to guide collegiate youth to choose right path instead of addictions. We are giving free education to children's of labour of farms & factories and we also doing environment related works like planting, recycle unnecessary things, old clothes and many other. We are build new india through making big youth and educated team for social awareness."
    },
];
const imagesList = [image1, image2, image3];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};


const Home = () => (
    <>
        <section className="banner--section">
            <div className="banner--slider owl-carousel cus-height" data-owl-dots="true" data-owl-dots-style={2}>
                {
                    List.map((value, index) => (
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
                                                    {index > 0 ? null : <div className="action text-uppercase">
                                                        <a href="/registration" className="btn btn-primary">Start
                                                            Quiz</a>
                                                    </div>

                                                    }

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
        <Slider {...settings}>
            <div className=''>
                <div className="row">
                    {
                        imagesList.map((value, index) => (
                            <div className="col-md-6" key={index}>
                                <img src={value} style={{width: "100%",height:"50%"}}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Slider>
    </>
);

export default Home;