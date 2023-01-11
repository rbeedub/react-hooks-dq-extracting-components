import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';


function MainContent(props) {
    return (

    <main>
        {/* {console.log(messages)} */}
        <h2>Messages</h2>
        <section className="messages">
            <MessageList
            messages={props.messages}
            />
        </section>
            <MessageForm />
    </main>
    );
}
export default MainContent