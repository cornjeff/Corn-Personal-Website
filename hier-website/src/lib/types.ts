export interface ContactFormData {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
}

export interface MaintenanceRequest {
  id: string
  tenant_id: string
  property_address: string
  unit_number?: string
  issue_type: IssueType
  description: string
  urgency: UrgencyLevel
  status: RequestStatus
  photo_urls?: string[]
  submitted_at: string
  updated_at: string
}

export type IssueType = 'plumbing' | 'electrical' | 'hvac' | 'appliance' | 'structural' | 'pest' | 'other'
export type UrgencyLevel = 'routine' | 'urgent' | 'emergency'
export type RequestStatus = 'submitted' | 'in_review' | 'scheduled' | 'resolved'

export interface Tenant {
  id: string
  full_name: string
  email: string
  property_address?: string
  unit_number?: string
  created_at: string
}

export const ISSUE_TYPE_LABELS: Record<IssueType, string> = {
  plumbing: 'Plumbing',
  electrical: 'Electrical',
  hvac: 'HVAC / Heating & Cooling',
  appliance: 'Appliance',
  structural: 'Structural / Exterior',
  pest: 'Pest Control',
  other: 'Other',
}

export const URGENCY_LABELS: Record<UrgencyLevel, string> = {
  routine: 'Routine — no rush',
  urgent: 'Urgent — within a few days',
  emergency: 'Emergency — immediate attention needed',
}

export const STATUS_LABELS: Record<RequestStatus, string> = {
  submitted: 'Submitted',
  in_review: 'In Review',
  scheduled: 'Scheduled',
  resolved: 'Resolved',
}

export const SERVICE_OPTIONS = [
  'Real Estate Development',
  'Property Management',
  'Commercial Brokerage',
  'Residential Brokerage',
  'Financial Analysis & Consulting',
  'Other / General Inquiry',
]
