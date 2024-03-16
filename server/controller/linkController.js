import { insertLink, query } from "../db.js";

export const addLink = (req, res) => {
    try{
        const url = req.body.url
        const id = insertLink(url)
        console.log(id)

        if(id){
            res.status(200).send({id})
        }else{
            res.send(400)
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