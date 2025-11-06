// pages/resume.tsx
export default function ResumeViewer() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <iframe
        src="/files/CV_Mohammad_Ashiqur_Rahman.pdf#toolbar=0&navpanes=0&scrollbar=0"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Resume PDF"
      />
    </div>
  );
}
