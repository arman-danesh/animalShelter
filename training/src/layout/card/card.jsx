export default function Card(props){
    return(
    <div className="card bg-dark shadow border border-1 border-dark border-opacity-75 rounded-4 h-100">
        <img src={props.image} style={{objectFit:"cover",height:"225px"}} className="card-img-top p-3 rounded-5  border border-1 border-dark border-opacity-75" alt="..."/>
        <div className="card-body">
            <p className="text-light mb-0">
                {`${props.title.substring(0, 10)}...`}
            </p>
            <span className="text-light text-opacity-75 fs_13px">
                {`${props.des.substring(0,30)}...`}
            </span>
            <div className="d-flex justify-content-between align-items-center w-100 mt-4">
                <a className="btn btn-sm btn-primary rounded-4 d-flex align-items-center justify-content-center" href="" style={{width:"150px",height:"40px"}}>Buy</a>
                <span className="fs-5 mb-0 text-primary">{props.price}$</span>
            </div>
        </div>
    </div>
    );
}
