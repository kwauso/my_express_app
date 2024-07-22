import express from 'express';
const app: express.Express = express();

const res_json = [
    {id: 1, name: "Taro"},
    {id: 2, name: "Hanako"},
    {id: 3, name: "Keio"}
]

app.get("/", (req:express.Request, res:express.Response)=>{
    res.send("こんにちは");
});

app.get("/api",(req:express.Request, res:express.Response)=>{
    res.send(res_json);
});

app.listen(3000,()=>{
    console.log('ポート3000番で起動しました。')
});
