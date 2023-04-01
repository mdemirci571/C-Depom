import footerstyle from "../scss/footer.module.scss"
function Footer(){


    return(
        <div className={footerstyle.footer}>
<p>Copyright by Clarusway {new Date().getFullYear()}</p>
        </div>
    )
}
export default Footer;