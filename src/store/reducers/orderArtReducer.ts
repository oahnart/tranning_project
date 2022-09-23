/**
 * @author Peter
 * @email [hoangvanlam9988@gmail.com]
 * @create date 2022-02-14 17:23:36
 * @modify date 2022-02-14 17:23:36
 * @desc [description]
 */

import types from "../actions/types";

const defaultState = {
  productId: null,
  unitBuy: null,
  pointUsing: null,
  getInvoice: false,
  invoiceType: "",
  invoiceInfo: "",
  bankChoice: "",
  bankSenderName: "",
  buyerAddress: "",
  buyerEmail: "",
  buyerPhone: "",
  buyerZipcode: "",
  receiverAddress: "",
  receiverPhone: "",
  receiverZipcode: "",
  note: "",
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case types.ART_ORDER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
