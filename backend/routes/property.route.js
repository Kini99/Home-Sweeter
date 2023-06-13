const express=require("express");
const { PropertyModel } = require("../models/property.model");

const propertyRouter= express.Router();

propertyRouter.post("/add", async (req, res) => {
    try {
        const property = new PropertyModel(req.body);
        await property.save();
        res.status(200).json({ msg: "New Property Added", property: req.body })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

propertyRouter.get("/", async(req,res)=>{
    const max=10;
    const pageNo=Number(req.query.page)||1;
    const search = req.query.search || '';
    const sort = req.query.sort || '';
    const status = req.query.status || '';
    const furnishing = req.query.furnishing || '';
    const ownership = req.query.ownership || '';

    try {
      let query = {
        $or: [
          { update: { $regex: search, $options: 'i' } },
          { owner: { $regex: search, $options: 'i' } },
          { type: { $regex: search, $options: 'i' } },
          { details: { $regex: search, $options: 'i' } },
          { building: { $regex: search, $options: 'i' } },
          { status: { $regex: search, $options: 'i' } },
          { transaction: { $regex: search, $options: 'i' } },
          { furnishing: { $regex: search, $options: 'i' } },
          { facing: { $regex: search, $options: 'i' } },
          { overlooking: { $regex: search, $options: 'i' } },
          { ownership: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { tag: { $regex: search, $options: 'i' } }
        ]
      };
  
      if (status) {
        query.status = status;
      }
      if (furnishing) {
        query.furnishing = furnishing;
      }
      if (ownership) {
        query.ownership = ownership;
      }
  
      let properties = await PropertyModel.find(query)
        .limit(max)
        .skip((pageNo-1)*max);

        if (sort) {
            properties = properties.sort((a, b) => {
              if (sort === 'High%to%Low') {
                return a.total_price_num - b.total_price_num;
              }else if(sort === 'Low%to%High') {
                return b.total_price_num - a.total_price_num;
              }else if(sort === 'Large%to%Small') {
                return a.carpet - b.carpet;
              }else if(sort === 'Small%to%Large') {
                return b.carpet - a.carpet;
              }else {
                return 0;
              }
            });
          }

        res.status(200).send(properties)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

propertyRouter.get("/:propertyId", async(req,res)=>{
    const { propertyId } = req.params;
    try {
        const property= await PropertyModel.findOne({ _id: propertyId });
        res.status(200).send(property)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

propertyRouter.patch("/update/:propertyId", async (req, res) => {
    const { propertyId } = req.params;
    try {
        await PropertyModel.findByIdAndUpdate({ _id: propertyId }, req.body);
        res.status(200).json({ msg: "Property has been updated", updates: req.body })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

propertyRouter.delete("/delete/:propertyId", async (req, res) => {
    const { propertyId } = req.params;
    try {
        await PropertyModel.findByIdAndDelete({ _id: propertyId });
        res.status(200).json({ msg: "Property has been deleted" })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

module.exports = { propertyRouter };