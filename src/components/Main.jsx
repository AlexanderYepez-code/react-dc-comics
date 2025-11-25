import style from "./Main.module.css"
import Comic from "./DigitalComincs"
import MerchandiseImg from "./Merchandise"
import Subscriptions from "./Suscriptio"
import Locator from "./Locator"
import VisaPower from "./PowerVisa"

export default function Main() {
    return (
        <main>
            <div className="bg-dark">
                <div className="container text-white d-flex aling-items-center h">
                    <p> <strong>--&#62; Content goes Here &#60;--</strong> </p>
                </div>
            </div>
            <div className="bg-blue h ">
                <ul className="d-flex container jc-between aling-items-center h">
                    <li className="d-flex aling-items-center gap-10 text-white">
                        <Comic/>
                        <p>DIGITAL COMINCS</p>

                    </li>
                    <li className="d-flex aling-items-center gap-10 text-white">
                        <MerchandiseImg/>
                        <p>DIGITAL COMINCS</p>

                    </li><li className="d-flex aling-items-center gap-10 text-white">
                        <Subscriptions/>
                        <p>DIGITAL COMINCS</p>

                    </li><li className="d-flex aling-items-center gap-10 text-white">
                        <Locator/>
                        <p>DIGITAL COMINCS</p>

                    </li><li className="d-flex aling-items-center gap-10 text-white">
                        <VisaPower/>
                        <p>DIGITAL COMINCS</p>

                    </li>
                </ul>
            </div>


        </main>
    )
}