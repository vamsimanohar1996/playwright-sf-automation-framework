import { base } from "@faker-js/faker/.";
import { APIRequestContext, request, test, expect } from "@playwright/test";

let baseRequestContext: APIRequestContext;




// test.beforeAll("Setting up baseURL", async () => {

//     baseRequestContext = await request.newContext(
//         {
//             baseURL: 'https://restful-booker.herokuapp.com'
//         }
//     );

// });

test.skip(`Peforming a get call `, { tag: '@API' }, async ({ }) => {

    const resp1 = await baseRequestContext.get(`/booking`);
    console.log(await resp1.json());
    console.log(`The status code is ${resp1}`)
    expect(await resp1.status()).toBe(200);



});


test.skip(`Peforming a get call using path param `, { tag: '@API' }, async () => {


    const resp1 = await baseRequestContext.get(`/booking/1`);
    console.log(await resp1.json());
    expect(await resp1.status()).toBe(200);
    const res = await resp1.json();

    const name = "Jim";
    expect(res.firstname).toBe(name);

});


test.skip(`Peforming a get call using query params `, { tag: '@API' }, async () => {

    const resp1 = await baseRequestContext.get(`/booking`, {
        params: {
            firstname: "Vamsi",
            lastname: "Manohar"
        }
    });
    console.log(await resp1.json());
    expect(await resp1.status()).toBe(200);

});


test.only(`Demoblaze get produts`,{tag:"@API"}, async({request})=>{


    const res1 = await request.get("https://api.demoblaze.com/entries")
    console.log(await res1.json())

})