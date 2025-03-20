
export type BotMessageType = {
  id: string;
  type: 'bot';
  content: string;
  options?: {
    text: string;
    value: string;
    nextId?: string;
  }[];
  delay?: number;
  nextId?: string;
};

export type UserMessageType = {
  id: string;
  type: 'user';
  content: string;
};

export type MessageType = BotMessageType | UserMessageType;

export type BotConfig = {
  id: string;
  name: string;
  description: string;
  startMessageId: string;
  messages: Record<string, BotMessageType>;
};

export const bots: BotConfig[] = [
  {
    id: 'technical-need',
    name: 'Technical Need',
    description: 'Establish the technical requirements for your federal sale',
    startMessageId: 'welcome',
    messages: {
      'welcome': {
        id: 'welcome',
        type: 'bot',
        content: 'Welcome to the Technical Need Assessment Bot. I\'ll help you establish the technical requirements for your federal sale. First, let\'s understand your product or service.',
        nextId: 'product-type',
        delay: 1000
      },
      'product-type': {
        id: 'product-type',
        type: 'bot',
        content: 'What type of solution are you offering to federal agencies?',
        options: [
          { text: 'Software/SaaS', value: 'software', nextId: 'software-questions' },
          { text: 'Hardware/Equipment', value: 'hardware', nextId: 'hardware-questions' },
          { text: 'Professional Services', value: 'services', nextId: 'services-questions' },
          { text: 'Combination', value: 'combination', nextId: 'combination-questions' }
        ]
      },
      'software-questions': {
        id: 'software-questions',
        type: 'bot',
        content: 'Software solutions often need to meet specific compliance standards. Do you have experience with FedRAMP, FISMA, or other federal compliance frameworks?',
        options: [
          { text: 'Yes, already compliant', value: 'compliant', nextId: 'target-agencies' },
          { text: 'In process', value: 'in-process', nextId: 'target-agencies' },
          { text: 'Not yet', value: 'not-yet', nextId: 'compliance-info' }
        ]
      },
      'compliance-info': {
        id: 'compliance-info',
        type: 'bot',
        content: 'Federal agencies typically require security compliance. For software solutions, you should consider pursuing FedRAMP authorization or ensuring FISMA compliance depending on your target agencies. Let\'s identify those agencies.',
        nextId: 'target-agencies',
        delay: 3000
      },
      'target-agencies': {
        id: 'target-agencies',
        type: 'bot',
        content: 'Which federal agencies are you targeting for your solution? This helps determine specific technical requirements.',
        options: [
          { text: 'Defense (DOD, Army, Navy, etc.)', value: 'defense', nextId: 'solution-uniqueness' },
          { text: 'Civilian (GSA, HHS, DHS, etc.)', value: 'civilian', nextId: 'solution-uniqueness' },
          { text: 'Intelligence Community', value: 'intelligence', nextId: 'solution-uniqueness' },
          { text: 'Multiple sectors', value: 'multiple', nextId: 'solution-uniqueness' }
        ]
      },
      'solution-uniqueness': {
        id: 'solution-uniqueness',
        type: 'bot',
        content: 'What makes your solution unique or valuable for federal agencies?',
        options: [
          { text: 'Cost savings', value: 'cost-savings', nextId: 'bot-transition' },
          { text: 'Advanced technology', value: 'advanced-tech', nextId: 'bot-transition' },
          { text: 'Specialized capabilities', value: 'specialized', nextId: 'bot-transition' },
          { text: 'Proven track record', value: 'proven', nextId: 'bot-transition' }
        ]
      },
      'bot-transition': {
        id: 'bot-transition',
        type: 'bot',
        content: 'Great! I have enough information about your technical needs. Now let\'s move on to identifying potential funding sources for your solution.',
        nextId: 'transition-to-funding',
        delay: 2000
      },
      'transition-to-funding': {
        id: 'transition-to-funding',
        type: 'bot',
        content: 'I\'m transitioning you to our Funding Identification Bot...',
        delay: 1500
      },
      'hardware-questions': {
        id: 'hardware-questions',
        type: 'bot',
        content: 'For hardware solutions, supply chain requirements are critical. Is your hardware manufactured in the US or TAA-compliant countries?',
        options: [
          { text: 'Yes, US-made', value: 'us-made', nextId: 'target-agencies' },
          { text: 'Yes, TAA-compliant', value: 'taa-compliant', nextId: 'target-agencies' },
          { text: 'No', value: 'not-compliant', nextId: 'supply-chain-info' }
        ]
      },
      'supply-chain-info': {
        id: 'supply-chain-info',
        type: 'bot',
        content: 'Federal procurement often requires products to be made in the US or TAA-compliant countries. You may need to adjust your supply chain to meet these requirements. Let\'s continue to identify your target agencies.',
        nextId: 'target-agencies',
        delay: 3000
      },
      'services-questions': {
        id: 'services-questions',
        type: 'bot',
        content: 'For professional services, security clearances and certifications are often required. Do your staff have relevant federal clearances or certifications?',
        options: [
          { text: 'Yes, cleared staff', value: 'cleared', nextId: 'target-agencies' },
          { text: 'Yes, certifications', value: 'certified', nextId: 'target-agencies' },
          { text: 'No', value: 'no-clearance', nextId: 'clearance-info' }
        ]
      },
      'clearance-info': {
        id: 'clearance-info',
        type: 'bot',
        content: 'Depending on the agencies you\'re targeting, you may need to obtain clearances or certifications for your staff. Let\'s identify your target agencies to determine specific requirements.',
        nextId: 'target-agencies',
        delay: 3000
      },
      'combination-questions': {
        id: 'combination-questions',
        type: 'bot',
        content: 'For combined solutions, integration with existing federal systems is often a key concern. Have you integrated with federal systems before?',
        options: [
          { text: 'Yes, extensive experience', value: 'extensive', nextId: 'target-agencies' },
          { text: 'Yes, limited experience', value: 'limited', nextId: 'target-agencies' },
          { text: 'No prior experience', value: 'none', nextId: 'integration-info' }
        ]
      },
      'integration-info': {
        id: 'integration-info',
        type: 'bot',
        content: 'Federal systems often have unique integration requirements. You may want to consider partnering with an experienced integrator or obtaining relevant information about target agency systems. Let\'s identify your target agencies.',
        nextId: 'target-agencies',
        delay: 3000
      }
    }
  },
  {
    id: 'funding',
    name: 'Funding',
    description: 'Identify potential funding sources for your solution',
    startMessageId: 'welcome',
    messages: {
      'welcome': {
        id: 'welcome',
        type: 'bot',
        content: 'Now I\'ll help you identify potential funding sources for your federal sale. Understanding the budget cycle and appropriation categories is crucial for success.',
        nextId: 'solution-price-range',
        delay: 1000
      },
      'solution-price-range': {
        id: 'solution-price-range',
        type: 'bot',
        content: 'What is the approximate price range of your solution?',
        options: [
          { text: 'Under $250K', value: 'under-250k', nextId: 'funding-knowledge' },
          { text: '$250K - $1M', value: '250k-1m', nextId: 'funding-knowledge' },
          { text: '$1M - $10M', value: '1m-10m', nextId: 'funding-knowledge' },
          { text: 'Over $10M', value: 'over-10m', nextId: 'funding-knowledge' }
        ]
      },
      'funding-knowledge': {
        id: 'funding-knowledge',
        type: 'bot',
        content: 'How familiar are you with federal funding and budget cycles?',
        options: [
          { text: 'Very familiar', value: 'very-familiar', nextId: 'funding-timeframe' },
          { text: 'Somewhat familiar', value: 'somewhat-familiar', nextId: 'funding-basics' },
          { text: 'Not familiar', value: 'not-familiar', nextId: 'funding-basics' }
        ]
      },
      'funding-basics': {
        id: 'funding-basics',
        type: 'bot',
        content: 'Federal funding operates on an annual cycle, with the fiscal year running from October 1 to September 30. Funds are typically appropriated in different categories: Operations and Maintenance (O&M), Research and Development (R&D), and Procurement. Understanding which category your solution falls under is important.',
        nextId: 'funding-timeframe',
        delay: 4000
      },
      'funding-timeframe': {
        id: 'funding-timeframe',
        type: 'bot',
        content: 'What is your desired timeframe for securing a federal contract?',
        options: [
          { text: 'ASAP (< 3 months)', value: 'asap', nextId: 'existing-relationships' },
          { text: 'Short-term (3-6 months)', value: 'short-term', nextId: 'existing-relationships' },
          { text: 'Medium-term (6-12 months)', value: 'medium-term', nextId: 'existing-relationships' },
          { text: 'Long-term (> 12 months)', value: 'long-term', nextId: 'existing-relationships' }
        ]
      },
      'existing-relationships': {
        id: 'existing-relationships',
        type: 'bot',
        content: 'Do you have existing relationships with any federal agencies or program offices?',
        options: [
          { text: 'Yes, strong relationships', value: 'strong', nextId: 'funding-recommendations' },
          { text: 'Yes, but limited', value: 'limited', nextId: 'funding-recommendations' },
          { text: 'No existing relationships', value: 'none', nextId: 'funding-recommendations' }
        ]
      },
      'funding-recommendations': {
        id: 'funding-recommendations',
        type: 'bot',
        content: 'Based on your inputs, here are potential funding approaches:',
        nextId: 'funding-options',
        delay: 2000
      },
      'funding-options': {
        id: 'funding-options',
        type: 'bot',
        content: 'Consider these funding options for your solution:',
        options: [
          { text: 'Existing Program Funds', value: 'existing-program', nextId: 'bot-transition' },
          { text: 'Small Business Innovation Research (SBIR)', value: 'sbir', nextId: 'bot-transition' },
          { text: 'Other Transaction Authority (OTA)', value: 'ota', nextId: 'bot-transition' },
          { text: 'End of Year Funding', value: 'end-of-year', nextId: 'bot-transition' }
        ]
      },
      'bot-transition': {
        id: 'bot-transition',
        type: 'bot',
        content: 'Great! Now that we've identified potential funding sources, let's develop a procurement strategy that aligns with these options.',
        nextId: 'transition-to-procurement',
        delay: 2000
      },
      'transition-to-procurement': {
        id: 'transition-to-procurement',
        type: 'bot',
        content: 'I\'m transitioning you to our Procurement Strategy Bot...',
        delay: 1500
      }
    }
  },
  {
    id: 'procurement',
    name: 'Procurement Strategy',
    description: 'Develop an effective procurement strategy',
    startMessageId: 'welcome',
    messages: {
      'welcome': {
        id: 'welcome',
        type: 'bot',
        content: 'Now I\'ll help you develop a procurement strategy. The right contract vehicle is critical for successful federal sales.',
        nextId: 'business-size',
        delay: 1000
      },
      'business-size': {
        id: 'business-size',
        type: 'bot',
        content: 'What is the size of your business?',
        options: [
          { text: 'Large Business', value: 'large', nextId: 'socioeconomic-status' },
          { text: 'Small Business', value: 'small', nextId: 'socioeconomic-status' }
        ]
      },
      'socioeconomic-status': {
        id: 'socioeconomic-status',
        type: 'bot',
        content: 'Do you qualify for any socioeconomic designations?',
        options: [
          { text: 'Woman-Owned Small Business', value: 'wosb', nextId: 'contract-vehicles' },
          { text: '8(a) / Disadvantaged', value: '8a', nextId: 'contract-vehicles' },
          { text: 'Service-Disabled Veteran-Owned', value: 'sdvosb', nextId: 'contract-vehicles' },
          { text: 'HUBZone', value: 'hubzone', nextId: 'contract-vehicles' },
          { text: 'None of the above', value: 'none', nextId: 'contract-vehicles' }
        ]
      },
      'contract-vehicles': {
        id: 'contract-vehicles',
        type: 'bot',
        content: 'Do you currently hold any federal contract vehicles?',
        options: [
          { text: 'GSA Schedule', value: 'gsa', nextId: 'competition-preference' },
          { text: 'SEWP', value: 'sewp', nextId: 'competition-preference' },
          { text: 'Other IDIQs', value: 'idiq', nextId: 'competition-preference' },
          { text: 'None', value: 'none', nextId: 'vehicle-info' }
        ]
      },
      'vehicle-info': {
        id: 'vehicle-info',
        type: 'bot',
        content: 'Contract vehicles are pre-competed contracts that facilitate the procurement process. Without one, you may need to pursue open market opportunities or partner with a company that has the appropriate vehicle.',
        nextId: 'competition-preference',
        delay: 3000
      },
      'competition-preference': {
        id: 'competition-preference',
        type: 'bot',
        content: 'What is your preference regarding competition for this opportunity?',
        options: [
          { text: 'Sole source (no competition)', value: 'sole-source', nextId: 'procurement-recommendations' },
          { text: 'Limited competition', value: 'limited', nextId: 'procurement-recommendations' },
          { text: 'Full and open competition', value: 'full-open', nextId: 'procurement-recommendations' },
          { text: 'Not sure', value: 'not-sure', nextId: 'competition-info' }
        ]
      },
      'competition-info': {
        id: 'competition-info',
        type: 'bot',
        content: 'The level of competition affects your approach. Sole source contracts are faster but require specific justifications. Limited competition (set-asides) can leverage socioeconomic status. Full and open competition is accessible to all but more competitive.',
        nextId: 'procurement-recommendations',
        delay: 3000
      },
      'procurement-recommendations': {
        id: 'procurement-recommendations',
        type: 'bot',
        content: 'Based on your inputs, here are recommended procurement approaches:',
        nextId: 'procurement-options',
        delay: 2000
      },
      'procurement-options': {
        id: 'procurement-options',
        type: 'bot',
        content: 'Consider these procurement strategies:',
        options: [
          { text: 'Direct Small Business Set-Aside', value: 'set-aside', nextId: 'bot-transition' },
          { text: 'GSA Schedule Purchase', value: 'gsa-purchase', nextId: 'bot-transition' },
          { text: 'Simplified Acquisition', value: 'simplified', nextId: 'bot-transition' },
          { text: 'Sole Source Justification', value: 'sole-source-j', nextId: 'bot-transition' }
        ]
      },
      'bot-transition': {
        id: 'bot-transition',
        type: 'bot',
        content: 'Great! Now that we have a procurement strategy, let\'s discuss acquisition support to help you navigate the process effectively.',
        nextId: 'transition-to-acquisition',
        delay: 2000
      },
      'transition-to-acquisition': {
        id: 'transition-to-acquisition',
        type: 'bot',
        content: 'I\'m transitioning you to our Acquisition Support Bot...',
        delay: 1500
      }
    }
  },
  {
    id: 'acquisition',
    name: 'Acquisition Support',
    description: 'Get support for the acquisition process',
    startMessageId: 'welcome',
    messages: {
      'welcome': {
        id: 'welcome',
        type: 'bot',
        content: 'Now I\'ll help you understand the acquisition support needs for your federal sale. Navigating the acquisition process requires specific knowledge and resources.',
        nextId: 'acquisition-experience',
        delay: 1000
      },
      'acquisition-experience': {
        id: 'acquisition-experience',
        type: 'bot',
        content: 'How experienced is your team with federal acquisitions?',
        options: [
          { text: 'Very experienced', value: 'very', nextId: 'specific-support' },
          { text: 'Somewhat experienced', value: 'somewhat', nextId: 'specific-support' },
          { text: 'Limited experience', value: 'limited', nextId: 'acquisition-basics' },
          { text: 'No experience', value: 'none', nextId: 'acquisition-basics' }
        ]
      },
      'acquisition-basics': {
        id: 'acquisition-basics',
        type: 'bot',
        content: 'The federal acquisition process involves multiple stages from market research to contract award. Key players include Contracting Officers (KOs), Contracting Officer Representatives (CORs), and Program Managers. Understanding their roles and requirements is essential.',
        nextId: 'specific-support',
        delay: 4000
      },
      'specific-support': {
        id: 'specific-support',
        type: 'bot',
        content: 'What specific acquisition support do you need?',
        options: [
          { text: 'Proposal Development', value: 'proposal', nextId: 'capture-management' },
          { text: 'Compliance Review', value: 'compliance', nextId: 'capture-management' },
          { text: 'Pricing Strategy', value: 'pricing', nextId: 'capture-management' },
          { text: 'Contract Negotiation', value: 'negotiation', nextId: 'capture-management' }
        ]
      },
      'capture-management': {
        id: 'capture-management',
        type: 'bot',
        content: 'Do you have a formal capture management process for pursuing federal opportunities?',
        options: [
          { text: 'Yes, well-established', value: 'established', nextId: 'opportunity-tracking' },
          { text: 'Yes, but limited', value: 'limited', nextId: 'capture-info' },
          { text: 'No formal process', value: 'none', nextId: 'capture-info' }
        ]
      },
      'capture-info': {
        id: 'capture-info',
        type: 'bot',
        content: 'Capture management is the process of pursuing and winning federal opportunities. It includes identifying opportunities, building relationships with key stakeholders, developing win strategies, and preparing competitive proposals.',
        nextId: 'opportunity-tracking',
        delay: 3000
      },
      'opportunity-tracking': {
        id: 'opportunity-tracking',
        type: 'bot',
        content: 'How do you currently track federal opportunities?',
        options: [
          { text: 'Commercial tools (GovWin, etc.)', value: 'commercial', nextId: 'teaming-partners' },
          { text: 'SAM.gov only', value: 'sam', nextId: 'teaming-partners' },
          { text: 'Manual tracking', value: 'manual', nextId: 'teaming-partners' },
          { text: 'We don\'t track opportunities', value: 'none', nextId: 'tracking-info' }
        ]
      },
      'tracking-info': {
        id: 'tracking-info',
        type: 'bot',
        content: 'Effective opportunity tracking is essential for federal sales success. SAM.gov is the official source for federal opportunities, but commercial tools can provide additional insights and forecasting capabilities.',
        nextId: 'teaming-partners',
        delay: 3000
      },
      'teaming-partners': {
        id: 'teaming-partners',
        type: 'bot',
        content: 'Are you open to teaming with partners to enhance your federal sales capabilities?',
        options: [
          { text: 'Yes, actively seeking partners', value: 'actively', nextId: 'acquisition-recommendations' },
          { text: 'Yes, for specific capabilities', value: 'specific', nextId: 'acquisition-recommendations' },
          { text: 'Prefer to pursue independently', value: 'independent', nextId: 'acquisition-recommendations' }
        ]
      },
      'acquisition-recommendations': {
        id: 'acquisition-recommendations',
        type: 'bot',
        content: 'Based on your inputs, here are recommended acquisition support approaches:',
        nextId: 'support-options',
        delay: 2000
      },
      'support-options': {
        id: 'support-options',
        type: 'bot',
        content: 'Consider these acquisition support strategies:',
        options: [
          { text: 'Hire Federal Capture Consultant', value: 'consultant', nextId: 'bot-transition' },
          { text: 'Partner with Experienced Federal Contractor', value: 'partner', nextId: 'bot-transition' },
          { text: 'Develop Internal Capture Capabilities', value: 'internal', nextId: 'bot-transition' },
          { text: 'Leverage Agency Small Business Office', value: 'sbo', nextId: 'bot-transition' }
        ]
      },
      'bot-transition': {
        id: 'bot-transition',
        type: 'bot',
        content: 'Great! Now that we\'ve addressed acquisition support, let\'s finalize with deal execution strategies to close your federal sale.',
        nextId: 'transition-to-execution',
        delay: 2000
      },
      'transition-to-execution': {
        id: 'transition-to-execution',
        type: 'bot',
        content: 'I\'m transitioning you to our Deal Execution Bot...',
        delay: 1500
      }
    }
  },
  {
    id: 'execution',
    name: 'Deal Execution',
    description: 'Finalize and execute your federal deal',
    startMessageId: 'welcome',
    messages: {
      'welcome': {
        id: 'welcome',
        type: 'bot',
        content: 'Finally, I\'ll help you with deal execution strategies. Closing a federal deal requires attention to detail and proper follow-through.',
        nextId: 'proposal-capability',
        delay: 1000
      },
      'proposal-capability': {
        id: 'proposal-capability',
        type: 'bot',
        content: 'How would you rate your proposal development capabilities?',
        options: [
          { text: 'Strong - experienced team', value: 'strong', nextId: 'win-rate' },
          { text: 'Moderate - some experience', value: 'moderate', nextId: 'win-rate' },
          { text: 'Limited - need assistance', value: 'limited', nextId: 'proposal-info' }
        ]
      },
      'proposal-info': {
        id: 'proposal-info',
        type: 'bot',
        content: 'Federal proposals require strict compliance with instructions and often have specific formats and requirements. Professional assistance can significantly improve your chances of success.',
        nextId: 'win-rate',
        delay: 3000
      },
      'win-rate': {
        id: 'win-rate',
        type: 'bot',
        content: 'What is your current win rate for federal proposals (if applicable)?',
        options: [
          { text: 'High (>50%)', value: 'high', nextId: 'pricing-strategy' },
          { text: 'Moderate (25-50%)', value: 'moderate', nextId: 'pricing-strategy' },
          { text: 'Low (<25%)', value: 'low', nextId: 'pricing-strategy' },
          { text: 'No prior experience', value: 'none', nextId: 'pricing-strategy' }
        ]
      },
      'pricing-strategy': {
        id: 'pricing-strategy',
        type: 'bot',
        content: 'What pricing strategy do you typically use for federal opportunities?',
        options: [
          { text: 'Premium pricing', value: 'premium', nextId: 'contract-type' },
          { text: 'Competitive pricing', value: 'competitive', nextId: 'contract-type' },
          { text: 'Low-cost leader', value: 'low-cost', nextId: 'contract-type' },
          { text: 'Not sure', value: 'unsure', nextId: 'pricing-info' }
        ]
      },
      'pricing-info': {
        id: 'pricing-info',
        type: 'bot',
        content: 'Federal pricing strategy should consider the contract type, competition, and value proposition. Best value is often more important than lowest price, particularly for complex solutions.',
        nextId: 'contract-type',
        delay: 3000
      },
      'contract-type': {
        id: 'contract-type',
        type: 'bot',
        content: 'What contract type are you most comfortable with?',
        options: [
          { text: 'Firm Fixed Price (FFP)', value: 'ffp', nextId: 'post-award' },
          { text: 'Time & Materials (T&M)', value: 'tm', nextId: 'post-award' },
          { text: 'Cost-Plus', value: 'cost-plus', nextId: 'post-award' },
          { text: 'Not familiar with contract types', value: 'unfamiliar', nextId: 'contract-info' }
        ]
      },
      'contract-info': {
        id: 'contract-info',
        type: 'bot',
        content: 'Contract types allocate risk between the government and contractor. FFP places risk on the contractor but offers profit potential. T&M and Cost-Plus reduce contractor risk but limit profit and require more government oversight.',
        nextId: 'post-award',
        delay: 3000
      },
      'post-award': {
        id: 'post-award',
        type: 'bot',
        content: 'How prepared are you for post-award contract management?',
        options: [
          { text: 'Well prepared', value: 'well', nextId: 'execution-recommendations' },
          { text: 'Somewhat prepared', value: 'somewhat', nextId: 'execution-recommendations' },
          { text: 'Not prepared', value: 'not', nextId: 'post-award-info' }
        ]
      },
      'post-award-info': {
        id: 'post-award-info',
        type: 'bot',
        content: 'Post-award management includes contract administration, compliance with reporting requirements, deliverable management, and maintaining customer relationships. Proper execution is crucial for future opportunities and past performance ratings.',
        nextId: 'execution-recommendations',
        delay: 3000
      },
      'execution-recommendations': {
        id: 'execution-recommendations',
        type: 'bot',
        content: 'Based on your inputs, here are recommended deal execution strategies:',
        nextId: 'execution-options',
        delay: 2000
      },
      'execution-options': {
        id: 'execution-options',
        type: 'bot',
        content: 'Consider these execution strategies:',
        options: [
          { text: 'Develop Robust Compliance Program', value: 'compliance', nextId: 'report-generation' },
          { text: 'Implement Formal Capture Process', value: 'capture', nextId: 'report-generation' },
          { text: 'Engage Proposal Development Support', value: 'proposal', nextId: 'report-generation' },
          { text: 'Establish Post-Award Management Team', value: 'post-award-team', nextId: 'report-generation' }
        ]
      },
      'report-generation': {
        id: 'report-generation',
        type: 'bot',
        content: 'Thank you for completing all five sections of our federal sales advisor chatbot! I\'ll now generate a comprehensive report with your personalized federal sales strategy.',
        nextId: 'final-step',
        delay: 2000
      },
      'final-step': {
        id: 'final-step',
        type: 'bot',
        content: 'Would you like to receive your report via email?',
        options: [
          { text: 'Yes, email me the report', value: 'email', nextId: 'email-prompt' },
          { text: 'No, just show me the summary', value: 'summary', nextId: 'summary-display' }
        ]
      },
      'email-prompt': {
        id: 'email-prompt',
        type: 'bot',
        content: 'Please enter your email address to receive your personalized federal sales strategy report:',
        nextId: 'thank-you',
        delay: 1000
      },
      'thank-you': {
        id: 'thank-you',
        type: 'bot',
        content: 'Thank you! Your personalized federal sales strategy report will be emailed to you shortly. This report includes a step-by-step action plan based on your inputs across all five areas of the federal sales process.',
        delay: 2000
      },
      'summary-display': {
        id: 'summary-display',
        type: 'bot',
        content: 'Here\'s a summary of your personalized federal sales strategy across all five areas. For the detailed report with action items and specific recommendations, please use the email option.',
        delay: 2000
      }
    }
  }
];

export const getCurrentBot = (botId: string): BotConfig | undefined => {
  return bots.find(bot => bot.id === botId);
};

export const getInitialBot = (): BotConfig => {
  return bots[0];
};
