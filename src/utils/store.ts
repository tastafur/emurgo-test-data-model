export const normalizeState = (data: any[], typeId = 'id') =>
  data.reduce((acc, curr) => {
    acc[curr[typeId]] = curr;
    return acc;
  }, {});

export const unNormalizeState = (data: any) =>
  Object.keys(data).map((id: string) => data[id]);
