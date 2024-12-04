import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='w-full text-yellow p-4 bg-darkBlack'>
            <div className="container mx-auto">
                <Link to="/"><h1 className="text-1xl font-bold font-display">FOOTBALL MANAGER</h1></Link>
            </div>
        </header>
    )
}

export default Header;