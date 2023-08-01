"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const book_1 = require("../controllers/book");
const router = express_1.default.Router();
/* GET users listing. */
router.get('/', book_1.myController);
router.post('/', user_1.signup);
exports.default = router;
