import { Link, useNavigate } from "react-router-dom";
import logo from '../../public/Img/logo-white.png';
import background from '../../public/Img/background-chefs2.png';
import burgerqueen from '../../public/Img/burger-queen.png';
import './Home.css'

const Home = () => {
    return (
        <section className="home">
            <img src={logo} alt="bq-logo" className="bq-logo" />
            <img src={burgerqueen} alt="bq-title" className="bq-title" />
            <img src={background} alt="background-chefs" className="background-chefs" />
            <Link to="/login" className="btn-home">INICIAR SESIÓn</Link>
        </section>
    );
}

export default Home;