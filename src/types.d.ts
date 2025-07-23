export type DeliveryPoint = {
  id: string | number;
  x: number;
  y: number;
};

export type RouteResult = {
  order: (string | number)[];
  totalDistance: number;
};