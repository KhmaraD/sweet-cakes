import * as axios from 'axios';

const token = "IGQVJYWTlBc3ZAtZAjkyQUswS0RURFBrd3R0T255QnZAlVzVmbkFDbWRfaE5FQ2dUbHZAxVkpmOEJ4ek9vekZAjQmtUaW15M0l1c2wwclR4M2ZARMEFLdGRxQ1NHRzU1ZAkZAIc2lKMWJ5ZA0lhUTJRQjN6cVNvWgZDZD";
const user_id = 106935262083230;
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
export const TestInsta = () => {
  const requestBody = {};

  return axios.get(`https://graph.instagram.com/${user_id}?fields=id,username&access_token=${token}`);
};