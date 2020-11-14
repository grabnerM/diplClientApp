import { FormControl, FormGroup } from '@angular/forms';

export class PasswordValidator {

    static confirmPassword(control: FormControl, group: FormGroup, matchPassword: string) {
        
        return new Promise(resolve => {
            
            if (!control.value && group.controls[matchPassword].value !== null || group.controls[matchPassword].value === control.value) {
                control.setErrors(null)
                resolve(null)
            } else {
                control.setErrors({ 'mustMatch': true })
                resolve({ 'mustMatch': true })
            }
        })
    }
}