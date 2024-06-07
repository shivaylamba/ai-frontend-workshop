import { Ollama } from "@langchain/community/llms/ollama";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import { MemoryVectorStore } from "langchain/vectorstores/memory";

// add imports for tensorflow embeddings

import { RetrievalQAChain } from "langchain/chains";

// OLLAMA
const ollama = new Ollama({
  baseUrl: "http://localhost:11434",
  model: "llama3",
});

// DATOS DE LA WEB
const loader = new CheerioWebBaseLoader("https://en.wikipedia.org/wiki/2023_Hawaii_wildfires");
const data = await loader.load();



// TEXTSPLITTER
// Split the text into 500 character chunks. And overlap each chunk by 20 characters
const textSplitter = new RecursiveCharacterTextSplitter({
 chunkSize: 500,
 chunkOverlap: 20
});
const splitDocs = await textSplitter.splitDocuments(data);



// add vector capability



// RETRIEVER
const retriever = vectorStore.asRetriever();
const chain = RetrievalQAChain.fromLLM(ollama, retriever);
let result = await chain.call({query: "When was Hawaii's request for a major disaster declaration approved?"});
console.log(result.text)
