import image1 from "../asserts/_Barber_ Handsome Young Man jpg"
import image2 from "../asserts/Attractive black lady housekeeper .jpg"
import image3 from "../asserts/20 Classic Haircuts .jpg"
import image4 from "../asserts/Emergency Local Plumbers _ Commercial Plumbing Repair Contractors NY.jpg"
import image5 from "../asserts/When To See A Stylist And When To Do It Yourself.jpg"
 import image6 from "../asserts/Premium Photo _ Two african  .jpg"
 import image7 from "../asserts/Premium Photo _ In a bustling tailor office .jpg"
import image8 from "../asserts/WhatsApp Image 2024-05-30 at 16.40.47_88a1e528.jpg"
import image9 from "../asserts/WhatsApp Image 2024-05-30 at 16.40.22_1072e60c.jpg"
import image10 from "../asserts/WhatsApp Image 2024-05-30 at 16.40.36_3ad3bed0.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // return(
    //     <div className="p-4">
    //         <div className="flex flex-col md:flex-row justify-between items-center">
    //             <div className="ml-4 md:ml-6">
    //                 <h2 className="text-3xl text-gray-700 pt-10 pb-2">
    //                     Connect to a skill provider with <span className="text-blue-500">ease</span>
    //                 </h2>
    //                 <h2 className="text-gray-700">
    //                     Our platform offers different skill services
    //                 </h2>
    //             </div>
    //             <div className="mt-5 md:mt-0 md:ml-5 p-5">
    //                 <img src={image1} alt="Skill provider" className="w-full md:w-96 md:h-80 object-cover rounded"/>
    //             </div>
    //         </div>
    //         <div>
    //             <h2 className="text-2xl text-center mt-10 mb-6">
    //                 <span className="text-blue-500">Our Services</span>
    //             </h2>
    //             <div className="flex flex-wrap justify-center gap-4">
    //                 <img src={image2} alt="Service 1" className="w-full md:w-1/2 lg:w-1/4 h-40 object-cover rounded"/>
    //                 <img src={image3} alt="Service 2" className="w-full md:w-1/2 lg:w-1/4 h-40 object-cover rounded"/>
    //                 <img src={image6} alt="Service 3" className="w-full md:w-1/2 lg:w-1/4 h-40 object-cover rounded"/>
    //             </div>
    //             <div className="flex flex-wrap justify-center gap-4 mt-4">
    //                 <img src={image4} alt="Service 4" className="w-full md:w-1/2 lg:w-1/4 h-40 object-cover rounded"/>
    //                 <img src={image5} alt="Service 5" className="w-full md:w-1/2 lg:w-1/4 h-40 object-cover rounded"/>
    //                 <img src={image7} alt="Service 5" className="w-full md:w-1/2 lg:w-1/4 h-40 object-cover rounded"/>
    //             </div>
    //         </div>
    //     </div>
    // );
    //
    return (
        <div className="min-h-screen p-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="ml-4 md:ml-6">
                    <h2 className="text-3xl text-gray-700 pt-10 pb-2">
                        Connect to a skill provider with <span className="text-blue-500">ease</span>
                    </h2>
                    <h2 className="text-gray-700">
                        Our platform offers different skill services
                    </h2>
                </div>
                <div className=" md:mt-0 md:ml-5 p-5">
                    {/*<img src={image1} alt="Skill provider" className=" mt-14 w-full md:w-96 md:h-80 object-cover rounded"/>*/}
                </div>
            </div>
            <div className="mb-14">
                <h2 className="text-2xl text-center mt-2 mb-14">
                    <span className="text-blue-500">Our Services</span>
                </h2>
                <Slider {...settings}>
                    <div className="px-1">
                        <img src={image2} alt="Service 1" className=" w-full md:w-80 h-80 object-cover rounded"/>
                    </div>
                    <div className="px-1">
                        <img src={image3} alt="Service 2" className=" w-full md:w-80 h-80 object-cover rounded"/>
                    </div>
                    <div className="px-1">
                        <img src={image6} alt="Service 3" className=" w-full md:w-80 h-80 object-cover rounded"/>
                    </div>
                    <div className="px-1">
                        <img src={image4} alt="Service 4" className="mb-12 w-full md:w-80 h-80 object-cover rounded"/>
                    </div>
                    <div className="px-1">
                        <img src={image5} alt="Service 5" className=" md:w-80 h-80 object-cover rounded"/>
                    </div>
                    <div className="px-1">
                        <img src={image7} alt="Service 6" className=" w-full md:w-80 h-80 object-cover rounded"/>
                    </div>
                    <div className="px-1">
                        <img src={image8} alt="Service 6" className=" w-full md:w-80 h-80 object-cover rounded"/>
                    </div>
                    <div className="px-1">
                        <img src={image9} alt="Service 6" className=" w-full md:w-80 h-80 object-cover rounded"/>
                    </div>
                    <div className="px-1">
                        <img src={image10} alt="Service 6" className=" w-full md:w-80 h-80 object-cover rounded"/>
                    </div>
                    <div className="px-1">
                        <img src={image1} alt="Service 6" className=" w-full md:w-80 h-80 object-cover rounded"/>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
export default Hero;