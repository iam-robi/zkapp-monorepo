import { isReady, PrivateKey, shutdown } from "snarkyjs";
import fs from "fs-extra";

async function generateKeypair() {
    await isReady;
    const privateKey = PrivateKey.random();
    const publicKey = privateKey.toPublicKey();
    const encodedPrivateKey = privateKey.toBase58();
    const encodedPublicKey = publicKey.toBase58();
    const keyPair = {
        "privateKey": privateKey.toBase58(),
        "publicKey": publicKey.toBase58()
    }
    fs.outputJsonSync(`keys/keygen/${publicKey.toBase58()}.json`, keyPair, { spaces: 2 });

    console.log({ privateKey: encodedPrivateKey, publicKey: encodedPublicKey });
}

generateKeypair().then(shutdown);