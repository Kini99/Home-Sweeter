const express=require("express");
const { PropertyModel } = require("../models/property.model");
const { auth } = require("../middleware/auth.middleware");

const propertyRouter= express.Router();

propertyRouter.post("/add", auth, async (req, res) => {
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
    const page=Number(req.query.page)||1;
    const search = req.query.search || '';
    const sortByPrice = req.query.sortByPrice || '';
    const sortBySize = req.query.sortBySize || '';
    const status = req.query.status || '';
    const furnishing = req.query.furnishing || '';
    const ownership = req.query.ownership || '';
    const type = req.query.type || '';
    const transaction = req.query.transaction || '';

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
      if (type) {
        query.type = type;
      }
      if (transaction) {
        query.transaction = transaction;
      }
  
      let properties = await PropertyModel.find(query).lean()
        .limit(max)
        .skip((page-1)*max);

        if (sortByPrice) {
            properties = properties.sort((a, b) => {
              if (sortByPrice === 'HighToLow') {
                return b.total_price_num - a.total_price_num;
              }else if(sortByPrice === 'LowToHigh') {
                return a.total_price_num - b.total_price_num;
              }else {
                return 0;
              }
            });
          }

          if (sortBySize) {
            properties = properties.sort((a, b) => {
              if(sortBySize === 'LargeToSmall') {
                return b.carpet_num - a.carpet_num;
              }else if(sortBySize === 'SmallToLarge') {
                return a.carpet_num - b.carpet_num;
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

propertyRouter.patch("/update/:propertyId", auth, async (req, res) => {
    const { propertyId } = req.params;
    try {
        await PropertyModel.findByIdAndUpdate({ _id: propertyId }, req.body);
        res.status(200).json({ msg: "Property has been updated", updates: req.body })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

propertyRouter.delete("/delete/:propertyId", auth, async (req, res) => {
    const { propertyId } = req.params;
    try {
        await PropertyModel.findByIdAndDelete({ _id: propertyId });
        res.status(200).json({ msg: "Property has been deleted" })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

module.exports = { propertyRouter };
