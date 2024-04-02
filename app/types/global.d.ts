export {}

declare global {
  type ReqParams = {
    params: {
      [param: string]: string;
    }
  }
}