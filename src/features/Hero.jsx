
import image2 from "../asserts/Attractive black lady housekeeper .jpg"
import image3 from "../asserts/20 Classic Haircuts .jpg"
import image4 from "../asserts/Emergency Local Plumbers _ Commercial Plumbing Repair Contractors NY.jpg"
import image5 from "../asserts/When To See A Stylist And When To Do It Yourself.jpg"
 import image6 from "../asserts/Premium Photo _ Two african  .jpg"
 import image7 from "../asserts/Premium Photo _ In a bustling tailor office .jpg"
import image8 from "../asserts/WhatsApp Image 2024-05-30 at 16.40.47_88a1e528.jpg"
import image9 from "../asserts/WhatsApp Image 2024-05-30 at 16.40.22_1072e60c.jpg"
import image10 from "../asserts/WhatsApp Image 2024-05-30 at 16.40.36_3ad3bed0.jpg"
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import {useState} from "react";


const Hero = ()=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerPage = 3;

   const images =[
       {src:image2}, {src: image3}, {src: image4}, {src: image5}, {src: image6},
       {src: image7}, {src: image8},
       {src: image9}, {src: image10},
   ]

    const  nextImages = ()=>{
       if (currentIndex + imagesPerPage < images .length) {
           setCurrentIndex(currentIndex + imagesPerPage)
       }
    }
    const  prevImages = ()=>{
       if (currentIndex - imagesPerPage >= 0){
           setCurrentIndex(currentIndex - imagesPerPage)
       }
    }
    return(
        <div className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="ml-4 md:ml-6">
                    <h2 className="text-4xl text-gray-700 pt-10 pb-2">
                        Connect to a skill provider with <span className="text-blue-500">ease</span>
                    </h2>
                    <h2 className="text-gray-700 text-2xl">
                        Our platform offers different skill services
                    </h2>
                </div>
                <div className="mt-5 md:mt-0 md:ml-5 p-5">
                   {/*<img src={image11} alt="Skill provider" className="w-full md:w-96 md:h-80 object-cover rounded"/>*/}
                </div>
            </div>
            <div>
                <h2 className="text-2xl text-center mt-10 mb-6">
                    <span className="text-blue-500">Our Services</span>
                </h2>
                <div className="relative flex justify-center items-center mb-4">


                    <button onClick={prevImages}
                            className="absolute left-0 text-white bg-gray-800 p-2 rounded-full z-10 -translate-x-full ml-40">
                        <FaArrowLeftLong size={60}/>
                    </button>

                    <div className="flex space-x-16 overflow-hidden ">
                        {images.slice(currentIndex, currentIndex + imagesPerPage).map((image, index) => (
                            <div key={index} className="flex-shrink-0 w-96 h-auto relative group">
                                <div
                                    className="overflow-hidden w-full h-96 transform transition-transform duration-300 ease-in-out group-hover:scale-125 rounded-lg">
                                    <img src={image.src} alt={""} className="object-cover w-full h-full rounded-lg"/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={nextImages}
                            className="absolute right-0 text-white bg-gray-800 rounded-full z-10 translate-x-full mr-40">
                        <FaArrowRightLong size={64}/>
                    </button>
                </div>

            </div>
        </div>
    );


}
export default Hero;