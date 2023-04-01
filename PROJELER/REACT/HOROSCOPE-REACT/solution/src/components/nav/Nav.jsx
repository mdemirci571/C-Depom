import navStyle from "./Nav.module.scss";
import log from "../../helpers/logo.png";
function Nav() {
    return (
        <div className={navStyle.navbar}>
            <div className={navStyle.logo}>
                <img src={log} alt="" />
            </div>
            <div className={navStyle.links}>
                <a href="#horoscope">Horoscope</a>
                <a href="#daily">Daily</a>
                <a href="#tarot">Tarot</a>
                <a href="#article">Article</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}
export default Nav;