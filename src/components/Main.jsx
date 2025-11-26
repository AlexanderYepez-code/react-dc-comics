import style from "./Main.module.css"
import Comic from "./DigitalComincs"
import MerchandiseImg from "./Merchandise"
import Subscriptions from "./Suscriptio"
import Locator from "./Locator"
import VisaPower from "./PowerVisa"
import Comics from "../assets/comics"

export default function Main() {
    return (
        <main>
            
            <div className={style.banner}>
                <h3>Current Series</h3>
            </div>
            <div className="bg-dark list-comics">
                <div className="container text-white d-flex aling-items-center wrap gap jc-between">
                    {Comics.map((curComics) => {
                        return (
                            <div className="col " key = {curComics.id}>
                                <img className={style.comicimg} src={curComics.thumb} alt="" />
                                <h4 className="titolo">{curComics.series}</h4>
                                <p className={style.prezzo}>{curComics.price}</p>

                            </div>
                        )

                    })}
                 

                </div>
            </div>
            <div className="bg-blue h ">
                <ul className="d-flex container jc-between aling-items-center h">
                    <li className="d-flex aling-items-center gap-10 text-white">
                        <Comic />
                        <p>DIGITAL COMINCS</p>

                    </li>
                    <li className="d-flex aling-items-center gap-10 text-white">
                        <MerchandiseImg />
                        <p>DIGITAL COMINCS</p>

                    </li><li className="d-flex aling-items-center gap-10 text-white">
                        <Subscriptions />
                        <p>DIGITAL COMINCS</p>

                    </li><li className="d-flex aling-items-center gap-10 text-white">
                        <Locator />
                        <p>DIGITAL COMINCS</p>

                    </li><li className="d-flex aling-items-center gap-10 text-white">
                        <VisaPower />
                        <p>DIGITAL COMINCS</p>

                    </li>
                </ul>
            </div>


        </main>
    )
}