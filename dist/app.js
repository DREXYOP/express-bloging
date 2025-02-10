"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogs_route_1 = __importDefault(require("./routes/blogs.route"));
const app = (0, express_1.default)();
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/blogs', blogs_route_1.default);
//# sourceMappingURL=app.js.map