import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  imports: [],
  templateUrl: './editar-usuario.html',
  styleUrl: './editar-usuario.css',
})
export class EditarUsuario implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private usuarioService = inject(UsuarioService);

  usuario: UsuarioModel | null = null;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.getById(id).subscribe({
      next: (usuario) => {
        this.usuario = usuario;
      },
      error: (erro) => {
        console.log("Erro ao buscar usuário: " + erro);
        alert("Erro ao carregar dados do usuário.");
      }
    });
  }

  voltar(): void {
    this.router.navigate(['/lista-usuarios']);
  }
}
