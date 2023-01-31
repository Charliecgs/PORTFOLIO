import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => 
  `
    <h2>Contacto</h2>
    <div>
    ${Button("/icons/github.png", "Github")}
    ${Button("/icons/linkedin.png", "LinkedIn")}
    ${Button("/icons/telegram.png", "Telegram")}
    ${Button("/icons/twitter.png", "Twitter")}
    </div>
    `;
