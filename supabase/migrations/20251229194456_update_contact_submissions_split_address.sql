/*
  # Update Contact Submissions Table - Split Address Fields

  1. Changes
    - Drop `address` column from `contact_submissions` table
    - Add `street_address` (text, required) - Street address of property
    - Add `city` (text, required) - City name
    - Add `state` (text, default FL) - State abbreviation
    - Add `zip_code` (text, required) - 5-digit ZIP code

  2. Notes
    - This migration updates the address structure from a single field to separate components
    - Allows better integration with CRM systems like JobNimbus
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'address'
  ) THEN
    ALTER TABLE contact_submissions DROP COLUMN address;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'street_address'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN street_address text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'city'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN city text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'state'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN state text NOT NULL DEFAULT 'FL';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'zip_code'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN zip_code text NOT NULL DEFAULT '';
  END IF;
END $$;
