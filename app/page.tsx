/* Components */
import Navbar from "@/src/components/Navbar/Navbar";
import { Counter } from "./components/Counter/Counter";
import Footer from "@/src/components/Footer/Footer";
import VideoList from "@/src/components/VideoGrid/VideoList/VideoList";

export default function IndexPage() {
  return (
    <div>
        {/* <!-- navigation --> */}
        <Navbar/>

        {/* <!-- Video Grid --> */}
        <VideoList />

        {/* <!-- footer --> */}
        <Footer />
    </div>
  )
}

export const metadata = {
  title: "Redux Toolkit",
};
