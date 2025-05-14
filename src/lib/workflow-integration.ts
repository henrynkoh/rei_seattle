/**
 * This file contains examples and concepts for integrating with n8n
 * for workflow automation in the Seattle Homes application.
 * 
 * Note: This is conceptual code, not functional implementation.
 */

// Types for workflow triggers and actions
export interface WorkflowTrigger {
  id: string;
  name: string;
  description: string;
  eventType: 'newListing' | 'priceChange' | 'statusChange' | 'savedSearch' | 'tourRequested';
}

export interface WorkflowAction {
  id: string;
  name: string;
  description: string;
  actionType: 'sendEmail' | 'sendSMS' | 'createCalendarEvent' | 'postToSlack' | 'saveToNotion';
  config: Record<string, any>;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  trigger: WorkflowTrigger;
  actions: WorkflowAction[];
  createdAt: Date;
  updatedAt: Date;
}

// Example workflow templates
export const workflowTemplates: Workflow[] = [
  {
    id: 'wf-1',
    name: 'New Listing Alert',
    description: 'Get notified when new properties matching your criteria are listed on NWMLS',
    isActive: true,
    trigger: {
      id: 'trigger-1',
      name: 'New Listing Matches Criteria',
      description: 'Triggered when a new property listing matches your saved search criteria',
      eventType: 'newListing',
    },
    actions: [
      {
        id: 'action-1',
        name: 'Send Email Notification',
        description: 'Send an email with the new property details',
        actionType: 'sendEmail',
        config: {
          to: '{{USER_EMAIL}}',
          subject: 'New Property Alert: {{PROPERTY_ADDRESS}}',
          template: 'new-listing-email',
        },
      },
      {
        id: 'action-2',
        name: 'Send SMS Notification',
        description: 'Send a text message alert',
        actionType: 'sendSMS',
        config: {
          to: '{{USER_PHONE}}',
          message: 'New property matching your criteria: {{PROPERTY_ADDRESS}} at {{PROPERTY_PRICE}}',
        },
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'wf-2',
    name: 'Price Drop Alert',
    description: 'Get notified when prices drop on properties you\'re watching',
    isActive: true,
    trigger: {
      id: 'trigger-2',
      name: 'Price Reduction',
      description: 'Triggered when a property price is reduced',
      eventType: 'priceChange',
    },
    actions: [
      {
        id: 'action-3',
        name: 'Send Email Alert',
        description: 'Send email with price change details',
        actionType: 'sendEmail',
        config: {
          to: '{{USER_EMAIL}}',
          subject: 'Price Reduced: {{PROPERTY_ADDRESS}}',
          template: 'price-change-email',
        },
      },
      {
        id: 'action-4',
        name: 'Add Calendar Reminder',
        description: 'Add a reminder to check the property',
        actionType: 'createCalendarEvent',
        config: {
          title: 'Review Price-Reduced Property: {{PROPERTY_ADDRESS}}',
          description: 'Price reduced from {{PREVIOUS_PRICE}} to {{NEW_PRICE}}',
          startDate: '{{TOMORROW}}',
          duration: 30,
        },
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Conceptual functions for workflow integration

/**
 * Registers a webhook with n8n for a specific event type
 */
export const registerWebhook = async (eventType: WorkflowTrigger['eventType'], workflowId: string) => {
  // This would connect to n8n API to register a webhook
  console.log(`Registered webhook for ${eventType} with workflow ${workflowId}`);
  return {
    webhookId: `webhook-${Date.now()}`,
    url: `https://n8n.example.com/webhook/${eventType}/${workflowId}`,
  };
};

/**
 * Triggers a workflow by sending event data to n8n
 */
export const triggerWorkflow = async (
  eventType: WorkflowTrigger['eventType'],
  eventData: Record<string, any>
) => {
  // This would connect to n8n API to trigger a workflow
  console.log(`Triggered ${eventType} workflow with data:`, eventData);
  return {
    success: true,
    executionId: `exec-${Date.now()}`,
  };
};

/**
 * Fetches workflow execution results from n8n
 */
export const getWorkflowResults = async (executionId: string) => {
  // This would connect to n8n API to get workflow execution results
  console.log(`Fetching results for execution ${executionId}`);
  return {
    status: 'completed',
    results: {
      // Example results
      summary: 'Notification sent successfully',
      actions: ['Email sent', 'SMS sent'],
    },
  };
};

/**
 * Example of how to use the workflow integration in the app for new listing notifications
 */
export const exampleWorkflowUsage = async () => {
  // When a new property matching criteria is found
  const propertyData = {
    id: 'prop-123',
    address: '123 Lakefront Dr, Kirkland, WA 98033',
    price: 1250000,
    beds: 4,
    baths: 3,
    sqft: 2850,
    type: 'Single Family',
    neighborhood: 'Moss Bay',
    mlsId: 'NW12345678',
  };
  
  // Trigger the "New Listing Alert" workflow
  const result = await triggerWorkflow('newListing', {
    property: propertyData,
    user: {
      email: 'user@example.com',
      phone: '+12065551234',
      name: 'John Doe',
    },
    searchCriteria: {
      neighborhoods: ['Kirkland', 'Bellevue'],
      minBeds: 3,
      maxPrice: 1500000,
    },
    discoveredAt: new Date().toISOString(),
  });
  
  return result;
}; 