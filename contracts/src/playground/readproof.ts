import {
  Field,
  Experimental,
  isReady,
  shutdown,
  Proof,
  verify,
} from 'snarkyjs';
import fs from 'fs';
await isReady;

const SimpleProgram = Experimental.ZkProgram({
  publicInput: Field,

  methods: {
    run: {
      privateInputs: [],

      method(publicInput: Field) {
        publicInput.assertEquals(Field(0));
      },
    },
  },
});
const { verificationKey } = await SimpleProgram.compile();

var obj = JSON.parse(fs.readFileSync('proof_example.json', 'utf8'));

const p = new Proof(obj);

const e = await verify(p, verificationKey);
console.log(e);

shutdown();
