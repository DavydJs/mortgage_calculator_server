const {Schema,model} = require('mongoose');
const schema = new Schema({
	_id: Number,
	banksData :[],
	isEmpty:Boolean,
	editItem:Boolean,
	index:Number,
	toggleScreen:Number,
	listPrepareBanks: [],
	renderTable: [],
	historyBanks: []

});
module.exports = model('banks',schema);