export interface Drug {
  id?: number;
  name: string;
  brand: string;
  status: "ACTIVE" | "DISABLED";
  createdAt?: Date;
}

export interface Page<T> {
  "totalElements": number,
  "totalPages": number,
  "pageNumber": number,
  "pageSize": number,
  "content": T[];
}