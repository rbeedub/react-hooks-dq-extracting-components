import React from 'react';  
import MessageListItem from './MessageListItem'    
        
function MessageList (props) {       

    console.log(props.messages)


const renderListItem = props.messages.map(message => {
    return <MessageListItem key={message.id} name={message.name[0]} content={message.content} type={message.type} />
})


    return(
      <>  
            <ul>
            {renderListItem}
            </ul>
      </>  
    );
}
export default MessageList