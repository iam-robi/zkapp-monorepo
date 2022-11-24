import { Test, TestingModule } from '@nestjs/testing';
import { CollectionProofService } from './collection-proof.service';

describe('CollectionProofService', () => {
  let service: CollectionProofService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionProofService],
    }).compile();

    service = module.get<CollectionProofService>(CollectionProofService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
