import { Module } from '@nestjs/common';
import { CohortEmployeeService } from './cohort-employee.service';
import { CohortEmployeeController } from './cohort-employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CohortEmployeeEntity } from './entities/cohort-employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CohortEmployeeEntity])],
  controllers: [CohortEmployeeController],
  providers: [CohortEmployeeService],
  exports: [CohortEmployeeService],
})
export class CohortEmployeeModule {}
