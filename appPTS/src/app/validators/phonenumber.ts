import { FormGroup, FormControl } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneNumberUtil = PhoneNumberUtil.getInstance();

export class PhoneNumberValidator {

    static confirmPhoneNumber(control: FormControl, group: FormGroup, areaCode: string) {
        
        return new Promise(resolve => {

            console.log(group.controls[areaCode].value !== null)
            console.log(control.value)

            //If verbessern
            //Errors verbessern
            //If womöglich aufbrechen

            if (!control.value && group.controls[areaCode].value !== null) {
                console.log("Fuck you")
                group.controls[areaCode].setErrors({ 'notSet': true})
                resolve(null)
            } else {
                let regionCode = group.controls[areaCode].value
                let validNumber = false

                try {
                    const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(
                        control.value, regionCode
                    )

                    validNumber = phoneNumberUtil.isValidNumber(phoneNumber)
                } catch (e) { }
                
                if (validNumber) {
                    console.log('Test')
                    resolve(null)
                } else {
                    console.log('Hier')
                    console.log(control.value)
                    control.setErrors({ 'wrongNumber': true })
                    resolve({ 'wrongNumber': true })

                    console.log()
                }
            }
        })
    }
}