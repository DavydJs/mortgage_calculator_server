const Bank = require('../model/Bank');

// http://localhost:3012/api/bank/create

module.exports.create = async ( req, res) =>{
 try {
     const bank = await new Bank({
            _id:req.body.maxId,
            banksData :req.body.banksData,
            isEmpty:req.body.isEmpty,
            editItem:req.body.editItem,
            index:req.body.index,
            toggleScreen:req.body.toggleScreen,
            listPrepareBanks:req.body.listPrepareBanks,
            renderTable:req.body.renderTable,
            historyBanks:req.body.historyBanks,
     });
     await bank.save();
     console.log('Bank created');
     res.sendStatus(201);

} catch (e) {
    res.sendStatus(500).json({message: "Что-то пошло не так, попробуйте снова "});
}
   
};
module.exports.receive = async ( req, res) =>{
 try {
     const bank = await Bank.findOne({id:1});
     res.send({"a":"b"});
     console.log('Bank received',bank);
     res.sendStatus(200);

} catch (e) {
    res.sendStatus(500).json({message: "Что-то пошло не так, попробуйте снова "});
}
   
};

module.exports.update = async ( req, res) =>{
 try { res.status(201).json({bank: true});

} catch (e) {
    res.sendStatus(500).json({message: "Что-то пошло не так, попробуйте снова "});
}
   
};

module.exports.addCalculation = async ( req, res) =>{
 try { res.status(201).json({bank: true});

} catch (e) {
    res.sendStatus(500).json({message: "Что-то пошло не так, попробуйте снова "});
}
   
};

module.exports.show = async ( req, res) =>{
 try { res.status(201).json({bank: true});

} catch (e) {
    res.sendStatus(500).json({message: "Что-то пошло не так, попробуйте снова "});
}
   
};

module.exports.remove = async ( req, res) =>{
 try { res.status(201).json({bank: true});

} catch (e) {
    res.sendStatus(500).json({message: "Что-то пошло не так, попробуйте снова "});
}
   
};
