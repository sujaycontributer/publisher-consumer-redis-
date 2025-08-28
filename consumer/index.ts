import { createClient } from "redis";

async function startRedis() {
    const client = await createClient()  // redis default port 6379
        .on("error", (err) => console.log("Redis Client Error", err))
        .connect();

    const res:any = await client.xReadGroup('india','india-1', {
        key: 'betteruptime:website',
        id: '>'
    }, {
        COUNT: 2
    });
    console.log(res[0].messages);
    client.destroy();
}

startRedis();