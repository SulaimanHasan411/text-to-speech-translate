//serverless function

if(process.env.NODE_ENV !== "production"){
    (async () => {
        const dotenv = await import("dotenv");
        dotenv.config();
    })()
}

export default async function handler(req, res){
    if (req.method !== "POST"){
        return res.status(405).json({error: "Method Not Allowed: has to be a post request"});
    }

    const {text, targetLang} = req.body;

    if(!text || !targetLang){
        return res.status(400).json({error: "Missing text or language"});
    }

}