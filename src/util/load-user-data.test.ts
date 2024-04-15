import {describe,test ,expect} from "vitest"

import {userLoadData} from "@/util/load-user-data";

describe("loadUserDetails",()=>{
    test("loads user data as expect",async ()=>{
        const user=await userLoadData("m0.slah")

        expect(user).toEqual({
            username:"m0.slah",
            name:"Muhammed Slah",
            likes:["rice","fish"],
            coolness: 100
        })
    })
})
