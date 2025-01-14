//scr/pages/api/query.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Groq } from 'groq-sdk';
import fs from 'fs/promises';
import path from 'path';

// Initialize Groq client
const client = new Groq({
  apiKey: process.env.GROQ_API_KEY || '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',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Read bio.txt file
    let bioInfo = '';
    try {
      const bioPath = path.join(process.cwd(), 'bio.txt');
      bioInfo = await fs.readFile(bioPath, 'utf8');
    } catch (err) {
      console.error('Failed to read bio.txt:', err);
      return res.status(500).json({ error: 'Failed to read biography file' });
    }

    const { query } = req.body;

    // Validate input
    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return res.status(400).json({ error: 'Invalid query provided' });
    }

    const prompt = `
    You are an AI assistant presenting my portfolio based on my biography. Use the provided bio to respond concisely, acting as if you are me.
    my bio:
    ${bioInfo}
    Task:
    Respond to the following query from a recruiter or visitor in a professional and confident tone:
    ${query}
    Guidelines:
    Provide responses that are clear, to the point, and professional.
    Use bullet points if applicable to ensure readability.
    If specific details are unavailable, share my contact information for further discussion.
    Showcase my strengths, experiences, and relevant achievements wherever relevant.
    Craft the best possible response to reflect my skills and professionalism.
    `;

    // Make API request
    let aiResponse;
    try {
      aiResponse = await client.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'llama-3.1-8b-instant',
      });
    } catch (err) {
      console.error('Groq API error:', err);
      return res.status(500).json({ error: 'Failed to fetch AI response' });
    }

    const aiResponseText = aiResponse?.choices?.[0]?.message?.content;

    if (!aiResponseText) {
      return res.status(500).json({ error: 'Invalid response from AI service' });
    }

    res.status(200).json({ response: aiResponseText });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to process query' });
  }
}
