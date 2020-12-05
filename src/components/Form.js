import React, { useState } from "react";
import { connect } from "react-redux";
import * as store from "../store/store";

function Form({ addPerson }) {
    const [input, setInput] = useState("");

    return (
        <form
            onSubmit={function (e) {
                e.preventDefault();
                addPerson(e.target.personName.value);
            }}
        >
            <input
                type="text"
                value={input}
                onChange={function (e) {
                    setInput(e.target.value);
                }}
                name="personName"
            />
            <input type="submit" value="등록" />
        </form>
    );
}

export default connect(null, function (dispatch) {
    return {
        addPerson: function (name) {
            dispatch(store.addPerson(name));
        },
    };
})(Form);
