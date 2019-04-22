var Frontcms = require('../models/frontcms');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.frontcms_create = function (req, res) {
    res.send('d');
};

exports.frontcms_details = function (req, res) {
    Frontcms.findById(req.params.id, function (err, frontcms) {
        if (err) return next(err);
        res.send(frontcms);
    })
};


exports.frontcms_alls = function (req, res) {
    Frontcms.find({}).then((frontcms) => {
        console.log(frontcms);
         res.status(200).send(frontcms);
     }).catch((err) => {
         res.status(404).send();
    });

};
exports.frontcms_setalls = function (req, res) {
    var frontcms = new Frontcms(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    frontcms.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Frontcms Created successfully');
    })

};

exports.frontcms_update = function (req, res,next) {

    console.log("dddddddddddddddd"+req.body.content);
    console.log("dddddddddddddddd"+req.params.id);
    Frontcms.findByIdAndUpdate(req.params.id, {$set: {title:req.body.content.title,content:req.body.content.content}}, function (err, frontcms) {
        if (err) return next(err);
        res.send('Frontcms udpated.');
    });
};

exports.frontcms_delete = function (req, res) {
    Frontcms.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};