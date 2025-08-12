import Projects from "../components/Projects"
import ReusableInfo from "../components/ReusableInfo"
import ReusableH2 from "@/app/components/ReusableH2"

const HomePage = () => {
    return (
        <>
        <div className="flex justify-center items-center bg-[#466995]">
            <div className="w-[30%]">
               <div className="flex justify-center text-base uppercase p-1.5 font-bold text-amber-50"> <ReusableH2 title="frontend developer" /> </div>
                <ReusableInfo text="I specialize in building exceptional digital experience. With a focus on performance and accessibility, I transform designs into high quality products that delight users and make a positive impact." />
            </div>
            <img src="./image2.jpg" alt="image" width={50} height={50} className="w-[30%] rounded-full p-4"/>
        </div>

        <Projects/>
        </>
    )
}

export default HomePage