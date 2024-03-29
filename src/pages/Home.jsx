import { useSelector } from "react-redux";
import { TopBar } from "../components";
import ProfileCard from "../components/ProfileCard";


const Home = () => {
  const { user    } = useSelector((state)=>state.user);
  return (
    <div className=" w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-hidden">
         <TopBar/>
      <div className="w-full flex gap-2 lg:gap-4 pt-5 pb-10 h-full">
        {/* {left} */}
        <div className="hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto">
         <ProfileCard user={user}/>
        </div>
        </div>
        {/* center */}
        <div></div>
        {/* right */}
        <div></div>
    
    </div>
  )
}

export default Home;