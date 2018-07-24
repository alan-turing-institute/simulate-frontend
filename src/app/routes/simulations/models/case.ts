export interface Case {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  links: object;
  value: string;
}

export function generateMockCase(): Case {
  return {
    id: '1',
    name: 'Case name',
    description: 'Case description',
    thumbnail: 'https://simulate.blob.core.windows.net/openfoam-thumbnails/damBreak.png',
    links: {'self': '/case/1'},
    value: 'Case value'
  };
}
