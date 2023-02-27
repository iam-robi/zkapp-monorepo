import { Field, Experimental, isReady, shutdown, Proof } from 'snarkyjs';
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
async function main() {
  await fs.writeFile('proof.json', 'Hey there!', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });
}

const start = Date.now();
const proof = await SimpleProgram.run(Field(0));
const end = Date.now();
console.log(`Proof generation time: ${end - start} ms`);

var stream = fs.createWriteStream('proof.json');
stream.once('open', function (fd) {
  stream.write(JSON.stringify(proof));
  stream.end();
});

// shutdown();
