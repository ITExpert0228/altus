/*
	mongoDB Schema for altusdb
*/
const mongoose = require ('mongoose');
var Schema=mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var AltusdbSchema = new Schema({
    title: {
       type: String,
       unique: true,
	   required: true 
    },
    profileimage: {
        type: String,
        required: true,
        
    },
    reasontobook: {
        type: String,
        required: true,
        
    },
    profileurl: {
        type: String,
        required: true,
        
    },
    tag: {
        type: Array,
        default: []
     },
    eventstype: {
        type: Array,
        default: []
     },
     reason: {
        type: Array,
        default: []
     },
     location: {
        type: String,
        required: true,
       
    },
     vediosrc: {
        type: Array,
        default: []
     },
     images: {
        type: Array,
        default: []
     },
     Biography: {
        type: String,
        required: true,
   
    },
    PreviousClients: {
        type: String,
        required: true,
        
    },
    Testimonials: {
        type: String,
        required: true,
     
    },
    SetList: {
        type: String,
        required: true,
        
    }
});
AltusdbSchema.set("toJSON", {virtuals: true});
AltusdbSchema.set("toObject", {virtuals: true});
// Export the model
module.exports = mongoose.model('Altusdb', AltusdbSchema);

/*
 	Default diseases in the system
		-> those will be added as soon as the system is live
		-> if they are deleted from the system, and the system restarts, then they will be added again in the system
*/

//var scoreOfDisease = {}; // empty map



module.exports.getShowCate = function(catename,  callback) {
    Altusdb.find({
		tag: catename
	}, callback);
};
