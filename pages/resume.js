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

            <div className="absolute top-4 right-4">
                <a
                    href="/files/resume.pdf"
                    download
                    className="bg-red-500 text-white px-4 py-2 rounded shadow  transition"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
}
