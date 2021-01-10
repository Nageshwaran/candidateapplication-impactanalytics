import { SHORTLIST,REJECTED,REMOVEFROMSHORTLIST,REMOVEFROMREJECTED } from "./Constant";

export function shortlist(payload) {
  return { type: SHORTLIST, payload };
}

export function removeshortlist(payload) {
  return { type: REMOVEFROMSHORTLIST, payload };
}

export function removerejected(payload) {
  return { type: REMOVEFROMREJECTED, payload };
}

export function rejected(payload) {
  return { type: REJECTED, payload };
}