import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useState} from "react";

interface Props {
    onClick: () => void;
}

const Like = ({onClick}: Props) => {

    const [status, setStatus] = useState(true);

    const toggle = () => {
        setStatus(!status);
        onClick();
    }

    if (status)
        return (
            <AiFillHeart color='red' size={40} onClick={toggle}></AiFillHeart>

        );

    return <AiOutlineHeart size={40} onClick={toggle}/>

}

export default Like