import style from "./Header.module.css"
import logo from "../assets/img/dc-logo.png"
export default function Header() {
    return (
        <header>
            <div className="d-flex jc-between aling-items-center container">
                <img src={logo} alt="" />
                <div>
                    <ul className="d-flex gap">
                        <li><a href="">CHARACTER</a></li>
                        <li><a className={style.active} href="">COMINCS</a></li>
                        <li><a href="">MOVIE</a></li>
                        <li><a href="">TV</a></li>
                        <li><a href="">GAMES</a></li>
                        <li><a href="">COLLECTIBLES</a></li>
                        <li><a href="">VIDEOS</a></li>
                        <li><a href="">FANS</a></li>
                        <li><a href="">NEWS</a></li>
                        <li><a href="">SHOP</a></li>
                    </ul>
                </div>
            </div>

        </header>
    )

}