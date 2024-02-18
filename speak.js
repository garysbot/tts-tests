import fs from "fs";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const speechFile = path.resolve("./speech.mp3");

async function main() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "onyx",
    input: "My name is Gary Jiang and I'm a software engineer. I've got a lot of different ideas about a lot of different things. I want to work on them all but sometimes I find it hard to prioritize. Anxiety gets in the way. It's 4:03 am right now.  I should go to bed.",
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
main();