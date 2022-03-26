export default function handler(req,res){
    const params=req.query.params
    res.status(200).json(params)
}