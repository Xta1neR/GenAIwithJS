import 'dotenv/config';
import { OpenAI } from 'openai';

const client = new OpenAI();

const result = client.embeddings.create({
    model: 'text-embedding-3-small',
    input: 'Hello, world!',
    encoding_format: 'float',
});
console.log('Embedding result:', result.data);