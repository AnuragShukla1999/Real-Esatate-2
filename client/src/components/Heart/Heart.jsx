import { useContext, useState } from "react";
import { AiFillHeart } from "react-icons/ai"

const Heart = ({ id }) => {

    const [heartColor, setHeartColor] = useState("white");
    const { validateLogin } = useAuthCheck();

    const { user } = useAuth0();

    const {
        userDetails: {favourites, token},
        setUserDetails,
    } = useContext(UserDetailContext);

    return (
        <AiFillHeart/>
    )
};

export default Heart;