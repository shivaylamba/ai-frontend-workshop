## How to run

### Install dependencies for transformers and langchain community

```shell
npm install @xenova/transformers @langchain/community
```

### Set the HuggingFaceTransformersEmbeddings
```
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/hf_transformers";


export async function getEmbeddings() {
    return new HuggingFaceTransformersEmbeddings({
        modelName: "Xenova/all-mpnet-base-v2",
    });
}


```

### Set the Ollama API url

Copy .env.example file to a .env file. This should preferably be running in an Apple Silicon Mac so you can use it's neural cores.

```text
OLLAMA_URL=http://localhost:11434
```

### Feed documents to the Vector DB

This will scan all .pdf files in the documents directory and create a database directory includiong all database files.

```text
npm run feed
```

### Ask the AI some questions

You can ask some questions using the query.ts script.
```shell
npm run query "How many people work at Mercadona?"
```