import { insertLink, query } from "../db.js";

export const addLink = (req, res) => {
    try{
        console.log('HERE')
        const url = req.body.url
        console.log(url)
        const id = insertLink(url)
        console.log(id)

        if(id){
            return res.status(200).send({id});
        }else{
            return res.status(400).send('Failed to insert link')
        }
    }catch(error){
        console.error(error)
        res.status(500).send('Internal Server Error');
    }
}

export const getLink = async (req, res) => {
    try{
        const id = req.body.id;
        if(id.length !== 19){
            res.status(400).send('Invalid ID')
            throw new Error('Invalid ID')
        }
        const url = await query(id)
        if(!url){
            res.status(404).send('No URL found for the provided ID')
            throw new Error('No URL found for the provided ID')
        }else{
            res.status(200).send({url})
        }
    }catch(error){
        console.log(error)
        res.status(500).send('Internal Server Error');
    }
}