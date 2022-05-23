import { dataBase } from '/home/gilbertob/workspace/estudos/projeto-futebol/projeto-crawler/postgres-connection/connector.ts';
import { Players } from '/home/gilbertob/workspace/estudos/projeto-futebol/projeto-crawler/src/db/models/players.entity.ts';


async function migrate() {
  console.log('initializing link');
  dataBase.link([Players]);
  console.log('sync db');
  
  await dataBase.sync({ drop: true });
  
  console.log('done');
  
  await dataBase.close();

  Deno.exit(0)
}

if(import.meta.main) {
  await migrate()
}