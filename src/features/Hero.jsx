import image1 from "../asserts/_Barber_ Handsome Young Man jpg"
import image2 from "../asserts/Attractive black lady housekeeper .jpg"
import image3 from "../asserts/20 Classic Haircuts .jpg"
import image4 from "../asserts/Emergency Local Plumbers _ Commercial Plumbing Repair Contractors NY.jpg"
import image5 from "../asserts/When To See A Stylist And When To Do It Yourself.jpg"
 import image6 from "../asserts/Premium Photo _ Two african  .jpg"
 import image7 from "../asserts/Premium Photo _ In a bustling tailor office .jpg"

const Hero = ()=>{
    return(
        <div className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="ml-4 md:ml-6">
                    <h2 className="text-3xl text-gray-700 pt-10 pb-2">
                        Connect to a skill provider with <span className="text-blue-500">ease</span>
                    </h2>
                    <h2 className="text-gray-700">
                        Our platform offers different skill services
                    </h2>
                </div>
                <div className="mt-5 md:mt-0 md:ml-5 p-5">
                    <img src={image1} alt="Skill provider" className="w-full md:w-96 md:h-80 object-cover rounded"/>
                </div>
            </div>
            <div>
                <h2 className="text-2xl text-center mt-10 mb-6">
                    <span className="text-blue-500">Our Services</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <img src={image2} alt="Service 1" className="w-full md:w-1/2 lg:w-1/4 h-40 object-cover rounded"/>
                    <img src={image3} alt="Service 2" className="w-full md:w-1/2 lg:w-1/4 h-40 object-cover rounded"/>
                    <img src={image6} alt="Service 3" className="w-full md:w-1/2 lg:w-1/4 h-40 object-cover rounded"/>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <img src={image4} alt="Service 4" className="w-full md:w-1/2 lg:w-1/4 h-40 object-cover rounded"/>
                    <img src={image5} alt="Service 5" className="w-full md:w-1/2 lg:w-1/4 h-40 object-cover rounded"/>
                    <img src={image7} alt="Service 5" className="w-full md:w-1/2 lg:w-1/4 h-40 object-cover rounded"/>
                </div>
            </div>
        </div>
    );
}
export default Hero;