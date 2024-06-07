# langchain-ollama-tensorflow

1.  add imports for tensorflow embeddings:
```
import "@tensorflow/tfjs-node";
import { TensorFlowEmbeddings } from "langchain/embeddings/tensorflow";
```


2. Add Tensorflow Vector embedding
```
// VECTOR
// Then use the TensorFlow Embedding to store these chunks in the datastore
const vectorStore = await MemoryVectorStore.fromDocuments(splitDocs, new TensorFlowEmbeddings());
```