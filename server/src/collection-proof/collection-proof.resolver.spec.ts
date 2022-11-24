import { Test, TestingModule } from '@nestjs/testing';
import { CollectionProofResolver } from './collection-proof.resolver';
import { CollectionProofService } from './collection-proof.service';

describe('CollectionProofResolver', () => {
  let resolver: CollectionProofResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionProofResolver, CollectionProofService],
    }).compile();

    resolver = module.get<CollectionProofResolver>(CollectionProofResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
