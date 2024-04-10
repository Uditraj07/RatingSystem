const Company=require('../Model/company')

exports.addRating=(req,res)=>{
    Company.create(req.body).then((result)=>{
        res.json(result)
    })
}
exports.getAllRatings=(req,res)=>{
    Company.findAll({
        where: { companyName: req.query.companyName },
      }).then(users => {
        res.json(users);
  })
  .catch(err => {
    console.error('Error fetching users:', err);
  });
}

