import _ from "lodash";
import config from "./config";
import { RESPONSE_STATUS } from "./constants";

function stringifyParams(params) {
  const keys = Object.keys(params);
  if (keys.length === 0) {
    return "";
  }

  const q = keys.reduce((acc, key) => {
    if (params[key]) {
      if (_.isArray(params[key]) || _.isSet(params[key])) {
        const params2 = Array.from(params[key]);
        const q2 = params2.reduce((acc2, pValue) => {
          if (pValue) acc2 += `&${key}=${pValue}`;
          return acc2;
        }, "");
        if (q2) acc += q2;
      } else {
        acc += `&${key}=${params[key]}`;
      }
    }
    return acc;
  }, "");

  return q.substring(1);
}

export function getRequest(urlPath, params = {}) {
  const queryString = stringifyParams(params);
  return new Promise((resolve, reject) => {
    fetch(`${config.baseApiUrl}${config.apiVersion}${urlPath}?${queryString}`, {
      method: "GET",
    })
      .then((res) => {
        resolve(res.json());
      })
      .catch((e) => {
        resolve({ status: RESPONSE_STATUS.FAILED, message: e.message });
      });
  });
}



export function postRequest(urlPath, data) {
  return new Promise((resolve, reject) => {
      fetch(`${config.baseApiUrl}${config.apiVersion}${urlPath}`, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
          .then(res => {
              resolve(res.json())
          })
          .catch(e => {
              resolve({status: RESPONSE_STATUS.FAILED, message: e.message})
          })
  })
}