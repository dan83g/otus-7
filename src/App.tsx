import { useEffect, useState } from "react";
import { MemberCard } from "../src/components/memberCard";
import { UserProps } from "./components/memberCard/types";
import { ButtonWithLabel } from "./components/buttonWithLabel";
import { Tabs } from "./components/tabs";
import { Form } from "./components/form";
import "./App.scss";

export default function App() {
    const [users, setUsers] = useState<UserProps[]>([]);
    const [moreUsers, setMoreUsers] = useState<UserProps[]>([]);
    const [addedUser, setAddedUser] = useState<UserProps | null>(null);
    const [tabForm, setTabForm] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((res) => setUsers(res))
        .catch((error) => console.log(error));
    }, []);

    const onButtonClick = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((res) => setMoreUsers(res))
        .catch((error) => console.log(error));
    };

    const handleUserAddition = (user: UserProps) => {
        setAddedUser(user);
    };

    return (
        <div className="App">
        <Tabs onChange={setTabForm}/>
        {!tabForm && users?.map((user: UserProps) => <MemberCard {...user} />)}
        {!tabForm && moreUsers?.map((user: UserProps) => <MemberCard {...user} />)}
        {!tabForm && <ButtonWithLabel label="Нажми меня" caption="More users" onClick={onButtonClick} />}
        {tabForm && <Form onUserAddition={handleUserAddition} />}
        {addedUser && <MemberCard {...addedUser} />}
        </div>
    );
}
