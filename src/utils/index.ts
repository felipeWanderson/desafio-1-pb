import {DeliveryPoint} from "../types"

export const euclideanDistance = (a: DeliveryPoint, b: DeliveryPoint): number => {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt((dx**2) + (dy**2));
};

export const findNearestIndex = (
  current: DeliveryPoint,
  points: DeliveryPoint[]
): number => {
  let nearestIndex = 0;
  let nearestDistance = euclideanDistance(current, points[0]);

  points.forEach((point, index) => {
    const distance = euclideanDistance(current, point);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });

  return nearestIndex;
};

export const validatePoints = (validate: boolean, inputPoints: DeliveryPoint[]) => {
    if (validate) {
        if (!Array.isArray(inputPoints)) throw new Error("Entrada deve ser um array");
        if (inputPoints.length === 0) throw new Error("Nenhum ponto fornecido");
        inputPoints.forEach(p => {
            if (typeof p.id === "undefined" || typeof p.x !== "number" || typeof p.y !== "number") {
            throw new Error(`Ponto inválido: ${JSON.stringify(p)}`);
        }
    });
  }
}

