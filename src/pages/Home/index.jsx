import React from 'react';
// import tinycolor from 'tinycolor';

import Dialogs from '../../components/Dialogs';
import Message from '../../components/Message';
// import { Route } from 'react-router-dom';
import { Input } from 'antd';
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';

import './Home.scss';

const { Search } = Input;
const onSearch = value => console.log(value);


const Home = () => (
    <section className="home">
        <div className="chat">
            <div className="chat__sidebar">
                <div className="chat__sidebar-header">
                    <TeamOutlined />
                    <span>Dialogs</span>
                    <FormOutlined />
                </div>
                <div className="chat__sidebar-search">
                    <Search placeholder="type the name" allowClear onSearch={onSearch} style={{ width: "100%" }} />
                </div>
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
                    />

                    <Dialogs
                        userId={1}
                        items={[
                            {
                                _id: Math.random(),
                                text: 'Programming is a skill best acquired by practice and example rather than from books.',
                                // isRead: false,
                                created_at: new Date(2021, 3, 17),
                                user: {
                                    _id: "c342cdb7d4ad65f3467f1ab056f1f9c6",
                                    fullname: 'Alan Turing',
                                    // isOnline: true,
                                    avatar: 'data:image/jpeg;base64,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'
                                }
                            }
                        ]}
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
                            <span className="status status--online">online</span>
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
                        isTyping
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Home;