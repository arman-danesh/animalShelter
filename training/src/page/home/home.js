import Header from "../../layout/header/header";
import RightSection from "./component/right-section";
import LeftSection from "./component/left-section";

export default function Home(){
    return(
        <>    
            <Header/>
            <main>
                <div className="container">
                    <div className="row m-0 py-3 justify-content-between w-100 mt-3">
                        <RightSection />
                        <LeftSection />
                    </div>
                </div>
            </main>
        </>
    );
}