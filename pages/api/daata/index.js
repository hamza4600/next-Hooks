// import  {comments }from "./data"
export const comments=[
    {
        id: 1,
        text: 'This is the first comment '
    },
    {
        id: 2,
        text: 'This is the Second comment '
    },  
    {
        id: 3,
        text: 'This is the Thired comment '
    },
]
 
export default function handler(req,res){
    if(req.method==="GET"){
     res.status(200).json(comments)}
    else if(req.method==="POST"){
         const lkl=req.body.Data
         const newFi={
             id:3+1,
             text:lkl
         }
         comments.push(newFi)
         res.status(201).json(newFi)
     }

 }