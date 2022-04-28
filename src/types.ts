export type WordResult = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
};

export type DictionaryResponse = { data: WordResult[] };

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

export type Photo = { src: { original: string; tiny: string }; alt: string };

export type PhotosResponse = { data: { photos: Photo[] } };
