import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const speechFile = path.resolve('./chatty-the-philosopher/speech.mp3');

const storyText = 'In a time when the world stood on the brink of change, one year dared to define the future. 2023. A year where the stars aligned, bringing hope, challenges, and a quest for unity. From the depths of innovation to the frontlines of conservation, heroes emerged in the most unexpected places. But as the world pushed forward, new challenges emerged, threatening to undo the progress of a thousand years. Yet, in the face of adversity, humanity\'s spirit shone brighter, weaving a tapestry of resilience that stretched across the globe. 2023 wasn\'t just a year in the calendar—it was a chapter in the human story that asked the ultimate question: What future do we want to create? This is the story of 2023. The year of challenge, triumph, and hope. The year we dared to dream. As the tale of 2023 unfolds, our journey takes a turn towards the realms of intellect and discovery. Amidst the backdrop of a world in motion, scholars and scientists pave the way forward, their groundbreaking work casting beams of light into the shadows of the unknown. Now, let us delve deeper, transitioning from the broad strokes of our narrative to the fine details etched in the annals of academic pursuit.';

const researchSummaries = `Aria Kim (2025)

"Digital Ethics in the Age of AI": Examines the ethical implications of artificial intelligence on privacy, autonomy, and societal norms.
Luca Martinez (2026)

"Post-Capitalism and the Global Economy": Proposes a new economic model that addresses inequality, sustainability, and technological displacement.
Raj Patel (2027)

"The Climate Compact": Advocates for a radical restructuring of global governance to combat climate change effectively.
Sofia Chang (2028)

"Neuroethics and the Self": Explores the impact of neurotechnology on identity, free will, and the concept of the self.
Mohammed Al-Farsi (2029)

"The New Silk Road: Power and Culture in the 21st Century": Analyzes the geopolitical and cultural shifts resulting from new global trade and infrastructure projects.
Elena Rodriguez (2030)

"Urban Futures: Society in the Megacity": Investigates the social, economic, and environmental challenges and opportunities of life in burgeoning megacities.
Isaac Okeke (2031)

"Beyond Borders: Migration and Identity in a Globalized World": Addresses the complexities of migration, national identity, and multiculturalism in the 21st century.
Nora Abbas (2032)

"Quantum Philosophy: Reality at the Edge of Science": Bridges quantum physics and philosophical inquiry, questioning the nature of reality and consciousness.
Yuki Takahashi (2033)

"The Post-Truth Era: Information, Misinformation, and Democracy": Critiques the impact of social media and fake news on public discourse and democratic institutions.
Alex Johnson (2034)

"Humanity 2.0: Ethics in the Age of Enhancement": Debates the moral implications of genetic editing, cybernetic enhancements, and the quest for human perfection.`;


async function main() {
  const mp3 = await openai.audio.speech.create({
    model: 'tts-1',
    voice: 'onyx',
    // input: storyText,
    input: researchSummaries,
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
main();
