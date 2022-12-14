export interface IDatabase {
    connectionLimit?: number;
    host: string;
    user: string;
    password: string;
    database: string;
    port: number;
    dummy?: boolean;
}
