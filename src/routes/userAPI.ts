import express from 'express';
const router = express.Router();

const json_1 = [{id:1, name:"taro"}, {id:2, name:2}]
const json_2 = [{number:123}, {number:456}]

router.get("/", (req:express.Request, res:express.Response)=>{
    res.send("This API page. Here is API index below.");
});

router.get("/api1", (req:express.Request, res:express.Response)=>{
    res.json(json_1);
});

router.get("/api2", (req:express.Request, res:express.Response)=>{
    res.json(json_2);
});

export default router