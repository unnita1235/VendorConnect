'use server';
/**
 * @fileOverview AI flow that recommends products from particular vendors based on a search query.
 *
 * - vendorAwareProductSearch - A function that handles the product search and recommendation process.
 * - VendorAwareProductSearchInput - The input type for the vendorAwareProductSearch function.
 * - VendorAwareProductSearchOutput - The return type for the vendorAwareProductSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VendorAwareProductSearchInputSchema = z.object({
  searchQuery: z.string().describe('The user\u2019s search query.'),
  currentVendors: z
    .array(z.string())
    .describe(
      'A list of vendors currently being displayed to the user. This helps tailor the recommendations.'
    ),
});
export type VendorAwareProductSearchInput = z.infer<
  typeof VendorAwareProductSearchInputSchema
>;

const VendorAwareProductSearchOutputSchema = z.object({
  recommendedProducts: z
    .array(z.string())
    .describe(
      'A list of recommended products from particular vendors based on the search query.'
    ),
  reasoning: z
    .string()
    .describe(
      'The AI\u2019s reasoning for recommending these products from these vendors.'
    ),
});
export type VendorAwareProductSearchOutput = z.infer<
  typeof VendorAwareProductSearchOutputSchema
>;

export async function vendorAwareProductSearch(
  input: VendorAwareProductSearchInput
): Promise<VendorAwareProductSearchOutput> {
  return vendorAwareProductSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'vendorAwareProductSearchPrompt',
  input: {schema: VendorAwareProductSearchInputSchema},
  output: {schema: VendorAwareProductSearchOutputSchema},
  prompt: `You are an AI assistant helping users find products from specific vendors.

The user is searching for: {{{searchQuery}}}

Currently, the user is viewing products from these vendors: {{#each currentVendors}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

Based on the search query and the currently displayed vendors, recommend a list of products and explain your reasoning for recommending these products from these vendors.

Format your response as a list of products and a separate reasoning section.
`,
});

const vendorAwareProductSearchFlow = ai.defineFlow(
  {
    name: 'vendorAwareProductSearchFlow',
    inputSchema: VendorAwareProductSearchInputSchema,
    outputSchema: VendorAwareProductSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
