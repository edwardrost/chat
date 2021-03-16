import React from 'react';

import Dialogs from '../../components/Dialogs';
// import { Route } from 'react-router-dom';

import './Home.scss';

const Home = () => (
    <section className="home">
        <Dialogs
            userId={0}
            items = {[
                {
                    _id: Math.random(),
                    text: 'We all need people who will give us feedback. That’s how we improve. We all need people who will give us feedback. That’s how we improve.',
                    // isRead: false,
                    created_at: "Sun May 11 2019",
                    user: {
                        _id: 1,
                        fullname: 'Bill Gates',
                        // isOnline: true,
                        avatar: 'https://sun1-92.userapi.com/s/v1/ig1/jWybR8qm5YVOOC49CY3PXiddZYGO5m8ayqqlV7S7NtydBBrul4ZmkxV5Dh0LmZvmDTIdFL1W.jpg?size=50x0&quality=96&crop=0,0,1100,1100&ava=1',
                    }
                }
            ]}
        />

        <Dialogs
            userId={1}
            items = {[
                {
                    _id: Math.random(),
                    text: 'Programming is a skill best acquired by practice and example rather than from books.',
                    // isRead: false,
                    created_at: "Sun May 15 2019",
                    user: {
                        _id: 1,
                        fullname: 'Alan Turing',
                        // isOnline: true,
                        avatar: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.seekpng.com%2Fpng%2Fdetail%2F75-757149_alan-turing-by-ryan-nagelhout.png&imgrefurl=https%3A%2F%2Fwww.seekpng.com%2Fipng%2Fu2q8r5u2y3e6y3t4_alan-turing-by-ryan-nagelhout%2F&tbnid=Q7ajRVR0qlsf3M&vet=12ahUKEwidvfy_lbXvAhVTtSoKHdRqB_4QMygGegUIARDHAQ..i&docid=XT19wfH7YBWwEM&w=820&h=723&q=alan%20turing%20free%20photo%20link&ved=2ahUKEwidvfy_lbXvAhVTtSoKHdRqB_4QMygGegUIARDHAQ',
                    }
                }
            ]}
        />
        
        
        {/* <Message
            avatar="https://sun1-92.userapi.com/s/v1/ig1/jWybR8qm5YVOOC49CY3PXiddZYGO5m8ayqqlV7S7NtydBBrul4ZmkxV5Dh0LmZvmDTIdFL1W.jpg?size=50x0&quality=96&crop=0,0,1100,1100&ava=1"
            text="Salam, Brut, how is your day? Salam, Brut, how is your day? Salam, Brut, how is your day? Salam, Brut, how is your day?"
            date="Fri Mar 12 2021 14:35:00"
            isMe={false}
            attachments={[
                {
                    filename: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
                },
                {
                    filename: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
                },
                {
                    filename: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/?random=3&nature,water'
                },
            ]}
        />

        <Message
            avatar="https://sun1-87.userapi.com/s/v1/if1/T6FofuoGgve5VdaUcsecPhB2-0cHWFA-8sKi8hZuve7WrZ9M4dwPDMCTX5iYO9Ljri9hWb-F.jpg?size=50x0&quality=96&crop=618,132,1551,1551&ava=1"
            text="Shalom, Bro, I'm fine. What about you? Shalom, Bro, I'm fine. What about you? Shalom, Bro, I'm fine. What about you?"
            date="Fri Mar 12 2021 14:36:00"
            isMe={true}
            isRead={true}

        />

        <Message
            avatar="https://sun1-87.userapi.com/s/v1/if1/T6FofuoGgve5VdaUcsecPhB2-0cHWFA-8sKi8hZuve7WrZ9M4dwPDMCTX5iYO9Ljri9hWb-F.jpg?size=50x0&quality=96&crop=618,132,1551,1551&ava=1"
            isTyping
        /> */}
    </section>
);

export default Home;
