export type WebsocketResponse = {
    messageId: number;
}

export type TickerData = {
    symbol: string;
    time: number;
    price: number;
  };

export type TickerSubscription = {
    symbol: string;
    open: number;
    validTime: number;
    state: boolean;
    id: number;
}