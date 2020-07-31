export type StockTuple = [string, number];
export enum StockStatus {
  NEUTRAL = "neutral",
  UP = "up",
  DOWN = "down",
}
export type UpdatedStockTuple = [string, number, Date, StockStatus];
