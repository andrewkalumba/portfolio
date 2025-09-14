import Projects from "../components/Projects"
import ReusableInfo from "../components/ReusableInfo"
import ReusableH2 from "@/app/components/ReusableH2"

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center bg-[#466995] p-6 md:p-12">

                <div className="w-full md:w-[40%] text-center md:text-left">
                    <div className="flex justify-center md:justify-start text-sm md:text-base uppercase p-2 font-bold text-amber-50">
                        <ReusableH2 title="frontend developer" />
                    </div>
                    <ReusableInfo text="I specialize in building exceptional digital experience. With a focus on performance and accessibility, I transform designs into high quality products that delight users and make a positive impact." />
                </div>

                <div className="w-full md:w-[40%] flex justify-center mt-6 md:mt-0">
                    <img
                        src="./image2.jpg"
                        alt="image"
                        className="w-[60%] md:w-[70%] lg:w-[60%] rounded-full shadow-lg"
                    />
                </div>
            </div>

            <Projects />
        </>
    )
}

export default HomePage
