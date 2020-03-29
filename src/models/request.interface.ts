export interface IRequest {
  body: any;
  headers: IHeaders;
  params: any;
  query: any;
}

interface IHeaders {
  readonly [key: string]: string;
}
