import { Sequelize } from "sequelize";
export class DatabaseService {
  private readonly dbhost = "localhost";
  private readonly dbname = "movies_db";
  private readonly dbusername = "postgres";
  private readonly dbpassword = "postgres";
  private readonly dbport = "6543";
  private readonly dbdialect = "postgres";
  constructor() {
    const db = new Sequelize(this.dbname, this.dbusername, this.dbpassword, {
      host: `${this.dbhost}:${this.dbport}`,
      dialect: this.dbdialect,
    });
    try {
      db.authenticate();
      console.log("Success: Connect db");
    } catch (error) {
      console.log("Unable to connect database: ", error);
    }
  }
}
