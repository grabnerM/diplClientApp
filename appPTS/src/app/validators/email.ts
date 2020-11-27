import { FormControl, FormGroup } from '@angular/forms';

export class EmailValidator {

    static confirmEmail(control: FormControl, group: FormGroup, matchEmail: string) {
        
        return new Promise(resolve => {
            
            if (!control.value && group.controls[matchEmail].value !== null || group.controls[matchEmail].value === control.value) {
                group.controls['cEmail'].setErrors(null)
                resolve(null)
            } else {
                group.controls['cEmail'].setErrors({ 'mustMatch': true })
                if (matchEmail == 'rEmail') {
                    resolve({ 'mustMatch': true })
                } else {
                    resolve(null)
                }
            }
        })
    }
}