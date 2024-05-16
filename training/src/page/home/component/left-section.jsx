import Items from "./items";
import ItemsPrice from "./ItemsPrice";
export default function LeftSection(){
    return(
        <>
            <section className="col-12 col-lg-3 bg-dark rounded-4 m-0 px-3 d-flex flex-column justify-content-between h-100 position-sticky border border-1 border-light border-opacity-50" style={{top:"5%"}}>
                <Items/>
                <ItemsPrice/>
                <button className="btn btn-primary rounded-4 my-3">Apply Fillter</button>
            </section>
        </>
    );
}