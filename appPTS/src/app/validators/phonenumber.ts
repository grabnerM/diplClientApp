import { FormGroup, FormControl } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneNumberUtil = PhoneNumberUtil.getInstance();

export class PhoneNumberValidator {

    static confirmPhoneNumber(control: FormControl, group: FormGroup, areaCode: string) {
        
        return new Promise(resolve => {

            if (control.value) {
                if (group.controls[areaCode].value == "") {
                    group.controls[areaCode].setErrors({ 'notSet': true })
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
                        resolve(null)
                    } else {
                        control.setErrors({ 'wrongNumber': true })
                        resolve({ 'wrongNumber': true })
                    }
                }
            }
        })
    }
}