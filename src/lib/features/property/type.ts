// The state slice for property management in Redux
export interface PropertyState {
  property: Property[];
  images?: string[];
  loading: boolean;
  error: string | null;
}

// The shape of a Property item (frontend model)
export interface Property {
  _id: string;
  title: string;
  description: string;
  price: number;
  currency?: string;
  images: ImageContent[];
  location: Coordinate;
  state: string;
  area_size: string;
  area_unit: string;
  year_built?: number;
  available_from: string; // ISO date string
  address: string;
  property_type: PropertyType;
  key_features?: string[];
  status: PropertyStatus;
  listed_by?: string;
  featured?: boolean;
  acreage: number;
  parcel_size: string;
  parcel_number:string;
  gps?: string;
  zip: string;
  current_zoning: string;
  conveyance: string;
  general_elevation: string;
  taxes: string;
  sewer: string;
  city: string;
  access: string;
  terrain: string;
  hoa_fee: string;
  water: string;
  phone: string;
  power: string;
  createdAt: string;
}

// Supporting types
export interface ImageContent {
  url: string;
  description?: string;
}

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export enum PropertyType {
  APARTMENT = "Apartment",
  HOUSE = "House",
}

export enum PropertyStatus {
  AVAILABLE = "available",
  PENDING = "pending",
  SOLD = "sold",
  // add others as needed
}

// The response from your backend when fetching property data
export interface PropertyResponse {
  count: string;
  data: Property[]; // for single fetch/create/update
  // optionally add status, errors etc
}

// The payload sent to create or update a property (usually no _id on create)
export interface IPropertyData {
  title: string;
  description: string;
  price: number;
  currency?: string;
  images: ImageContent[];
  location: Coordinate;
  state: string;
  area_size: number;
  area_unit: string;
  year_built?: number;
  available_from: string; // ISO date string
  address: string;
  property_type: PropertyType;
  key_features?: string[];
  status: PropertyStatus;
  listed_by?: string;
  featured?: boolean;
  acreage: number;
  parcel_size: number;
  parcel_number:string;
  gps?: number;
  zip: number;
  current_zoning: string;
  conveyance: string;
  general_elevation: string;
  taxes: number;
  sewer: string;
  city: string;
  access: string;
  terrain: string;
  hoa_fee: number;
  water: string;
  phone: string;
  power: string;
}
