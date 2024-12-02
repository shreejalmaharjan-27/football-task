import { Link } from "react-router-dom";

const HomeCard = (props) => {
    const title = props.title;
    const description = props.description;
    const link = props.link;
    return (
        <Link to={link} className="p-4 rounded-2xl border border-gray-400 hover:no-underline hover:text-inherit min-h-64">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
        </Link>
    );
}

export default HomeCard;