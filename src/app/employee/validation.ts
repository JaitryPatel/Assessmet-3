import { AbstractControl } from "@angular/forms";

export class Validation {
//   static match(arg0: string, arg1: string): any {
//     throw new Error('Method not implemented.');
//   }
    static match(controlName: string, checkControlName : string)
    {
        return (controls : AbstractControl) => {
            const control = controls.get(controlName);
            const checkControl = controls.get(checkControlName);

            if(checkControl?.errors && !checkControl.errors['matching'])
            { 
                return null;
            }

            if(control?.value !== checkControl?.value)
            {
                controls.get(checkControlName)?.setErrors({ matching: true});
                return {matching : true};
                    
            }
            else
            {
                return null;
            }
        };
    }
}
