import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSection } from './sections/home-section/home-section';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { NeighborhoodSearch } from "./sections/neighborhood-search/neighborhood-search";
import { Recents } from "./sections/recents/recents";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeSection, Footer, Header, NeighborhoodSearch, Recents],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('scarcelaImoveis');
}
