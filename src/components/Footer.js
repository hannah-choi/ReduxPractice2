import React from "react";
import { connect } from "react-redux";
import * as store from "../store/store";

function Footer({ deleteAll, length }) {
    return (
        <>
            <p>TOTAL: {length} </p>
            <input
                type="button"
                value="모두 삭제"
                onClick={function (e) {
                    deleteAll();
                }}
            />
        </>
    );
}

export default connect(
    function (state) {
        return { length: state.guests.length };
    },
    function (dispatch) {
        return {
            deleteAll: function () {
                dispatch(store.deleteAll());
            },
        };
    }
)(Footer);
