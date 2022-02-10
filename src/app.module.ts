import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MeetingModule } from './meeting/meeting.module';
import { ProposalModule } from './proposal/proposal.module';
import { CustomerModule } from './customer/customer.module';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [UserModule, MeetingModule, ProposalModule, CustomerModule, VehicleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
