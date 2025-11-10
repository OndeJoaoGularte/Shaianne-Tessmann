import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
    private fb = inject(FormBuilder);
    private http = inject(HttpClient);

    // Estado do formulário para mostrar mensagens na tela
  formStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    message: [''], 
  });

  onSubmit() {
    if (this.contactForm.valid && this.formStatus !== 'sending') {
      this.formStatus = 'sending';

      // Substitua SEU_CODIGO_FORMSPREE pelo código que você pegou no site deles
      const endpoint = 'https://formspree.io/f/movpgpqn';

      this.http.post(endpoint, this.contactForm.value).subscribe({
        next: () => {
          this.formStatus = 'success';
          this.contactForm.reset();
          // Opcional: volta para 'idle' após 5 segundos
          setTimeout(() => this.formStatus = 'idle', 5000);
        },
        error: () => {
          this.formStatus = 'error';
          setTimeout(() => this.formStatus = 'idle', 5000);
        }
      });
    } else {
      // Marca todos os campos como "tocados" para mostrar os erros na tela
      this.contactForm.markAllAsTouched();
    }
  }
}