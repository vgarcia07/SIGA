import {
  Component,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from "@angular/forms";
import { AppSettings } from "../../service/app-settings.service";
import "lity";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: "login",
  templateUrl: "./login.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./login.css"],
})
export class LoginPage implements OnDestroy {
  @ViewChild("childModal", { static: false }) childModal?: ModalDirective;

  sigaUsuario: string = "";
  submitted: boolean;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(
    private router: Router,
    public appSettings: AppSettings,
    private formBuilder: FormBuilder
  ) {
    this.appSettings.appEmpty = true;
    this.submitted = false;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(6)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
  }

 // onSubmit(): void {
 //   this.submitted = true;

 //   if (this.loginForm.invalid) {
 //     return;
 //   }

 //   console.log(JSON.stringify(this.loginForm.value, null, 2));
 // }

 onSubmit(): void {
  this.submitted = true;

  if (this.loginForm.invalid) {
    return;
  }

  // Usuario y contraseña en duro
  const usuarioFijo = "superadmin";
  const passwordFijo = "123456";

  const { username, password } = this.loginForm.value;

  if (username === usuarioFijo && password === passwordFijo) {
    console.log("Inicio de sesión exitoso. Redirigiendo...");
    this.router.navigate(["/home"]); // Redirige a home
  } else {
    console.log("Usuario o contraseña incorrectos");
  }
}


  onReset(): void {
    this.submitted = false;
    this.loginForm.reset();
  }



  // #####################################

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  scrollToTarget(targetId: string) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const scrollPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  }

  showChildModal(): void {
    this.childModal?.show();
  }

  hideChildModal(): void {
    this.childModal?.hide();
  }

}
