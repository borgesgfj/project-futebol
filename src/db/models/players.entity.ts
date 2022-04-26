import { Model,  DataTypes  } from "https://deno.land/x/denodb@v1.0.40/mod.ts";

export class Players extends Model {
  static table = 'players';

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    name: DataTypes.STRING,
    position: DataTypes.STRING,
    number: DataTypes.STRING,
  }
}