import * as axios from 'axios';

const user_id = process.env.REACT_APP_INSTA_USER_ID;
const token = process.env.REACT_APP_INSTA_TOKEN;

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
//     getLinks(setLinks) {
//         return instance.get(`links`)
//             .then(response => {
//                 return setLinks(response.data);
//             })
//     },
//     getPriceItems(setPriceItems) {
//         return instance.get(`priceItem`)
//             .then(response => {
//                 return setPriceItems(response.data);
//             })
//     },
// }

export const requestInstaMe = () => {
  //запит за user_id
  const requestBody = {};

  return axios.get(`https://graph.instagram.com/me?fields=id,username&access_token=${token}`);
};

export const TestInsta = () => {
  const requestBody = {};

  return axios.get(`https://graph.instagram.com/${user_id}?fields=id,username&access_token=${token}`);
};

export const TestPhoto = () => {
  const requestBody = {};
  const dataFields = "id,media_type,media_url";
  return axios.get(`https://graph.instagram.com/me/media?fields=${dataFields}&access_token=${token}`);
};
