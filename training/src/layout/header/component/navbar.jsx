import Test from'../image/test.jpg';
import { ReactComponent as SvgHeart } from '../image/SvgHeart.svg';
import { ReactComponent as SvgCart } from '../image/SvgCart.svg';


export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-transparent shadow-none text-light" data-bs-theme="dark">
            <div className="container">
                <img className="rounded-circle border-0 ms-3" style={{objectFit:"cover"}} width={40} height={40} src={Test} alt="" />
                <div className="mx-2" >
                    <SvgHeart width={20} height={20} />
                </div>
                <div className="mx-2" >
                    <SvgCart width={20} height={20} />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link mx-2 fs_13px text-light text-opacity-75 active" aria-current="page" href={`/home`}>خانه</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2 fs_13px text-light text-opacity-75" href={``}>وبلاگ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2 fs_13px text-light text-opacity-75" href={`/about`}>درباره ما</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2 fs_13px text-light text-opacity-75" href={``}>تماس با ما</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}