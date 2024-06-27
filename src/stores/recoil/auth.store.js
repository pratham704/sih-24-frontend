import { atom } from 'recoil';

const centralAuth = atom({
    key: 'storedData',
    default: null, // Initial value can be anything
});

export default centralAuth;