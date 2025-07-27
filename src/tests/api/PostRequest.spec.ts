import {test, request,expect} from '@playwright/test'
import {faker} from "@faker-js/faker"
import { SharedData } from '@src/utils/DataStore';


let bookingID;
let firstname;
let lastname;


test(`Creating a booking entry and fetching the details using a GET request`,{tag : '@API'},async({request})=>{


    const response = await request.post("https://restful-booker.herokuapp.com/booking",{
        data:{
            firstname: faker.person.firstName(),
            lastname:faker.person.lastName(),
            totalprice:faker.number.int(1000),
            depositpaid:true,
            bookingdates:{
                "checkin":"2025-01-01",
                "checkout":"2025-02-02"
            },
            additionalneeds:"Cold Coffee"

        }
    })

    console.log(await response.json())
    const bookingReponse = await response.json();
    bookingID = await bookingReponse.bookingid;
    firstname=await bookingReponse.booking.firstname;
    lastname = await bookingReponse.booking.lastname;

    SharedData.setBookingId(bookingID);

    
    console.log(`The booking Id is .... ${bookingID}`);

    const fetchResponse = await request.get(`https://restful-booker.herokuapp.com/booking/${SharedData.getBookingId()}`)
    let fetchedResponse = await fetchResponse.json();
    console.log(fetchedResponse)
    expect(await fetchedResponse.firstname).toBe(firstname);
    expect(await fetchedResponse.lastname).toBe(lastname);




})