import { Link } from "react-router-dom";

import Icon from "./Icon";

const HomeCard = (props) => {
  const { title, description, link, bgwrapper, icon_name } = props;

  return (
    <div className="w-80">
      <Link to={link} className="hover:no-underline">
        <div
          className="bg-cover bg-center h-60 w-80 rounded-lg p-0 m-0 relative overflow-hidden"
          style={{ backgroundImage: `url('${bgwrapper}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-yellow from-0% to-50%">
            <div className="absolute inset-x-0 bottom-0 rounded-lg ">
              <div className="leading-none p-6 pb-3 rounded-2xl mt-auto mb-2 text-2xl font-semibold tracking-tight text-black">
                {title}
                <span className="">
                  <Icon name={icon_name} />
                </span>
                <br />
                <span className=" text-sm">{description}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeCard;
