export interface QuakeDetails {
  mag: number;
  place: string;
  time: Date;
  updated: Date;
  url: string;
  detail: string;
  felt: number;
  cdi: number;
  mmi: number;
  alert: string;
  status: string;
  tsunami: number;
  sig: number;
  net: string;
  code: string;
  ids: string;
  sources: string;
  types: string;
  nst: number;
  dmin: number;
  rms: number;
  gap: number;
  magType: string;
  type: string;
  title: string;
}

export interface QuakeCoordinates {

  type: string;
  coordinates: number[];
  id: string;
}

export interface Quake {
  type: string;
  properties: QuakeDetails;
  geometry: QuakeCoordinates;
}

export interface Quakes {
  features: Quake[];
}
