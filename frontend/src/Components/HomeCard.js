import { Link } from "react-router-dom";


import Icon from "./Icon";


const HomeCard = (props) => {
    const title = props.title;
    const description = props.description;
    const link = props.link;
    const bgwrapper = props.bgwrapper;
    const icon_name = props.icon_name;
    return (
        <Link to={link} className="hover:no-underline">
            <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 hover:no-underline hover:text-inherit min-h-64 hover:-translate-y-2 duration-300">
                <img src={bgwrapper} alt="" class="absolute inset-0 h-full w-full object-cover"/>
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 class="z-10 mt-3 text-3xl font-bold text-white">{title} 
                    <span> <Icon name ={icon_name}/> </span>
                </h3>
                <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{description}</div>
            </div>

            
        </Link>
    );
}

export default HomeCard;