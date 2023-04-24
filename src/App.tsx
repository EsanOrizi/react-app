import {BsFillCalendarCheckFill} from  'react-icons/bs';
import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";
import React from "react";
import {AiFillHeart} from "react-icons/ai";
import Like from "./components/Like";

function App() {
    let items = [
        'New York',
        'London',
        'Paris'
    ];
    const handleSelectItem = (item: string) => {
        console.log(item);
    }
    return <div>
        <Like onClick={() => console.log('clicked')}/>
    </div>;
}
export default App;