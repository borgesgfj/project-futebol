import { dataBase } from '/home/gilbertob/workspace/estudos/projeto-futebol/projeto-crawler/postgres-connection/connector.ts';
import { Players } from '/home/gilbertob/workspace/estudos/projeto-futebol/projeto-crawler/src/db/models/players.entity.ts'

dataBase.link([Players]);

dataBase.sync();