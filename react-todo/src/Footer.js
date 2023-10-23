import {useState} from "react";
import './Footer.css';

function Footer({links, click}) {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("ozay");

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <footer className="Footer" onClick={handleClick}>
            <div>
                <ul>
                    {
                        links.map(item => {
                            return <li><a href={item.url}
                                          onClick={() => click(item)}>{item.label}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
