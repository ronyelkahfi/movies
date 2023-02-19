import { DataTypes, Model } from "sequelize";
export class MoviesEntity {
  private column = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
  };

  private name = "Movies";

  getColumn(): any {
    return this.column;
  }
  getName(): string {
    return this.name;
  }
}
