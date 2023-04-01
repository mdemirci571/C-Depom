import headerStyle from "./Header.module.scss";
function Header(){
    return(
        <div className={headerStyle.header}>
<span className={headerStyle.text}>Who Are You ?</span>
        </div>
    )
}
export default Header;