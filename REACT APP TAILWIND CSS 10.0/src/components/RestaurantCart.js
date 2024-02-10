import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;

    return (
        <div
            className="m-4 p-4 w-[230px] hover:shadow-lg h-[400px] text-sm rounded-lg bg-[#f0f0f0]"
          
        >
            <img
                className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />

            <h3 className="font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
};

export default RestaurantCard;
