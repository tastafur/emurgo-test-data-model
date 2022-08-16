export function normalizeState(data: [], typeId = 'id') {
  const items = {};
  data.forEach(d => {
    items[d[typeId]] = d;
  });

  return items;
}

export const unNormalizeState = (data: any) =>
  Object.keys(data).map((id: string) => data[id]);
