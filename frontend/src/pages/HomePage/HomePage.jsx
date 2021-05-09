import { Link } from 'react-router-dom';
import AppFooter from '../../cmps/AppFooter';
import './_HomePage.scss';

function HomePage() {
    return <div className="home">
        <div className="hero-container flex">
            <div className="hero-title flex f-col">
                <img className="logo" src="https://res.cloudinary.com/morshva/image/upload/v1607179956/logo-black_bl4s9d.png" alt="Logo" />
                <h1>Putting the pieces together can be truly rewarding. Cardella
                    is here to help lead your team on the path to success!</h1>
                <Link to="/boards/5fca2d38e4167fe6dfcfbec5" className="link flex">
                    <h4>Let's Get Started</h4>
                </Link>
            </div>
            <img className="hero-img flex"
                src="https://res.cloudinary.com/shimrit/image/upload/v1606990002/cardella/9814_szxc5a.jpg" alt="Hero"
            />
        </div>
        <div className="main-container flex f-col">
            <div className="couple flex">
                <div className="text">
                    <h2 className="title">Working together is easy!</h2>
                    <p className="desc">
                        Who says teamwork can't be fun? With Cardella it is
                        simple to organize your project, keep together in
                        progress, and achieve more.
                    </p>
                </div>
                <img src="https://res.cloudinary.com/morshva/image/upload/v1607178261/1_hlgyzw.png" alt="Working together" />
            </div>
            <div className="couple flex">
                <div className="text">
                    <h2 className="title">Cardella loves cards!</h2>
                    <p className="desc">
                        You can post, edit, choose labels, and add check-lists.
                        Cardella's cards can do just about everything! Move
                        them, copy, save, delete and add any photo you like.
                    </p>
                </div>
                <img
                    src="https://res.cloudinary.com/morshva/image/upload/v1607178261/2_wsibtx.png" alt="Loves cards"
                />
            </div>
            <div className="couple flex">
                <div className="text">
                    <h2 className="title">Just like stickers...</h2>
                    <p className="desc">
                        Drag and drop a selected card or even an entire list in
                        order to re-arrange your assignments.
                    </p>
                </div>
                <img
                    src="https://res.cloudinary.com/morshva/image/upload/v1607178261/3_oyfdys.png" alt="Like stickers"
                />
            </div>
        </div>
        <AppFooter />
    </div>
}

export default HomePage;
