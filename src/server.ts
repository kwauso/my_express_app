import express from 'express';
import api from './routes/userAPI';
const app: express.Express = express();

app.use(express.static('/home/akira/my_express_app/public'));
app.use('/api', api);

app.get("/", (req:express.Request, res:express.Response)=>{
    res.send();
});

app.listen(3000,()=>{
    console.log('ポート3000番で起動しました。')
});
