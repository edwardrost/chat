// import React, {useState} from 'react';
// import Dialogs from '../components/Dialogs';

// const BaseDialogs = ({items, userId, onSearch}) => {
//     const [value, setValue] = useState('');
//     let filtered = Array.from(items);

//     const onChangeInput = e => {
//         // const value = e.target.value;
//         filtered = filtered.filter(dialogs => dialogs.user.fullname.indexOf(e.target.value) >= 0 );
//         setValue(e.target.value);
//     };

//     return  <Dialogs
//                 userId={userId}
//                 items={filtered}
//                 onSearch={onChangeInput}
//                 // inputValue={searchValue}
//             />
// };

// export default BaseDialogs;
