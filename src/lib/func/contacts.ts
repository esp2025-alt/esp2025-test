
export function split(str:string):string {
    return str.match(/.{1,3}/g)?.join(" ") ?? "";
}