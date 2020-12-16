import React from 'react';

import {MessageContainer} from './checkout-message.styles';

const Message = ({ message }) => (
    <div>
    <MessageContainer>{message}</MessageContainer>
    </div>
);


export default Message;