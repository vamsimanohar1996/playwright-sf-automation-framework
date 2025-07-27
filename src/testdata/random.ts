
import {faker} from "@faker-js/faker"
import { EmployeeDetails } from "./DataInterface"


export function getRandomEmployeeDetails() : EmployeeDetails
{

    return {

        firstname : faker.person.firstName(),
        middlename: faker.person.middleName(),
        lastname: faker.person.lastName(),
        employeedId: faker.number.int(1000).toString()


    }

   
}