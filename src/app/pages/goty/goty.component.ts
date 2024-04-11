import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { HttpClientModule } from '@angular/common/http';
import { Game } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './goty.component.html',
  styleUrl: './goty.component.css',
})
export class GotyComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}
  ngOnInit(): void {
    this.gameService.getNominados().subscribe((games) => {
      this.games = games;
    });
  }

  voteGame(id: string) {
    this.gameService.gameVote(id).subscribe((res: any) => {
      if (res.ok) {
        Swal.fire('Thank you', res.mensaje, 'success');
      } else {
        Swal.fire('Oops', res.mensaje, 'error');
      }
    });
  }
}
