import React from "react";
import PropTypes from "prop-types";

const MessagesList = ({ messages }) => (
    <section if="message-list">
        <ul>
            {messages.map(message => (
                <Messages
                    key={message.id}
                    {...message}
                />
            ))}
        </ul>
    </section>
);

MessagesList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default MessagesList;
