import OpenAI from 'openai';

const USE_CUSTOM_AI = false;

const customQueryAI = async (prompt: string): Promise<string> => {
  const elementMatch = prompt.match(/About the element (\w+) \((\w+)\): (.+)/);
  
  if (!elementMatch) {
    return "I couldn't understand your question. Please ask about a specific element.";
  }
  
  const [, elementName, elementSymbol, question] = elementMatch;
  
  if (question.toLowerCase().includes('use') || question.toLowerCase().includes('application')) {
    return `${elementName} (${elementSymbol}) has various applications. It's commonly used in ${getRandomUses(elementName)}. Would you like to know more specific applications?`;
  } else if (question.toLowerCase().includes('property') || question.toLowerCase().includes('properties')) {
    return `${elementName} (${elementSymbol}) has several important properties. It has a ${getRandomProperty(elementName)}. Its physical state at room temperature depends on its position in the periodic table.`;
  } else if (question.toLowerCase().includes('discover') || question.toLowerCase().includes('history')) {
    return `${elementName} was ${getRandomDiscovery(elementName)}. Since then, it has played an important role in scientific advancement.`;
  } else {
    return `${elementName} (${elementSymbol}) is an interesting element. It's located in the periodic table with atomic number corresponding to its position. It has unique properties that distinguish it from other elements. Is there something specific about ${elementName} you'd like to know?`;
  }
};

const getRandomUses = (_element: string): string => {
  const uses = [
    'industrial manufacturing processes', 
    'medical and pharmaceutical applications', 
    'electronic components', 
    'scientific research', 
    'everyday consumer products',
    'construction materials',
    'energy production and storage'
  ];
  return uses[Math.floor(Math.random() * uses.length)];
};

const getRandomProperty = (_element: string): string => {
  const properties = [
    'distinctive atomic structure', 
    'characteristic melting and boiling points', 
    'specific electronegativity', 
    'unique electron configuration',
    'notable density and atomic weight',
    'specific reactivity with other elements'
  ];
  return properties[Math.floor(Math.random() * properties.length)];
};

const getRandomDiscovery = (_element: string): string => {
  const discoveries = [
    'discovered in the early stages of chemical science', 
    'identified through spectroscopic analysis', 
    'isolated through innovative laboratory techniques', 
    'recognized by scientists studying atomic structure',
    'found in natural minerals before being isolated'
  ];
  return discoveries[Math.floor(Math.random() * discoveries.length)];
};

const getOpenAIInstance = (): OpenAI | null => {
  const apiKey = localStorage.getItem('openai_api_key');
  if (!apiKey) return null;
  
  return new OpenAI({ 
    apiKey,
    dangerouslyAllowBrowser: true // Required for client-side usage
  });
};

export const queryAI = async (prompt: string): Promise<string> => {
  if (USE_CUSTOM_AI) {
    return customQueryAI(prompt);
  }
  
  const openai = getOpenAIInstance();
  
  if (!openai) {
    throw new Error('OpenAI API key not found. Please add your API key in settings.');
  }
  
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });
    
    return response.choices[0].message.content || 'No response from AI';
  } catch (error) {
    console.error('Error querying OpenAI:', error);
    throw new Error('Failed to get response from OpenAI. Please try again later.');
  }
};

export const estimateTokens = (text: string): number => {
  return Math.ceil(text.length / 4);
};

export const trackCredits = (query: string, response: string): number => {
  const creditsUsed = JSON.parse(localStorage.getItem('credits_used') || '0');
  
  const queryTokens = estimateTokens(query);
  const responseTokens = estimateTokens(response);
  const totalTokens = queryTokens + responseTokens;
  
  const cost = totalTokens * 0.00001;
  const newCreditsUsed = creditsUsed + cost;
  
  localStorage.setItem('credits_used', JSON.stringify(newCreditsUsed));
  
  return newCreditsUsed;
};

export const checkCredits = (): { allowed: boolean; warning: boolean; used: number; budget: number } => {
  const creditsUsed = JSON.parse(localStorage.getItem('credits_used') || '0');
  const budget = JSON.parse(localStorage.getItem('budget') || '5'); // Default $5
  
  return {
    allowed: creditsUsed < budget,
    warning: creditsUsed >= budget * 0.8,
    used: creditsUsed,
    budget
  };
};

export const resetCredits = (): void => {
  localStorage.setItem('credits_used', '0');
};

export const updateBudget = (newBudget: number): void => {
  localStorage.setItem('budget', JSON.stringify(newBudget));
};

export const saveApiKey = (apiKey: string): void => {
  localStorage.setItem('openai_api_key', apiKey);
};

export const getApiKey = (): string | null => {
  return localStorage.getItem('openai_api_key');
};

export const clearApiKey = (): void => {
  localStorage.removeItem('openai_api_key');
};
