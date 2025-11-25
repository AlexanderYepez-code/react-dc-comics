import style from "./Footer.module.css"

export default function Footer() {
    const background = `h ${style.backimage}`
    const bgDarkFooter = ` h ${style.bgLightgrey}`
    return (
        <footer>
            <div className={background}>
                <div className="container d-flex gap p">
                    <div >
                        <h4 className="text-white">DC COMICS</h4>
                        <ul >
                            <li><a  href="">Characters</a></li>
                            <li><a  href="">Comics</a></li>
                            <li><a  href="">Movies</a></li>
                            <li><a  href="">TV</a></li>
                            <li><a  href="">Games</a></li>
                            <li><a  href="">Videos</a></li>
                            <li><a href="">News</a></li>
                        </ul>
                        <h4 className="text-white"> SHOP</h4>
                        <ul>
                            <li><a href="">Shop DC</a></li>
                            <li><a href="">Shop DC Collectibles</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>DC</h4>
                        <ul>
                            <li><a href="">Privacy policy(New)</a></li>
                            <li><a href="">Privacy policy(New)</a></li>
                            <li><a href="">Privacy policy(New)</a></li>
                            <li><a href="">Privacy policy(New)</a></li>
                            <li><a href="">Privacy policy(New)</a></li>
                            <li><a href="">Privacy policy(New)</a></li>
                            <li><a href="">Privacy policy(New)</a></li>
                            <li><a href="">Privacy policy(New)</a></li>
                            <li><a href="">Privacy policy(New)</a></li>
                            <li><a href="">Privacy policy(New)</a></li>
                            <li><a href="">Privacy policy(New)</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>SITES</h4>
                        <ul>
                            <li><a href="">MAD Magazine</a></li>
                            <li><a href="">MAD Magazine</a></li>
                            <li><a href="">MAD Magazine</a></li>
                            <li><a href="">MAD Magazine</a></li>
                            <li><a href="">MAD Magazine</a></li>
                        </ul>
                    </div>

                </div>
             

            </div>
            <div className={bgDarkFooter}>
                ciao

            </div>

        </footer>
    )
}