console.log("Hello world");
import { DatabaseService } from "./database/database.service";

const db = new DatabaseService();
db.checkconnection();
db.initTables();
