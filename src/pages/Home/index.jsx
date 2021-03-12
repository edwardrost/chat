import React from 'react';

import Message from '../../components/Message';
// import { Route } from 'react-router-dom';

import './Home.scss';

const Home = () => (
    <section className="home">
        <Message 
            avatar="https://sun1-92.userapi.com/s/v1/ig1/jWybR8qm5YVOOC49CY3PXiddZYGO5m8ayqqlV7S7NtydBBrul4ZmkxV5Dh0LmZvmDTIdFL1W.jpg?size=50x0&quality=96&crop=0,0,1100,1100&ava=1" 
            text="Salam, Brut, how is your day? Salam, Brut, how is your day? Salam, Brut, how is your day? Salam, Brut, how is your day?"
            date="Fri Mar 12 2021 14:35:00"
            isMe={false}
        />
        <Message 
            avatar="https://sun1-87.userapi.com/s/v1/if1/T6FofuoGgve5VdaUcsecPhB2-0cHWFA-8sKi8hZuve7WrZ9M4dwPDMCTX5iYO9Ljri9hWb-F.jpg?size=50x0&quality=96&crop=618,132,1551,1551&ava=1" 
            text="Shalom, Bro, I'm fine. What about you? Shalom, Bro, I'm fine. What about you? Shalom, Bro, I'm fine. What about you?"
            date="Fri Mar 12 2021 14:36:00"
            isMe={true}
            isRead={true}
        />
    </section>    
);

export default Home;
