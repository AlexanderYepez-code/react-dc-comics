import style from "./Main.module.css"
import Comic from "./DigitalComincs"
export default function Main() {
    return (
        <main>
            <div className="bg-dark">
                <div className="container text-white d-flex aling-items-center h">
                    <p> <strong>--&#62; Content goes Here &#60;--</strong> </p>
                </div>
            </div>
            <div className="bg-blue h ">
                <ul className="d-flex container gap-10">
                    <li className="d-flex aling-items-center gap-10 text-white">
                        <Comic/>
                        <p>DIGITAL COMINCS</p>

                    </li>
                    <li className="d-flex aling-items-center gap-10 text-white">
                        <Comic/>
                        <p>DIGITAL COMINCS</p>

                    </li><li className="d-flex aling-items-center gap-10 text-white">
                        <Comic/>
                        <p>DIGITAL COMINCS</p>

                    </li><li className="d-flex aling-items-center gap-10 text-white">
                        <Comic/>
                        <p>DIGITAL COMINCS</p>

                    </li><li className="d-flex aling-items-center gap-10 text-white">
                        <Comic/>
                        <p>DIGITAL COMINCS</p>

                    </li>
                </ul>
            </div>


        </main>
    )
}