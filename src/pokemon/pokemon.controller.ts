import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  create(@Body() data: any) { return this.pokemonService.create(data); }

  @Get()
  findAll() { return this.pokemonService.findAll(); }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) { return this.pokemonService.update(+id, data); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.pokemonService.remove(+id); }
}