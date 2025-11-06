// pages/api/resume.ts
import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const filePath = path.resolve('./public/files/resume.pdf');
  const fileBuffer = fs.readFileSync(filePath);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename=resume.pdf');
  res.send(fileBuffer);
}
