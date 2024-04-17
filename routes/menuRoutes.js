const express = require('express');
const router = express.Router();
const menuItems = require('./../models/menuItems');// double dot isliye kyunki models do file piche hai

router.post('/', async (req, res) => {
    //async=asynchronous functn mtlb iss function(data ko save krne me) time lg skta h
    try {
        const data = req.body; //data converted by body-parser
        const newMenu = new menuItems(data);

        //upar wala method sahi h but aajkl use ni hota ye modify hogya h async aur await me
        const response = await newMenu.save()
        //await= asynchronous code mtlb jbtk ye cheez resolve ni ho jati hmko wait krna h
        console.log("Menu saved successfully");
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.put('/:id', async (req, res) => {
    //async=asynchronous functn mtlb iss function(data ko save krne me) time lg skta h
    try {
        const id = req.params.id; //data converted by body-parser
        const newData = req.body;


        //upar wala method sahi h but aajkl use ni hota ye modify hogya h async aur await me
        const response = await menuItems.findByIdAndUpdate(id, newData, {
            new: true, // updated data ko response me store kara dega
            runValidators: true, // defined validators check krega
        })
console.log(response);
        if (!response) {
            return res.status(404).json({ err: 'Menu not found' });
        }
        //await= asynchronous code mtlb jbtk ye cheez resolve ni ho jati hmko wait krna h
        console.log("Menu updated successfully");
        res.status(200).json(response);


    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.delete('/:id', async (req, res) => {
    //async=asynchronous functn mtlb iss function(data ko save krne me) time lg skta h
    try {
        const id = req.params.id; //data converted by body-parser
        //upar wala method sahi h but aajkl use ni hota ye modify hogya h async aur await me
        const response = await menuItems.findByIdAndDelete(id);
        
        if (!response) {
            return res.status(404).json({ err: 'Menu not found' });
        }
        //await= asynchronous code mtlb jbtk ye cheez resolve ni ho jati hmko wait krna h
        console.log("Menu deleted successfully");
        res.status(200).json({message:'deleted successflly'});


    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await menuItems.find();
        console.log(data);
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "Something went wrong" });
    }
})


module.exports = router;