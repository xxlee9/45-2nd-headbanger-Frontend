import { atom } from 'recoil';

export const payState = atom({
  key: 'payState',
  default: {
    startDate: '',
    endDate: '',
    campingZoneId: [],
    totalMembers: 0,
    totalPrice: 0,
    tid: '',
    pgToken: '',
  },
});
