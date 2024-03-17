import { insertLink, query } from "../db.js";

export const addLink = (req, res) => {
    try{
        console.log('HERE')
        const url = req.body.url
        console.log(url)
        const id = insertLink(url)
        console.log(id)

        if(id){
            console.log({id})
            res.status(200).send({id});
        }else{
            console.log({id})
            res.status(400).send('Failed to insert link')
        }
    }catch(error){
        console.error(error)
        res.status(500).send('Internal Server Error');
    }
}

export const getLink = async (req, res) => {
    try{
        const id = req.body.id;
        console.log(id)
        if(id.length !== 8){
            return res.status(400).send('Invalid ID')
        }
        const url = await query(id)
        console.log(id)
        console.log(url)        
        if(!url){
            res.status(404).send('No URL found for the provided ID')
        }else{
            res.status(200).send({url})
        }
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}