import { createClient } from "redis";

async function startRedis() {
    const client = await createClient()
        .on("error", (err) => console.log("Redis Client Error", err))
        .connect();

    const res = await client.xAdd('betteruptime:website', '*', {
        url: "https://perplexity.com",
        id: "1"
    });
    console.log(res);
    client.destroy();
}

startRedis();