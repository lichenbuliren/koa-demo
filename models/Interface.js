var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InterfaceSchema = new Schema({
    _id: String,
    name:String,
    project_id:String,
    url:String,
    parmas:Array,
    // 返回结果
    // 返回状态码
});