// api/update-projects.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Simple secret to prevent randos from calling this endpoint
    const { projects } = req.body;

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const OWNER = process.env.GITHUB_OWNER;       // e.g. "victordev"
    const REPO = process.env.GITHUB_REPO;         // e.g. "portfolio"
    const FILE_PATH = '/data/workingon.json';   // adjust to your actual path

    try{

        
        // 1. Get current file SHA (GitHub requires it for updates)
        const getRes = await fetch(
            `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
            { headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, Accept: 'application/vnd.github+json' } }
        );

        if (!getRes.ok) {
            const err = await getRes.json();
            console.error('Failed to fetch file SHA:', err);
            return res.status(500).json({ error: 'Failed to fetch file from GitHub', detail: err.message });
        }

        const fileData = await getRes.json();

        // 2. Push updated content
        const updatedContent = btoa(unescape(encodeURIComponent(JSON.stringify(projects, null, 2))));

        const putRes = await fetch(
            `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
            {
                method: 'PUT',
                headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: 'chore: update projects via admin panel',
                    content: updatedContent,
                    sha: fileData.sha,
                }),
            }
        );

        if (!putRes.ok) {
            const err = await putRes.json();
            console.error('Failed to push to GitHub:', err);
            return res.status(500).json({ error: 'Failed to update file on GitHub', detail: err.message });
        }

        return res.status(200).json({ success: true });

    } catch (err) {
        console.error('Unexpected error:', err);
        return res.status(500).json({ error: 'Unexpected server error', detail: err.message });
    }
}