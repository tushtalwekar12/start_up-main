# Resume and Cover Letter Templates

This directory contains the template files for the resume and cover letter templates. To add new templates, follow these steps:

## File Structure

For each template, you need to add the following files:

1. Preview Image (PNG):
   - `[template-id].png`
   - Example: `modern-minimal.png`
   - Recommended size: 800x1000 pixels
   - Format: PNG with transparent background

2. Template Files:
   - PDF version: `[template-id].pdf`
   - Word version: `[template-id].docx`
   - Example: `modern-minimal.pdf` and `modern-minimal.docx`

## Required Files

The following files are required for the current templates:

### Resume Templates
- modern-minimal.png, .pdf, .docx
- executive-pro.png, .pdf, .docx
- creative-portfolio.png, .pdf, .docx

### Cover Letter Templates
- standard-cover.png, .pdf, .docx
- creative-cover.png, .pdf, .docx
- technical-cover.png, .pdf, .docx

## Adding New Templates

1. Create your template files (PDF and Word versions)
2. Create a preview image
3. Add the files to this directory
4. Update the `templates` array in `src/components/ResumeTemplates.jsx` with the new template information

## File Naming Convention

- Use lowercase letters
- Use hyphens (-) to separate words
- Keep file names short but descriptive
- Use consistent naming across all file types for the same template 