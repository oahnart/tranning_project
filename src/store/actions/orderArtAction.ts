/**
 * @author Peter
 * @email [hoangvanlam9988@gmail.com]
 * @create date 2022-01-21 14:58:28
 * @modify date 2022-01-21 14:58:28
 * @desc [description]
 */

import types from "./types";

interface artOrderPayload {
  productId: number;
  unitBuy: number;
  pointUsing: number;
  getInvoice: boolean;
  invoiceType: string;
  invoiceInfo: string;
  bankChoice: string;
  bankSenderName: string;
  buyerAddress: string;
  buyerEmail: string;
  buyerPhone: string;
  buyerZipcode: string;
  receiverAddress: string;
  receiverPhone: string;
  receiverZipcode: string;
  note: string;
}

export const orderArtAction = (payload: artOrderPayload) => ({
  type: types.ART_ORDER,
  payload,
});
