import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(@InjectRepository(Pokemon) private repo: Repository<Pokemon>) {}

  create(data: any) { return this.repo.save(data); }
  findAll() { return this.repo.find(); }
  update(id: number, data: any) { return this.repo.update(id, data); }
  remove(id: number) { return this.repo.delete(id); }
}