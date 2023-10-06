import { useEffect, useState } from "react";
import Axios from "axios";

function Contact () {
    const  [name, setName] = useState("MyName");
    const  [data, setData] = useState([]);
    //this.state = {name: "Shankar"} //class component
    //const  [x, setX] = useState(defaultValue);

    const handleClick = () => {
        setName("SomeOtherName");
    }

    const ContactDetails = () => {
        return data.map((val) => {
            return <p>{val.name} - {val.phone}</p>
        })
    }

    useEffect (() => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then ((res) => {
            if (res.status === 200) { //200 = OK
                console.log(res.data);
                setData(res.data);
            }
            else { //everything else then promise is rejected and catch is excecuted
                Promise.reject()
            }
        })
        .catch((err) => alert(err))
    }, [])

    return (
        <div>
            <h1>The ownere of this page in {name}</h1>
            <button onClick={handleClick}>Change owner</button>
            {ContactDetails()}
        </div>
    )
}

export default Contact;