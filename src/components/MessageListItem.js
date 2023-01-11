import React from 'react';


function MessageListItem ({name, content, type}) {
      return (
        <li className={`message ${type}`}>
          <div className="icon">{name}</div>
          <span className="content" >{content}</span>
        </li>
      ); 
      }
 
    // }

export default MessageListItem

//         <li className="message sent">
//             <div className="icon">E</div>
//             <span className="content">One</span>
//         </li>
//         <li className="message received">
//             <div className="icon">P</div>
//             <span className="content">Two</span>
//         </li>
//         <li className="message sent">
//             <div className="icon">E</div>
//             <span className="content">Three four five</span>
//         </li>
//         <li className="message received">
//             <div className="icon">P</div>
//             <span className="content">🎺🎺🎺🎺🎺</span>
//         </li>
//         </ul>
// )
// }
