import React from 'react';
// import { Input } from 'antd';
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';

import Dialogs from '../../components/Dialogs';
import Message from '../../components/Message';
import OnlineStatus from '../../components/OnlineStatus';
import ChatInput from '../../components/ChatInput';


import './Home.scss';


// const { Search } = Input;

// let filteredItems = items;

const onSearch = e => {};
//         filteredItems = filteredItems.filter(dialogs => dialogs.user.fullname.indexOf(e.target.value) >= 0 );
//         setValue(e.target.value);
// };

const Home = () => (
    <section className="home">
        <div className="chat">
            <div className="chat__sidebar">
                <div className="chat__sidebar-header">
                    <TeamOutlined />
                    <span>Dialogs</span>
                    <FormOutlined />
                </div>
                {/* <div className="chat__sidebar-search">
                    <Search placeholder="type the name" allowClear onSearch={onSearch} style={{ width: "100%" }} />
                </div> */}
                <div className="chat__sidebar-dialogs">
                    <Dialogs
                        userId={0}
                        items={[
                            {
                                "_id": "605231e8267c0826d866f49f",
                                "text": "Sunt consectetur velit aliqua commodo. Do fugiat reprehenderit elit et ex amet. Nostrud do adipisicing eiusmod exercitation dolore enim laborum cupidatat amet elit sit duis deserunt mollit.",
                                "created_at": "Thu Dec 30 1976 19:27:23 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e86c6fec7db4622ce8",
                                    "fullname": "Minerva Best",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e845ea38e7c8bfd6a5",
                                "text": "Eiusmod esse tempor adipisicing eu cillum et. Proident ullamco dolor ea laboris. Amet qui labore labore duis.",
                                "created_at": "Thu Jul 26 1979 23:34:53 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e83ae71e3ea738f5ba",
                                    "fullname": "Ross Sherman",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e89eaa3f7c643aa347",
                                "text": "Voluptate pariatur officia non cupidatat incididunt sint sunt exercitation ut. Reprehenderit pariatur in culpa veniam sunt aliquip mollit excepteur ad dolore. In ex commodo id elit ad ullamco consectetur culpa culpa esse.",
                                "created_at": "Mon Mar 17 2008 16:17:59 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e8bf2aa9bee9b097c4",
                                    "fullname": "Lindsey Levy",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e89913b2cdc8dbffc6",
                                "text": "Elit officia est ipsum laboris sint tempor ea labore exercitation. Id consectetur consectetur occaecat reprehenderit ex minim irure. Reprehenderit laboris reprehenderit proident ad ex consequat qui.",
                                "created_at": "Mon Nov 15 2010 03:16:14 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e84d449454468f4aa9",
                                    "fullname": "Vang Guthrie",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e8f1b59f7b292d4321",
                                "text": "Deserunt et aliquip est adipisicing aliqua tempor consectetur laborum. Cupidatat qui do et cillum voluptate tempor elit minim. Cupidatat consectetur et irure adipisicing laborum esse veniam.",
                                "created_at": "Mon Dec 02 1996 15:26:37 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e84cd2da215305f6d0",
                                    "fullname": "Ida Martinez",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e8a03e3150f38c40bb",
                                "text": "Proident duis fugiat commodo ullamco culpa amet ea sint nulla labore cupidatat ea. Minim voluptate sunt Lorem ut aute. Ea ipsum sit fugiat Lorem quis.",
                                "created_at": "Tue Mar 10 2009 07:49:52 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e86173a7d546f9a596",
                                    "fullname": "Geraldine Price",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e84c203816388ccec3",
                                "text": "Mollit do incididunt id aute fugiat irure. Duis culpa veniam qui ullamco officia commodo culpa labore fugiat culpa enim laboris. Reprehenderit magna tempor aute ex aliquip exercitation ut ipsum sunt do reprehenderit mollit ullamco.",
                                "created_at": "Wed Feb 27 1974 20:17:23 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e83f50a000f4d24043",
                                    "fullname": "Rosemary Lee",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e8bc0b0fb958b59806",
                                "text": "Esse veniam ullamco amet eu adipisicing dolore mollit exercitation minim qui dolor cillum. Eu commodo excepteur proident duis et sunt eu veniam occaecat. Deserunt tempor cillum consectetur aute reprehenderit non elit minim consequat ex.",
                                "created_at": "Wed Oct 18 2017 11:14:52 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e803a9172575d12d78",
                                    "fullname": "Isabella Chan",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e8053dc0b5684efc9e",
                                "text": "Magna mollit dolor consectetur esse esse mollit tempor dolore reprehenderit nulla labore esse sint. Esse sunt eu cupidatat voluptate duis consectetur amet dolor ullamco cupidatat proident adipisicing. Qui nostrud velit labore fugiat dolor eiusmod reprehenderit sit consequat nulla minim.",
                                "created_at": "Thu Mar 07 1985 04:30:00 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e8d20a49c70aad98b2",
                                    "fullname": "Tammie Pugh",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e8e0d9edc602d0ad85",
                                "text": "Do cupidatat sit mollit quis eu occaecat exercitation Lorem do. Do sint proident sit labore eiusmod culpa adipisicing. Quis nulla excepteur sint id incididunt aliquip eu deserunt ullamco.",
                                "created_at": "Sun Jan 09 2005 18:33:17 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e8d333ecf6ab616d98",
                                    "fullname": "Gale Blankenship",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e827cf08aec3a0859f",
                                "text": "Irure laboris nostrud consequat aute magna qui pariatur. Ea cupidatat ad mollit labore et voluptate aliquip irure occaecat deserunt. Velit incididunt incididunt ullamco qui est elit pariatur ad eiusmod sit consectetur adipisicing nostrud aliquip.",
                                "created_at": "Mon Jan 09 2017 17:45:21 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e85edffeddd092da13",
                                    "fullname": "Cathy Rojas",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e8dece07d1aa9500d4",
                                "text": "Reprehenderit est duis occaecat do aliqua deserunt do. Dolore esse sint aute reprehenderit irure excepteur id voluptate. Laborum dolor enim adipisicing magna exercitation excepteur.",
                                "created_at": "Tue Sep 29 2020 08:53:20 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e81dc68e42d93c76f9",
                                    "fullname": "Shannon Jarvis",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e8c4e7eed0904d70dc",
                                "text": "Fugiat quis esse proident ad aliqua sit eu consequat ea eu. Dolore voluptate do ut adipisicing eiusmod eu consequat pariatur aliquip eiusmod reprehenderit voluptate. Nisi laborum incididunt quis exercitation quis ullamco magna.",
                                "created_at": "Mon Jan 26 1987 09:06:34 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e80a5a3e24544b9144",
                                    "fullname": "Gomez Alvarez",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e867fb1c0cae63c075",
                                "text": "Est nisi nulla sint fugiat qui commodo duis do. Sunt consectetur sint duis non quis ex tempor Lorem ut id est eu duis. Elit ipsum ad incididunt minim aute pariatur occaecat in officia consectetur reprehenderit aliqua incididunt quis.",
                                "created_at": "Fri Jun 24 1994 15:21:38 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "605231e87a32f6faf51f0ff7",
                                    "fullname": "Wheeler Thornton",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e8b6702bdd304d9c59",
                                "text": "Ut duis deserunt est et cillum consectetur cupidatat labore deserunt occaecat cillum Lorem commodo. Dolor sunt enim non nulla tempor aliquip nisi occaecat do. Proident magna voluptate minim nisi.",
                                "created_at": "Sun Jul 11 1999 21:36:57 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "605231e89b3a38cd9213b32d",
                                    "fullname": "Battle Finley",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e89d9278ceac955d57",
                                "text": "Quis adipisicing id dolore nostrud aliquip pariatur labore consectetur. Aute pariatur elit irure ullamco ut do adipisicing qui qui in veniam pariatur dolor. Quis labore ullamco magna ullamco enim esse amet et aliquip sint esse.",
                                "created_at": "Sat Jun 21 1986 19:14:20 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "605231e8a962d9760af41531",
                                    "fullname": "Cristina Hardy",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e87954842c945d3b30",
                                "text": "Excepteur tempor excepteur culpa sunt. Anim laboris nostrud ex ex nisi. Officia nostrud ut pariatur voluptate minim excepteur dolore sit velit sunt aliqua elit tempor adipisicing.",
                                "created_at": "Fri Dec 23 1994 14:11:53 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e847dc3c650e988870",
                                    "fullname": "Ofelia Decker",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e8770890e9ea04061b",
                                "text": "Sunt cupidatat mollit qui officia commodo sint ullamco et dolore officia Lorem in. Mollit adipisicing elit proident adipisicing magna id Lorem ad sunt officia amet voluptate. Adipisicing esse nisi incididunt enim do in irure officia ad aliquip tempor ex ut veniam.",
                                "created_at": "Sun Jan 11 2004 19:38:42 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e812461e89e8ef9b34",
                                    "fullname": "Mack Pierce",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e88b3ab71f41e12880",
                                "text": "Tempor culpa ad labore cupidatat excepteur consequat. Exercitation ipsum ut sunt minim Lorem do esse ea id ut. Minim do sunt irure elit.",
                                "created_at": "Wed Aug 16 1989 04:15:32 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "605231e83a0354ef1825c0ea",
                                    "fullname": "Kathie Holt",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "605231e89efb0fc3932afa9c",
                                "text": "Fugiat elit ipsum aliquip exercitation. In et ex non veniam anim nulla consectetur irure. Laboris sint ullamco sit dolore ut quis incididunt labore proident nisi qui officia cillum.",
                                "created_at": "Mon Feb 08 1993 13:29:56 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "605231e8f33b7b2bf0cca641",
                                    "fullname": "Tania Mejia",
                                    "avatar": null
                                }
                            }
                        ]}
                        onSearch={onSearch}
                   />                    
                </div>
            </div>
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <div></div>
                    <div className="chat__dialog-header-center">
                        <b className="chat__dialog-header-username">
                            Cesar
                        </b>
                        <div className="chat__dialog-header-status">
                            <OnlineStatus online={true} />
                            {/* <span className="status status--online">online</span> */}
                        </div>
                    </div>
                    <EllipsisOutlined style={{ fontSize: '20px' }} />
                </div>
                <div className="chat__dialog-messages">
                    <Message
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
                        text="Shalom, Bro, I'm fine. What about you? Shalom, Bro, I'm fine. What about you? Shalom, Bro, I'm fine. What about you?"
                        date="Fri Mar 12 2021 14:36:00"
                        isMe={false}
                        isRead={true}
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
                        text="Shalom, Bro, I'm fine. What about you? Shalom, Bro, I'm fine. What about you? Shalom, Bro, I'm fine. What about you?"
                        date="Fri Mar 12 2021 14:36:00"
                        isMe={false}
                        isRead={true}
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
                        text="Shalom, Bro, I'm fine. What about you? Shalom, Bro, I'm fine. What about you? Shalom, Bro, I'm fine. What about you?"
                        date="Fri Mar 12 2021 14:36:00"
                        isMe={true}
                        isRead={true}
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
                    />
                </div>

                <div className="chat__dialog-input">
                   <ChatInput />
                </div>

            </div>
        </div>
    </section>
);

export default Home;