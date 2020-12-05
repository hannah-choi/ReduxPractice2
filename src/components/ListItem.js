import React from "react";

function ListItem({ data, deletePerson }) {
    // onClick = {function() {in()}}

    return (
        <li>
            {data}
            <input type="button" value="입장" />
            <input
                type="button"
                value="퇴장"
                onClick={function () {
                    deletePerson();
                }}
            />
        </li>
    );
}

export default ListItem;
