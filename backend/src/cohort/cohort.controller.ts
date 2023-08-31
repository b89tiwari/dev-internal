import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { CohortService } from './cohort.service';
import { CreateCohortDto } from './dto/create-cohort.dto';
import { UpdateCohortDto } from './dto/update-cohort.dto';

@Controller('cohort')
export class CohortController {
  constructor(private readonly cohortService: CohortService) {}

  @Post()
  async create(@Body() createCohortDto: CreateCohortDto) {
    return this.cohortService.create(createCohortDto);
  }

  @Get()
  findAll() {
    return this.cohortService.findAll();
    //return `This action returns all cats`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cohortService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCohortDto: UpdateCohortDto) {
    return this.cohortService.update(+id, updateCohortDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cohortService.remove(+id);
  }
}
