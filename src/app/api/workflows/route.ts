import { NextResponse } from 'next/server';
import { workflowTemplates } from '@/lib/workflow-integration';

// GET - Fetch all workflow templates
export async function GET() {
  try {
    return NextResponse.json({ 
      success: true,
      workflows: workflowTemplates 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false,
      error: 'Failed to retrieve workflows' 
    }, { status: 500 });
  }
}

// POST - Create a new property alert workflow
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { templateId, customization } = body;
    
    // Find the template
    const template = workflowTemplates.find(wf => wf.id === templateId);
    if (!template) {
      return NextResponse.json({ 
        success: false, 
        error: 'Workflow template not found' 
      }, { status: 404 });
    }
    
    // In a real app, we would:
    // 1. Create a saved search from the user's criteria
    // 2. Set up automation with n8n to monitor NWMLS data for matches
    // 3. Configure notification preferences
    
    // For demo purposes, just return a success response
    return NextResponse.json({ 
      success: true,
      workflow: {
        ...template,
        id: `custom-${Date.now()}`,
        name: customization?.name || template.name,
        description: customization?.description || template.description,
        searchCriteria: customization?.searchCriteria || {
          neighborhoods: ['Seattle', 'Bellevue', 'Kirkland'],
          minPrice: 500000,
          maxPrice: 2000000,
          minBeds: 3,
          propertyTypes: ['Single Family', 'Townhouse']
        }
      },
      message: 'Property alert created successfully'
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating workflow:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Failed to create property alert' 
    }, { status: 400 });
  }
} 