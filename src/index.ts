import {DeliveryPoint, RouteResult} from "./types"
import { euclideanDistance, findNearestIndex, validatePoints } from "./utils";

export const nearestNeighbor = (
  inputPoints: DeliveryPoint[],
  validate = false
): RouteResult => {
  validatePoints(validate, inputPoints);

  const points = [...inputPoints];

  const startIndex = Math.floor(Math.random() * points.length);
  const startPoint = points[startIndex];

  let unvisited = points.filter((_, index) => index !== startIndex);
  const route: DeliveryPoint[] = [startPoint];
  
  let current = startPoint;
  let totalDistance = 0;

  while (unvisited.length > 0) {
    const nextIndex = findNearestIndex(current, unvisited);
    const nextPoint = unvisited[nextIndex];
    
    totalDistance += euclideanDistance(current, nextPoint);
    
    route.push(nextPoint);
    current = nextPoint;

    unvisited = unvisited.filter((_, index) => index !== nextIndex);
  }

  totalDistance += euclideanDistance(current, startPoint);
  route.push(startPoint);

  return {
    order: route.map(p => p.id),
    totalDistance
  };
};

const points: DeliveryPoint[]  = [
    {id: 1, x: 0, y: 0},
    {id: 2, x: 10, y: 5},
    {id: 3, x: 5, y: 12},
    {id: 4, x: 8, y: 3},
    {id: 5, x: 2, y: 8},
];

const {order, totalDistance} = nearestNeighbor(points)

console.log({ordemRota: order, distanciaTotal: totalDistance.toFixed(2)});