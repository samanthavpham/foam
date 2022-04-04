use foam
db.runs.updateMany({}, {"$set": {"foam": null}}, upsert=false)
exit
