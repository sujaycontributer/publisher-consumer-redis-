import { createClient } from "redis";

// for consumer we reat the data from stream
async function startRedis() {
    const client = await createClient()  // redis default port 6379
        .on("error", (err) => console.log("Redis Client Error", err))
        .connect();

    // reading the websites from redis cosumer group
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
