/*
  # Make Address Required in Calculator Leads
  
  ## Overview
  Updates the calculator_leads table to make the address field required.
  This reflects the UI change where property address is now a mandatory field.
  
  1. Changes
    - Alter `calculator_leads.address` from nullable to NOT NULL
    - This ensures all future leads include a property address for accurate quoting
  
  2. Notes
    - Existing leads with NULL addresses (if any) will need to be handled
    - This migration will fail if there are existing NULL addresses
*/

-- Make address field required
DO $$
BEGIN
  -- First check if there are any NULL addresses
  IF EXISTS (
    SELECT 1 FROM calculator_leads WHERE address IS NULL
  ) THEN
    -- Update any NULL addresses to empty string before making NOT NULL
    UPDATE calculator_leads SET address = '' WHERE address IS NULL;
  END IF;
  
  -- Now make the column NOT NULL
  ALTER TABLE calculator_leads ALTER COLUMN address SET NOT NULL;
END $$;
