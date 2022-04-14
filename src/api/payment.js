import { postRequest } from "../common/requests";

export function doPayment(criteria) {
  return postRequest("/payments", criteria);
}
