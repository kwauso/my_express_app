"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const res_json = [
    { id: 1, name: "Taro" },
    { id: 2, name: "Hanako" },
    { id: 3, name: "Keio" }
];
app.get("/", (req, res) => {
    res.send({ id: 1, name: "taro" });
});
app.get("/api", (req, res) => {
    res.send(res_json);
});
app.listen(3000, () => {
    console.log('ポート3000番で起動しました。');
});
