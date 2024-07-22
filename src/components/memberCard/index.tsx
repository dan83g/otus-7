import { FC } from "react";
import { UserProps } from "./types";
import { CardInfo } from "./parts/cardInfo";
import "./style.scss";

export const  MemberCard: FC<UserProps> = (props) => {
    return (
        <div key={props.id} className="member-card">
            <p className="title">{props.name}</p>
            <CardInfo {...props} />
        </div>
    );
};
