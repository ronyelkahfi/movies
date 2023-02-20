import { Sequelize } from "sequelize";
import { MoviesEntity } from "./entities/movies.entity";
export class DatabaseService {
  private readonly dbhost = "localhost";
  private readonly dbname = "movies_db";
  private readonly dbusername = "postgres";
  private readonly dbpassword = "root";
  private readonly dbport = 5433;
  private readonly dbdialect = "postgres";
  private readonly connection: any;
  constructor() {
    this.connection = new Sequelize(this.dbname, this.dbusername, this.dbpassword, {
      host: this.dbhost,
      dialect: this.dbdialect,
      port: this.dbport,
    });
  }
  getConnection(): any {
    return this.connection;
  }
  async checkconnection(): Promise<any> {
    try {
      const connection = await this.connection.authenticate();
      console.log("Success: Connect db");
      return connection;
    } catch (error) {
      console.log("Unable to connect database: ", error);
    }
  }
  initTables() {
    const moviesEntity = new MoviesEntity();
    this.connection.define(moviesEntity.getName(), moviesEntity.getColumn());
    // synch one table
    // const moviesTable = this.connection.define(moviesEntity.getName(), moviesEntity.getColumn());
    // moviesTable.sync({ force: true });
    this.connection.sync();
  }
}
