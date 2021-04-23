import { Test, TestingModule } from '@nestjs/testing';
import { WorkSpacesService } from './work-spaces.service';

describe('WorkSpacesService', () => {
  let service: WorkSpacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkSpacesService],
    }).compile();

    service = module.get<WorkSpacesService>(WorkSpacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
