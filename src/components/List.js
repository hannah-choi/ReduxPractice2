import React from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import * as store from "../store/store";

function List({ guests, deletePerson }) {
    console.log(guests);
    return (
        <ul>
            {guests.map((data, i) => (
                <ListItem
                    data={data}
                    key={i}
                    deletePerson={function () {
                        deletePerson(i);
                    }}
                />
            ))}
        </ul>
    );
}

export default connect(
    function (state) {
        return { guests: state.guests };
    },
    function (dispatch) {
        return {
            deletePerson: function (index) {
                dispatch(store.deletePerson(index));
            },
        };
    }
)(List);
