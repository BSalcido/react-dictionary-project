export type Phonetic = {
  audio: string;
  text: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

export type Definition = { definition: string; example: string };
