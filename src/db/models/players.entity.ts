import { DataTypes, Model } from 'https://deno.land/x/denodb@v1.0.40/mod.ts';
import { dataBase } from '/home/gilbertob/workspace/estudos/projeto-futebol/projeto-crawler/postgres-connection/connector.ts';

export class Players extends Model {
	static table = 'players';

	static fields = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},

		name: DataTypes.STRING,
		position: DataTypes.STRING,
		number: DataTypes.STRING,
	};
}

dataBase.link([Players]);
