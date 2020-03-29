interface ISend {
  send: (object: any) => void;
  json: (object: Object) => void;
}

export interface IResponse extends ISend {
  status: (code: number) => ISend;
}
