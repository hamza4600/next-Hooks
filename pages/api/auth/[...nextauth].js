import NextAuth from "next-auth/next"; 
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
export default  NextAuth({                  
    providers:[
        GoogleProvider({
            clienId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET,

        }),
        GitHubProvider({
            clienId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
    ],
    jwt:{
        encryption:true,
    },
    secret:process.env.SECRET,
    callbacks:{
        async jwt(token,user){
            if(user){
                token.id=user.id
                console.log(token.id=user.id)

            }
            return token
        },
        async session(session,token){
            session.user.id= token.id
            return session
        },
    },
    
})
