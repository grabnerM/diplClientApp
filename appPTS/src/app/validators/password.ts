import { FormControl, FormGroup } from '@angular/forms';

export class PasswordValidator {

    static checkPassword(formGroup: FormGroup): any {
        
        return new Promise(resolve => {

            const password = formGroup.get('rPassword');
            const confirmPassword = formGroup.get('cPassword')

            if (password && confirmPassword) {
                if (password.pristine || confirmPassword.pristine) {
                    resolve(null)
                }
                if (password.value !== confirmPassword.value) {
                    resolve({ 
                        "passwordsDoNotMatch": true 
                    })
                }
            }
        })
    }
}