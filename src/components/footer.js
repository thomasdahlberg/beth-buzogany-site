import React, { Fragment } from "react"
import Media from 'react-media';
import footerStyles from "./footer.module.scss"

const Footer = () => {
    return(
        //     <Media queries={{
        //   small: "(max-width: 599px)",
        //   large: "(min-width: 600px)",
        // }}>
        //   {matches => (
        //     <Fragment>
        //     {matches.small &&
                <footer className={footerStyles.footerSmall}>
                    <p className={footerStyles.contactSmall}>thomas.dahlberg8(at)gmail(dot)com</p>
                    <p className={footerStyles.footerTextSmall}>Thomas Dahlberg © 2020</p>
                </footer>
        //     }
            // { && 
        //         <footer className={footerStyles.footer}>
        //             <p className={footerStyles.contact}>thomas.dahlberg8(at)gmail(dot)com</p>
        //             <p className={footerStyles.footerText}>Thomas Dahlberg © 2020</p>
        //         </footer>
        //     }
        //     </Fragment>
        //   )}
        // </Media>
    )
}

export default Footer