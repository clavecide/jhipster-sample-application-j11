import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '0ca84891-62d3-4fa4-9dae-2f63307755ab',
};

export const sampleWithPartialData: IAuthority = {
  name: 'd535abcd-006c-4f26-a6c7-41d9dcf40ce9',
};

export const sampleWithFullData: IAuthority = {
  name: '23774cc6-e79d-4914-a0b1-9f04294a1c8d',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
