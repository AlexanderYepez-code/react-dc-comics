import style from "./Header.module.css"
import logo from "../assets/img/dc-logo.png"
import Nav from "../assets/nav"
export default function Header() {
    return (
        <header>
            <div className="d-flex jc-between aling-items-center container h">
                <img src={logo} alt="" />
                <div>
                    <ul className="d-flex gap">
                        {Nav.map((curNav, index) => (
                            <li key={index}><a  className={curNav.stato ? style.active : ""} href="">{curNav.label}</a></li>)


                        )}

                    </ul>
                </div>
            </div>

        </header>
    )

}