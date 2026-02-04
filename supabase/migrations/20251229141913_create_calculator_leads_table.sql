/*
  # Create Calculator Leads Table

  ## Overview
  This migration creates a table to store leads captured from the roof cost calculator tool.
  Homeowners provide contact information to view their estimate, creating high-quality leads.

  1. New Tables
    - `calculator_leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Full name of the homeowner
      - `email` (text) - Email address for follow-up
      - `phone` (text) - Phone number for contact
      - `address` (text, optional) - Property address if provided
      - `roof_size` (text) - Selected roof size (e.g., "Average", "Large")
      - `roof_sqft` (integer) - Square footage selected
      - `roof_type` (text) - Type of roof selected (e.g., "Shingle", "Tile", "Metal", "Flat")
      - `estimated_price_low` (integer) - Low end of estimate shown
      - `estimated_price_high` (integer) - High end of estimate shown
      - `created_at` (timestamptz) - Timestamp when lead was captured

  2. Security
    - Enable RLS on `calculator_leads` table
    - Only authenticated admins can view leads (no public access)
    - Leads are write-only from the public - users can insert but cannot read

  3. Indexes
    - Index on `created_at` for efficient sorting by date
    - Index on `email` for duplicate detection
*/

CREATE TABLE IF NOT EXISTS calculator_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text,
  roof_size text NOT NULL,
  roof_sqft integer NOT NULL,
  roof_type text NOT NULL,
  estimated_price_low integer NOT NULL,
  estimated_price_high integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE calculator_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert calculator leads"
  ON calculator_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_calculator_leads_created_at ON calculator_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_calculator_leads_email ON calculator_leads(email);