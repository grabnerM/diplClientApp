import { FormControl } from '@angular/forms';

export class UsernameValidator {

    static checkUsername(control: FormControl): any {
        
        return new Promise(resolve => {

            //Serverabfrage, ob username bereits vorhanden ist

            setTimeout(() => {
                if (control.value.toLowerCase() === "greg") {
                    
                    resolve({
                        "username taken": true
                    })

                } else {
                    resolve(null)
                }
            }, 2000)
        })
    }
}