
const param = { limit: 10, page: 2 };


const formatParam = (param) => {
    if (!param) return "";
    const objKeys = Object.keys(param);// =>["limit","page"]

    const strParam = objKeys?.reduce((str, item) => {
        return str += `${!str ? "?" : "&"}${item}=${param[item]}`
    }, "");

    return strParam
}// => 

export class GuestService {
    static async getListGuest(param) {
        const resp = await fetch(`https://ngochieuwedding.io.vn/api/guest${formatParam(param)}`, {
            method: "GET"
        })
        const json = await resp.json();
        return json;
    }
}