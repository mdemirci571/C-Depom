import footerStyle from "./Footer.module.scss";
function Footer(){
    return(
        <div className={footerStyle.footer}>
            Copyright  by Maximilian &#169;{new Date().getFullYear()} 
        </div>
    )
}
export default Footer;