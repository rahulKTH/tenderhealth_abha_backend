import Complaints from "./complaint.js"
import Drug from  "./drugs.js"
import Diagnosis from "./diagnosis.js"
import Test from "./test.js"
import Emr from "./emr.js"
import mongoose from "mongoose"

mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.Complaints = Complaints;
db.Drug = Drug;
db.Diagnosis = Diagnosis;
db.Test= Test;
db.Emr = Emr;

export default db