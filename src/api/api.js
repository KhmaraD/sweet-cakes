// import * as axios from 'axios';
//
// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'http://localhost:3004/',
// })
//
// export const priceAPI = {
//     getLanguage(setLanguage) {
//         return instance.get(`language`)
//             .then(response => {
//                 return setLanguage(response.data[0]);
//             })
//     },
    // getLinks(setLinks) {
    //     return instance.get(`links`)
    //         .then(response => {
    //             return setLinks(response.data);
    //         })
    // },
//     getPriceItems(setPriceItems) {
//         return instance.get(`priceItem`)
//             .then(response => {
//                 return setPriceItems(response.data);
//             })
//     },
// }